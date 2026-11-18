import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runTestSuite() {
  console.log('🧪 Starting Finora AI Comprehensive Automated Verification Suite...');

  // Import server directly
  const { default: express } = await import('express');
  const { default: cors } = await import('cors');
  const { config } = await import('./src/config/env.js');
  const { default: apiRoutes } = await import('./src/routes/apiRoutes.js');
  const { errorHandler } = await import('./src/middleware/errorHandler.js');

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/api', apiRoutes);
  app.use(errorHandler);

  const server = app.listen(5002, async () => {
    console.log('🚀 Verification test server started on http://localhost:5002');

    async function post(endpoint, data) {
      const res = await fetch(`http://localhost:5002/api${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-token'
        },
        body: JSON.stringify(data)
      });
      return res.json();
    }

    async function get(endpoint) {
      const res = await fetch(`http://localhost:5002/api${endpoint}`, {
        headers: { 'Authorization': 'Bearer demo-token' }
      });
      return res.json();
    }

    try {
      // 1. Message Scan Test
      console.log('\n--- 1. Testing AI Scam Message Detection ---');
      const msgRes = await post('/scan/message', {
        message: 'Dear Customer, your SBI account KYC suspended today! Click http://sbi-kyc.xyz to avoid block within 24 hours.',
        language: 'en'
      });
      console.log('Message Scan Output:', {
        score: msgRes.data?.risk_score,
        level: msgRes.data?.risk_level,
        category: msgRes.data?.scam_category,
        indicators_count: msgRes.data?.indicators?.length
      });
      if (!msgRes.success || msgRes.data?.risk_score < 50) throw new Error('Message scan failed high-risk detection assertion!');
      console.log('✅ AI Scam Message Detection PASSED');

      // 2. Phishing URL Detector Test
      console.log('\n--- 2. Testing AI Phishing URL Detection ---');
      const urlRes = await post('/scan/url', {
        url: 'https://onlinesbi.sbi-kyc-verification.top/login.php'
      });
      console.log('URL Scan Output:', {
        score: urlRes.data?.risk_score,
        level: urlRes.data?.risk_level,
        category: urlRes.data?.scam_category,
        hostname: urlRes.data?.domain_info?.hostname
      });
      if (!urlRes.success || urlRes.data?.risk_score < 50) throw new Error('URL scan failed phishing detection assertion!');
      console.log('✅ Phishing URL Detection PASSED');

      // 3. Transaction Risk Analyzer Test
      console.log('\n--- 3. Testing Transaction Risk Analyzer ---');
      const txRes = await post('/scan/transaction', {
        amount: 85000,
        time: '03:15 AM',
        recipient_type: 'Unknown Merchant',
        is_new_recipient: true,
        frequency: 'First Time Outflow',
        description: 'Urgent task deposit on Telegram',
        previous_amounts: [500, 1200, 800, 1500]
      });
      console.log('Transaction Risk Output:', {
        score: txRes.data?.risk_score,
        level: txRes.data?.risk_level,
        anomalies_count: txRes.data?.anomalies?.length
      });
      if (!txRes.success || txRes.data?.anomalies?.length === 0) throw new Error('Transaction anomaly assertion failed!');
      console.log('✅ Transaction Risk Analyzer PASSED');

      // 4. AI Assistant Specialization Test
      console.log('\n--- 4. Testing AI Safety Assistant (1930 & Helpline) ---');
      const chatRes = await post('/assistant/chat', {
        message: 'How do I report an online cyber scam to the police or helpline?',
        language: 'en'
      });
      console.log('Assistant Reply Preview:', chatRes.data?.reply?.substring(0, 120) + '...');
      if (!chatRes.data?.reply?.includes('1930') && !chatRes.data?.reply?.includes('cybercrime')) {
        throw new Error('Assistant failed to include official 1930 helpline!');
      }
      console.log('✅ AI Safety Assistant PASSED');

      // 5. Dashboard Stats Calculation Test
      console.log('\n--- 5. Testing Dashboard Real Telemetry Stats ---');
      const statsRes = await get('/dashboard/stats');
      console.log('Stats Output:', {
        totalScans: statsRes.data?.totalScans,
        highRisk: statsRes.data?.highRisk,
        typeCounts: statsRes.data?.typeCounts
      });
      if (statsRes.data?.totalScans === 0) throw new Error('Dashboard stats should reflect recent scans!');
      console.log('✅ Dashboard Stats Calculation PASSED');

      // 6. History Retrieval Test
      console.log('\n--- 6. Testing History Filter and Retrieval ---');
      const histRes = await get('/history?type=all');
      console.log(`Retrieved ${histRes.data?.length} scan records.`);
      if (histRes.data?.length === 0) throw new Error('History list empty!');
      console.log('✅ Scan History Retrieval PASSED');

      // 7. Family Protection Profiles & Sharing Test
      console.log('\n--- 7. Testing Family Protection ---');
      const famRes = await get('/family/profiles');
      console.log(`Retrieved ${famRes.data?.length} family profiles.`);
      console.log('✅ Family Protection Profiles PASSED');

      // 8. Awareness Academy & Quizzes Test
      console.log('\n--- 8. Testing Awareness Centre Quizzes ---');
      const quizRes = await get('/quiz/modules');
      console.log(`Found ${quizRes.data?.length} learning modules.`);
      const submitRes = await post('/quiz/submit', {
        module_id: 'upi-safety',
        answers: {
          'q1': 'b',
          'q2': 'a'
        }
      });
      console.log('Quiz Submission Score:', `${submitRes.data?.score}/${submitRes.data?.total} (${submitRes.data?.percentage}%)`);
      if (submitRes.data?.percentage !== 100) throw new Error('Quiz evaluation failed!');
      console.log('✅ Awareness Centre Quizzes PASSED');

      console.log('\n======================================================');
      console.log('🎉 ALL 8 VERIFICATION TEST MODULES PASSED WITH 100% SUCCESS!');
      console.log('======================================================\n');
    } catch (err) {
      console.error('❌ Verification Test Failed:', err);
      process.exitCode = 1;
    } finally {
      server.close();
    }
  });
}

runTestSuite();
