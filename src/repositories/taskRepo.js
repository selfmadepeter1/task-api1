import prisma from '../config/db.js';

export const findAll = async (completed) => {
  const queryOptions = {};

  // If completed is true or false, we add the filter.
  // If it's undefined, we don't add 'where', so Prisma returns ALL tasks.
  if (completed !== undefined) {
    queryOptions.where = {
      completed: completed
    };
  }

  return await prisma.task.findMany(queryOptions);
};

export async function create(data) {
  return await prisma.task.create({
    data,
  });
}