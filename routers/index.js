const { Router } = require('express');
const TaskController = require('../controller/task.controller');

const router = Router();

router
  .route('/tasks')
  .post(TaskController.createTask)
  .get(TaskController.getAllTasks);

router
  .route('/tasks/:id')
  .put(TaskController.updateTask)
  .delete(TaskController.deleteTask);

module.exports = router;
