import React from "react";

const Student = () => {
    const students = [1,2]
    return (
        <div>
            <p>{students.length === 0 ? "No Student Found" : <p>No of Students : {students.length}</p>}</p>
            


        </div>
    );
}

export default Student;
