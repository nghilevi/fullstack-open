const calculateBmi = (height: number, weight: number): string => {
    const bmi: number = weight/(height/100)**2;
    let range = [40, 35, 30, 25, 18.5, 16, 15];
    range.push(bmi);
    range.sort((a,b) => a-b); // ascending sort
    let assessments = [
        'Very severely underweight', 
        'Severely underweight',
        'Underweight',
        'Normal (healthy weight)',
        'Overweight',
        'Obese Class I (Moderately obese)',
        'Obese Class II (Severely obese)',
        'Obese Class III (Very severely obese)'
    ]
    return assessments[range.indexOf(bmi)];
}

const extractArgs = (argArr:any):any => {
    const height = Number(argArr[2]), weight= Number(argArr[3]);
    return [height, weight];
}

// const args = [180, 74];
const args = extractArgs(process.argv)
console.log(calculateBmi.apply(this, args));

export {calculateBmi}