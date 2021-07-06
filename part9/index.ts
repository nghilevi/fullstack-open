import express from 'express';
import {calculateBmi} from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const {height, weight} = req.query;
    let value: any = 1;
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        const assessments:string = calculateBmi(Number(height), Number(weight));
        res.send({height, weight, assessments});
    }else{
        res.status(400).send({error:'malformatted parameters'})
    }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});