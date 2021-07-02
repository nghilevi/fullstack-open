interface evalResult {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (dailyExcerciseHrs: number[], target: number):evalResult => {
    const ratingLevels = ['bad', 'good', 'excellent']
    const periodLength: number = dailyExcerciseHrs.length;
    let totalHrs: number = 0;
    let trainingDays: number = 0;
    dailyExcerciseHrs.forEach(hr => {
        totalHrs += hr;
        if(hr>0){
            trainingDays++;
        }
    })
    const average = totalHrs/periodLength;
    const success = average >= target;
    const resultComparision = average - target - 1;
    const rating = resultComparision < -1 ? 0 : resultComparision < 0 ? 1 : 2;
    const ratingDescription = ratingLevels[rating];

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
}

const extractArgs = (argArr:any):any => {
    const target = argArr[2];
    const hrsArr = argArr.slice(3).map((hr:any) => Number(hr));
    return [hrsArr, target];
}

//const args = [[3, 0, 2, 4.5, 0, 3, 1], 2]
const args = extractArgs(process.argv)
console.log(calculateExercises.apply(this, args));

export {};