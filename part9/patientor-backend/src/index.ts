import express from 'express';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const app = express();
var cors = require('cors')

app.use(express.json());
app.use(cors())

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnoses',diagnosesRouter);
app.use('/api/patients',patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});