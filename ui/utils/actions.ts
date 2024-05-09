"use server"
import { revalidatePath } from "next/cache"
import prisma from "./db"

const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
}

const createTask = async (formData: FormData) => {
  const content = formData.get("content") as string;
  await prisma.task.create({
    data: {
      content
    }
  });  
  revalidatePath("/task");
};

const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.task.delete({
    where: {id}
  });
  revalidatePath("/task");
}


const getSingleTask = async (id: string) => {
  return prisma.task.findUnique({
    where: {id}
  })
};

const editTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const content = formData.get("content") as string;
  const completed = formData.get("completed") as string;

  await prisma.task.update({
    where: {
      id
    },
    data: {
      content,
      completed: completed === "on" ? true : false
    }
  })
}

export {getAllTasks, createTask, deleteTask, getSingleTask, editTask};