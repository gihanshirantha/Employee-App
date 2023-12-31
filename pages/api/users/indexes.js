import connectMongo from '../../../Database/Connection';
import { deleteUsers, getUsers, updateUsers} from '../../../Database/controller';
import { createUsers } from '../../../Database/controller';

export default async function handler(req, res) {
  try {
    await connectMongo();
  } catch (error) {
    return res.status(405).json({ error: "Error in the connection" });
  }
  
  const { method } = req;
  switch (method) {
    case 'GET':
      getUsers(req,res);
      break;
    case 'POST':
      createUsers(req,res);
      break;
    case 'PUT':
      updateUsers(req,res);
      break;
    case 'DELETE':
      deleteUsers(req,res);
      
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
