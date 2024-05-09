import prisma from "../../../../utils/db";

export const GET = async () => {
  const tasks = await prisma.task.findMany();
  return Response.json({data: tasks})
}