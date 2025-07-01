const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const isGET = req.method === 'GET';
  const prompt = isGET ? req.query.text : req.body.prompt;
  const model = (isGET ? req.query.model : req.body.model || 'gemini').toLowerCase();

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
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: 'API Error', details: err.message });
  }
};
