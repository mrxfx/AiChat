# AI MultiBot API (Node.js)

A free, no-API-key AI chatbot API that supports **ChatGPT**, **Gemini**, and **DeepSeek**, powered by public reverse proxies from [gpt4free.lol](https://gpt4free.lol/).

## 🚀 Features

- 🔀 Unified endpoint: `/api`
- ✅ No API key required
- 📡 Supports `GET` and `POST` requests
- 💬 Models: `chatgpt`, `gemini`, `deepseek`

---

## 📦 Example Usage

### 🔗 GET

```
https://your-vercel-app.vercel.app/api?text=Tell+me+a+joke&model=gemini
```

### 📡 POST

```bash
curl -X POST https://your-vercel-app.vercel.app/api \
  -H "Content-Type: application/json" \
  -d '{ "prompt": "Tell me a joke", "model": "chatgpt" }'
```

---

## 📁 Project Structure

```
ai-multibot-node/
├── api/
│   └── index.js
├── package.json
├── vercel.json
└── README.md
```

---

## 📤 Deployment

Deploy it on [Vercel](https://vercel.com) easily:

1. Upload this project at [vercel.com/import](https://vercel.com/import)
2. It will auto-detect and deploy
3. Your live API will be available under `/api`

---
Made with ❤️ by ChatGPT