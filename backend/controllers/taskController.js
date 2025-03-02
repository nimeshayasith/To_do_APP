const User = require('../models/Todo');

app.post("/todos/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const { title, category } = req.body;
  
      const newTodo = new Todo({
        title,
        category,
        dueDate: moment().format("YYYY-MM-DD"),
      });
  
      await newTodo.save();
  
      const user = await User.findById(userId);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      }
  
      user?.todos.push(newTodo._id);
      await user.save();
  
      res.status(200).json({ message: "Todo added sucessfully", todo: newTodo });
    } catch (error) {
      res.status(200).json({ message: "Todo not added" });
    }
  });
  
  app.get("/users/:userId/todos", async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const user = await User.findById(userId).populate("todos");
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
  
      res.status(200).json({ todos: user.todos });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  app.patch("/todos/:todoId/complete", async (req, res) => {
    try {
      const todoId = req.params.todoId;
  
      const updatedTodo = await Todo.findByIdAndUpdate(
        todoId,
        {
          status: "completed",
        },
        { new: true }
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ error: "Todo not found" });
      }
  
      res
        .status(200)
        .json({ message: "Todo marked as complete", todo: updatedTodo });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  app.get("/todos/completed/:date", async (req, res) => {
    try {
      const date = req.params.date;
  
      const completedTodos = await Todo.find({
        status: "completed",
        createdAt: {
          $gte: new Date(`${date}T00:00:00.000Z`), // Start of the selected date
          $lt: new Date(`${date}T23:59:59.999Z`), // End of the selected date
        },
      }).exec();
  
      res.status(200).json({ completedTodos });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  app.get("/todos/count", async (req, res) => {
    try {
      const totalCompletedTodos = await Todo.countDocuments({
        status: "completed",
      }).exec();
  
      const totalPendingTodos = await Todo.countDocuments({
        status: "pending",
      }).exec();
  
      res.status(200).json({ totalCompletedTodos, totalPendingTodos });
    } catch (error) {
      res.status(500).json({ error: "Network error" });
    }
  });