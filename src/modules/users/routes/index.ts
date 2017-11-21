import * as express from 'express';

import { getAllUsers } from './users-get';

const UsersRoutes = express.Router();

UsersRoutes.get('/', getAllUsers);

export default UsersRoutes;
