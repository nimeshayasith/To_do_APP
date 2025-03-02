# To-Do List Application

A simple and intuitive To-Do List application built with **React.js** (frontend), **Node.js** (backend), and **MongoDB** (database). This application allows users to manage their tasks and task lists efficiently. It includes user authentication, task creation, updating, and deletion, as well as a modern and responsive design powered by **Tailwind CSS**.

---

## Features

### User Authentication
- **Register**: Users can create a new account.
- **Login**: Existing users can log in to their accounts.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT).

### Task Management
- **Create Tasks**: Users can add new tasks to their task lists.
- **Update Tasks**: Mark tasks as completed or incomplete.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Strikethrough Completed Tasks**: Completed tasks are visually marked with a strikethrough.

### Task List Management
- **Create Task Lists**: Users can organize tasks into separate lists.
- **Update Task Lists**: Rename task lists.
- **Delete Task Lists**: Remove task lists along with their tasks.

### Modern UI
- **Responsive Design**: The application is fully responsive and works on all devices.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

---

## Technologies Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.

### Backend
- **Node.js**: A JavaScript runtime for building the backend.
- **Express.js**: A web framework for Node.js.
- **MongoDB**: A NoSQL database for storing user and task data.
- **JWT**: JSON Web Tokens for secure user authentication.

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git (optional)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2. # Todo App

## Set Up the Backend

### Navigate to the backend folder:
```bash
cd backend
```

### Install dependencies:
```bash
npm install
```

### Create a `.env` file in the backend folder and add the following environment variables:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
Replace `your_mongodb_connection_string` with your MongoDB connection string (e.g., `mongodb://localhost:27017/todoapp`) and `your_jwt_secret_key` with a secure secret key for JWT (e.g., `mysecretkey123`).

### Start the backend server:
```bash
npm start
```
The backend will run on `http://localhost:5000`.

## Set Up the Frontend

### Navigate to the frontend folder:
```bash
cd ../frontend
```

### Install dependencies:
```bash
npm install
```

### Start the development server:
```bash
npm start
```
The frontend will run on `http://localhost:3000`.

## Access the Application

Open your browser and navigate to `http://localhost:3000`.

## Usage

### Register
1. Click on the **Register** link in the navigation bar.
2. Enter a username and password.
3. Click **Register** to create a new account.

### Login
1. Click on the **Login** link in the navigation bar.
2. Enter your username and password.
3. Click **Login** to access your account.

### Create a Task
1. Navigate to the **Dashboard**.
2. Enter a task title in the input field and press Enter or click **Add Task**.

### Mark a Task as Completed
1. Click the checkbox next to a task to mark it as completed.
2. The task text will be displayed with a strikethrough.

### Delete a Task
Click the **Delete** button next to a task to remove it.

### Create a Task List
1. Navigate to the **Task Lists** section.
2. Enter a name for the task list and click **Create**.

### Delete a Task List
1. Navigate to the **Task Lists** section.
2. Click the **Delete** button next to a task list to remove it and all its tasks.

## Folder Structure

### Backend
```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── taskListController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Task.js
│   └── TaskList.js
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── taskListRoutes.js
├── .env
└── server.js
```

### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Task.jsx
│   │   ├── TaskList.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── index.js
│   └── api.js
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user.

### Tasks
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update a task (mark as completed/incomplete).
- `DELETE /api/tasks/:id`: Delete a task.

### Task Lists
- `POST /api/tasklists`: Create a new task list.
- `GET /api/tasklists`: Get all task lists for the logged-in user.
- `PUT /api/tasklists/:id`: Update a task list.
- `DELETE /api/tasklists/:id`: Delete a task list.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- React.js
- Tailwind CSS
- Node.js
- MongoDB

## Contact

For any questions or feedback, feel free to reach out:

- **Name:** Your Name
- **Email:** your.email@example.com
- **GitHub:** your-username

