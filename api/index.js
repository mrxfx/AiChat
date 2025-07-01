const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.all('/', async (req, res) => {
  const prompt = req.method === 'GET' ? req.query.text : req.body.prompt;
  const model = (req.method === 'GET' ? req.query.model : req.body.model || 'gemini').toLowerCase();

  if (!prompt) {
    return res.json({ error: 'Prompt is required. Use ?text=your+question' });
  }

  let apiUrl = '', payload = {};

  if (model === 'chatgpt') {
    apiUrl = 'https://gpt4free.lol/api/chat';
    payload = {
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo'
    };
  } else if (model === 'gemini') {
    apiUrl = 'https://gpt4free.lol/api/google';
    payload = { messages: [{ role: 'user', content: prompt }] };
  } else if (model === 'deepseek') {
    apiUrl = 'https://gpt4free.lol/api/deepseek';
    payload = { messages: [{ role: 'user', content: prompt }] };
  } else {
    return res.json({ error: 'Invalid model. Use gemini, chatgpt, or deepseek' });
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    res.json(result);
  } catch (err) {
    res.json({ error: 'API Error', details: err.message });
  }
});

module.exports = app;
