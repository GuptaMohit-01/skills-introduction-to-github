# Todo List Application

A full-stack todo list application built with React, Node.js, Express, and MongoDB.

## Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit todo title and description
- ✅ Responsive design
- ✅ RESTful API

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Security Note

⚠️ **Important**: This is a basic demo application for learning purposes. For production use, you should add:
- Rate limiting on API endpoints
- Authentication and authorization
- Input validation and sanitization
- HTTPS/TLS encryption
- Environment-specific configurations
- Proper error handling and logging

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd todo-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB connection string:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todoapp
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd todo-app/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the React development server:
   ```bash
   npm start
   ```

The application will open in your browser at `http://localhost:3000`.

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a single todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `GET /api/health` - Health check endpoint

## Project Structure

```
todo-app/
├── backend/
│   ├── server.js          # Express server and API routes
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
└── frontend/
    ├── public/
    │   └── index.html     # HTML template
    ├── src/
    │   ├── components/    # React components
    │   │   ├── TodoForm.js
    │   │   ├── TodoList.js
    │   │   └── TodoItem.js
    │   ├── App.js         # Main App component
    │   ├── App.css        # App styles
    │   ├── index.js       # React entry point
    │   └── index.css      # Global styles
    ├── package.json       # Frontend dependencies
    └── .env.example       # Environment variables template
```

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

### Frontend
- React 18
- Axios for API calls
- CSS3 with modern styling

## Usage

1. Make sure MongoDB is running
2. Start the backend server
3. Start the frontend development server
4. Open your browser to `http://localhost:3000`
5. Start adding and managing your todos!

## License

MIT
