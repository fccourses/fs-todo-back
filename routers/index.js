const { Router } = require('express');
const TaskController = require('../controller/task.controller');
const UserController = require('../controller/user.controller');

const router = Router();

router
  .route('/users/:userId/tasks')
  .post(TaskController.createTask)
  .get(TaskController.getAllTasks);

router
  .route('/users/:userId/tasks/:taskId')
  .put(TaskController.updateTask)
  .delete(TaskController.deleteTask);

router
  .route('/users')
  .post(UserController.createUser)
  .get(UserController.getAllUsers);

module.exports = router;
