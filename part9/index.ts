import express from 'express';
import {calculateBmi} from './bmiCalculator';
import {calculateExercises, evalResult} from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const {height, weight} = req.query;
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        const assessments:string = calculateBmi(Number(height), Number(weight));
        res.send({height, weight, assessments});
    }else{
        res.status(400).send({error:'malformatted parameters'});
    }
});

interface errRes{
    error: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.post('/exercises', (req: any, res: any) => {
    
    const hrsArr = req.body.daily_exercises;
    const target = req.body.target;

    let response: evalResult | errRes | any;
    if(!hrsArr || !target){
        response = { error: 'parameters missing'};
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    }else if(hrsArr.some(isNaN) || isNaN(target)){
        response = {error: 'malformatted parameters'};
    }else{
        response = calculateExercises(hrsArr, target);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    res.json(response);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});