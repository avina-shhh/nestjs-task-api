# NestJS Task Manager API

A simple yet complete RESTful API built using **NestJS** and **TypeScript** to manage a list of tasks.  
This project was built in **3 days** as part of my learning journey into TypeScript and NestJS.

---

## 🚀 Features

- Add new tasks
- Retrieve all tasks
- Retrieve task by ID
- Update task (title, description, isCompleted)
- Delete task
- Input validation using `class-validator`
- Structured with DTOs, service layers, and validation pipes
- Auto-incrementing task IDs

---

## 🧠 Tech Stack

- **NestJS**
- **TypeScript**
- **In-memory data storage** (No database yet)
- **Class-validator** for input validation

---

## 🧪 Endpoints

| Method | Route         | Description                                 |
|--------|---------------|---------------------------------------------|
| GET    | `/tasks`      | Get all tasks                               |
| GET    | `/tasks/:id`  | Get a specific task by ID                   |
| POST   | `/tasks`      | Create a new task                           |
| PATCH  | `/tasks/:id`  | Update task title, description, or status   |
| DELETE | `/tasks/:id`  | Delete a task                               |

---

## 📝 Sample Task Object

```json
{
  "id": 1,
  "title": "Learn NestJS",
  "description": "Complete mini project",
  "isCompleted": false
}


✅ Setup Instructions

# Clone the repository
git clone https://github.com/yourusername/nest-task-api.git

# Move into the folder
cd nest-task-api

# Install dependencies
npm install

# Start the app
npm run start:dev
