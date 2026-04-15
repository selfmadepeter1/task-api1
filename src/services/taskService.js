import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  return await taskRepository.findAll(completed);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
