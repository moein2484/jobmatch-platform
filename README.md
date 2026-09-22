# JobMatch

JobMatch is a full-stack job matching platform built with **Next.js** and **Tailwind CSS**.

The goal of JobMatch is to help users find relevant job opportunities based on their professional profile, skills, experience, and job preferences.

## ✨ Features

* 🔐 User registration and authentication
* 👤 Profile completion
* 💼 Professional information management
* 🧠 Personalized job matching
* 🔎 Job search and filtering
* 📋 Job details
* ⭐ Save interesting jobs
* 📩 Apply for jobs
* 🤖 AI-powered job recommendations

## 🛠️ Tech Stack

* **Next.js**
* **React**
* **Tailwind CSS**
* **MongoDB**
* **Mongoose**
* **Zod**
* **React Hook Form**
* **JWT Authentication**
* **OpenAI API**

## 📱 Main Pages

JobMatch currently focuses on a small and simple user flow:

1. **Register** — Create a new account
2. **Login** — Sign in to an existing account
3. **Complete Profile** — Add professional information, skills, experience, and job preferences
4. **Home** — Explore relevant job opportunities

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/jobmatch.git
```

Navigate to the project:

```bash
cd jobmatch
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
MONGODB_URI=
JWT_SECRET=
OPENAI_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```



## 🔄 User Flow

```text
Register
   ↓
Login
   ↓
Complete Profile
   ↓
Home
   ↓
Job Matching
   ↓
Job Recommendations
```

## 🗺️ Roadmap

* [x] Project setup
* [x] Landing / Home page
* [x] Registration UI
* [x] Login UI
* [x] Profile completion UI
* [ ] Authentication
* [ ] MongoDB integration
* [ ] User profile API
* [ ] Job data and API
* [ ] Job search and filtering
* [ ] Job matching system
* [ ] AI-powered recommendations
* [ ] Production deployment

## 📌 Project Status

JobMatch is currently under active development.

The initial version focuses on building a clean authentication and profile experience before implementing the job matching and AI features.

## 📄 License

This project is for educational and portfolio purposes.
