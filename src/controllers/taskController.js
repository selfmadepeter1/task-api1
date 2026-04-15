import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;

   
    let isCompleted;
    if (completed === 'true') {
      isCompleted = true;
    } else if (completed === 'false') {
      isCompleted = false;
    } else {
      isCompleted = undefined; 
    }

    
    const tasks = await taskService.getAllTasks(isCompleted);

    
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}