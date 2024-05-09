import { NextRequest } from "next/server";
import prisma from "../../../../utils/db";

interface TaskType {
  content: string
}

export const GET = async () => {
  const tasks = await prisma.task.findMany();
  return Response.json({data: tasks})
}

export const POST = async (request: NextRequest) => {
  const data: Promise<TaskType> = await request.json();
  const response = await prisma.task.create({
    data: {
      content: (await data).content
    }
  });
  return Response.json({data: response})
}