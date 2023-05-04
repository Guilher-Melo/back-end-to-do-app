const Todo = require('../model/todo');

const todoController = {
  create: async (req, res) => {
    try {
      const todo = {
        description: req.body.description
      }

      const response = await Todo.create(todo);
      res.status(201).json({ response })
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const todo = {
        description: req.body.description,
        done: req.body.done
      }
      const updatedTask = await Todo.findByIdAndUpdate(id, todo);

      if(!updatedTask) {
        res.status(404);
        return
      }

      
      res.status(200).json(todo)
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await Todo.findById(id);

      if(!todo) {
        res.status(404);
        return
      }

      const deletedTask = await Todo.findByIdAndDelete(id);
      res.status(200).json(deletedTask)
    } catch (error) {
      console.log(error);
    }
  },

 /* search: async (req,res) => {
    const todo = req.body.description;

    await Todo.find({description: todo}, {}, (err, result) => {
      if(err) console.log(err);

      res.status(200).json(result);
    })
  }
  */
}

module.exports = todoController;