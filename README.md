# 💬 Real-Time Chat Application

A **real-time chat application** where anyone can join a chat room using a unique **Room ID**.  
Built with **TypeScript**, **WebSockets**, **Turborepo**, and **PostgreSQL**, it provides a type-safe, scalable, and responsive chatting experience.

---

## Features

- 🔗 Join any chat room using a **Room ID**
- 💬 Real-time messaging powered by **WebSockets**
- 🎨 Beautiful UI styled with **Tailwind CSS**
- ⚡ Monorepo setup using **Turborepo** for scalability and modular development
- 🗄️ **PostgreSQL** for persistent data storage
- 🧠 **Prisma ORM** for clean and type-safe database operations
- 🛠️ Fully written in **TypeScript** for safety and maintainability

---

## Technologies Used

| Category | Technology |
|-----------|-------------|
| **Frontend** | React, Tailwind CSS, WebSocket |
| **Backend** | Node.js, Express, WebSocket, HTTP Server |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **Monorepo Tooling** | Turborepo |
| **Language** | TypeScript |


## 🧭 How to Run the Project Locally

Follow the steps below to set up and run the project on your local machine.

---

### 🧱 Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18 or above)
- **npm** or **pnpm**
- **PostgreSQL** (running locally or remotely)
- **Git**

---

### 🪜 Step 1: Clone the Repository

```bash
# ssh
git clone git@github.com:As-ajay06/bukbuk.git

# https
git clone https://github.com/As-ajay06/bukbuk.git

cd chat-app
```

### Install the depedencies

```bash
npm install
# or
pnpm install
```
### Configure envvironment varialbles

<!-- replace this with your USERNAME and PASSWORD -->
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/chatapp"

### Initialize prisma and database

```bash
npx prisma migrate dev --name init

npx prisma generate
```

### Start the devlopment server

```bash
npm run dev
# or 
# make sure you are in the root folder
pnpm run dev
