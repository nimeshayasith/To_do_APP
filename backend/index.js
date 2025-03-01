const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
// const taskRoutes = require('./routes/taskRoutes');
// const taskListRoutes = require('./routes/taskListRoutes');
// const authMiddleware = require('./middleware/authMiddleware');
const cors = require('cors');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
//app.use('/api/tasks', authMiddleware, taskRoutes);
//app.use('/api/tasklists', authMiddleware, taskListRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));