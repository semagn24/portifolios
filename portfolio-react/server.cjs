const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: '🚀 Portfolio API is running!' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log('\n📬 New Contact Message:');
    console.log(`   From: ${name} <${email}>`);
    console.log(`   Message: ${message}\n`);

    // Optional: configure a real transporter here (e.g. Gmail via env vars)
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ from: email, to: 'semagnlegese@gmail.com', subject: `Portfolio Contact from ${name}`, text: message });

    res.json({ success: true, message: 'Message received! I will get back to you soon.' });
});

app.listen(PORT, () => {
    console.log('');
    console.log('🚀 Portfolio Node.js Backend is Running!');
    console.log('=========================================');
    console.log(`   API: http://localhost:${PORT}/api/health`);
    console.log('=========================================');
    console.log('⏹️  Press Ctrl+C to stop');
});
