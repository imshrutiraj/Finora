import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './src/config/env.js';
import apiRoutes from './src/routes/apiRoutes.js';
import { apiLimiter } from './src/middleware/rateLimiter.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { dbService } from './src/services/dbService.js';
import { geminiService } from './src/services/geminiService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security and CORS configuration
app.use(cors({
  origin: [config.frontendUrl, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsers with safe payload limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static uploads directory (read-only for generated receipts)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check and System Status endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'FINORA AI Security Engine',
    timestamp: new Date().toISOString(),
    ai_engine: geminiService.isConfigured() ? 'Gemini 1.5 Flash (Active)' : 'Finora Deterministic Rule Engine (Active)',
    database: dbService.isSupabaseConfigured() ? 'Supabase PostgreSQL' : 'Local Persistent Storage Engine'
  });
});

// Apply rate limiting to API routes
app.use('/api', apiLimiter);

// Mount main API router
app.use('/api', apiRoutes);

// Global Error Handler
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🛡️  FINORA AI Security Engine Backend`);
  console.log(`🚀 Server running on: http://localhost:${PORT}`);
  console.log(`📡 AI Engine: ${geminiService.isConfigured() ? 'Gemini 1.5 Flash' : 'Deterministic Rule Engine'}`);
  console.log(`💾 Database: ${dbService.isSupabaseConfigured() ? 'Supabase Cloud' : 'Local Persistent Store'}`);
  console.log(`====================================================`);
});
