# 🍳 Food Recipe Generator

An AI-powered web application that generates delicious recipes from ingredients detected in an uploaded image.

---

## 🚀 Features

* 📸 Upload an image of ingredients
* 🤖 AI analyzes ingredients using computer vision
* 🍲 Generates complete recipes instantly
* 💡 Suggests alternative recipes
* 🥗 Supports dietary preferences (veg, vegan, etc.)
* 💾 Save & manage recipes

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Axios
* Context API

**Backend**

* Node.js
* Express.js
* MongoDB

**AI Integration**

* Groq API (LLM-based recipe generation)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Pavanakv/Food-Recipe-Generator.git
cd Food-Recipe-Generator
```

---

### 2️⃣ Backend setup

```bash
cd Server-Files
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
GROQ_API_KEY=your_api_key
```

Run backend:

```bash
node index.js
```

---

### 3️⃣ Frontend setup

```bash
cd ../Client-files
npm install
npm run dev
```

---

## 🌐 API Endpoints

* `POST /api/recipes/analyze` → Analyze image
* `POST /api/recipes/generate` → Generate recipe
* `POST /api/recipes/suggestions` → Get suggestions
* `GET /api/recipes/saved` → Fetch saved recipes

---

## 📌 Future Improvements

* Drag & drop image upload
* Better UI/UX
* Deployment (Render/Vercel)
* Voice input for ingredients

---

## 👨‍💻 Author

**Pavana K.V**

