import React from 'react';

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {
    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    const sum = course.parts.reduce( (sum, part) => sum + part.exercises,0)
    return(
        <p><b>Total number of exercises: {sum}</b></p>
    ) 
}

const Part = ({ part }) => {
    console.log('part: ',part);
    return (
        <p>{part.name} {part.exercises}</p>    
    )
}

const Content = ({ course }) => {
    console.log('content: ',course);
    return (
        <div>{course.parts.map(part => <Part part={part} />)}</div>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course