import express from 'express';
import cors from 'cors';

import { habitsRoutes } from './routes/habits';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/habits', habitsRoutes);

app.listen(3333, () => {
	console.log('🔮 listening on port 3333');
});