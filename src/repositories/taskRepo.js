import prisma from '../config/db.js';

export async function findAll() {
  const filter = {};
  if (completed !== undefined) {
    filter.completed = completed;
  }
  return await prisma.task.findMany({
    where: filter
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
