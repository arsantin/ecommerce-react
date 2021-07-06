import {PrismaClient} from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
  if(req.method !== 'POST'){
    return res.status(405).json({message: 'Operação não permitida'})
  }

  const userData = JSON.parse(req.body);
  res.json({message: 'oooooooooooooopa'})
}