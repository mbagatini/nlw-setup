import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { ZodError } from 'zod';

import { habitsRoutes } from './routes/habits';
import { notificationsRoutes } from './routes/notifications';

const app = express();

app.use(cors());
app.use(express.json());

const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack)

	if (err instanceof ZodError) {
		return res.status(400).send(err.flatten().fieldErrors)
	}

	res.status(500).send('Something broke!')
};

// Routes
app.use('/habits', habitsRoutes);
app.use('/push', notificationsRoutes);

// Middlewares
app.use(handleErrors);

app.listen(3333, () => {
	console.log('🔮 listening on port 3333');
});