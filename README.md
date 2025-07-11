# 🎥 Gigglle Challenge Submission API

This is a lightweight Node.js backend application that simulates the "Challenge Submission" flow of the Gigglle app. It allows users to view challenges, submit video entries, and retrieve all submissions (with simulated moderation status). Data is stored locally in a JSON file—no database is used.

---

## 🚀 Features Implemented

- ✅ `GET /challenges` – Returns 5 dummy challenge entries
- ✅ `POST /submissions` – Accepts video submissions with validation
- ✅ `GET /submissions` – Returns all submissions with random moderation status
- ✅ `POST /submissions/preview` – Simulates preview before final submission
- ✅ Simulated processing delay using middleware
- ✅ Random moderation status (`pending`, `approved`, `rejected`)
- ✅ ASCII art console message on server start
- ✅ Proper modular folder structure (controllers, routes, middleware, utils)

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **body-parser**
- **multer** (for simulated form parsing)
- **File System (fs)** – used to read/write JSON data
- **No database used**

---

## 🛠️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/AmruthaRowbin/Game-Challenge.git
cd gigglle-challenge-api



