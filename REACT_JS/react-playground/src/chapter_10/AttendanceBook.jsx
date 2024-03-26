import React from 'react'

const students = [
    {
        id:1 ,
        name: "Ace",
    },
    {
        id: 2,
        name: "Bekky",
    },
    {
        id: 3,
        name: "Cathy",
    },
    {
        id: 4,
        name: "Dorothy",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook