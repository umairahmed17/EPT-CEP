import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addTower = async function (req: Request, res: Response) {
  console.log(req);
  const resistivity = 0.0000000265;
  const tower = await prisma.tower.create({
    data: {
      name: "First Tower",
    },
  });
  return;
};
