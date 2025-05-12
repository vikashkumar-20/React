import './ToDo.css';
import React, { useState, useEffect } from 'react';

export const ToDo = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTaskList(JSON.parse(savedTasks));
        }

        const updateClock = () => {
            const now = new Date();
            setDate(now.toLocaleDateString());
            setTime(now.toLocaleTimeString());
        };

        updateClock();
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleSubmit = () => {
        if (task.trim() !== '') {
            const updatedTasks = [...taskList, { text: task, done: false }];
            setTaskList(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setTask('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };


    const handleDone = (indexToUpdate) => {
        const updatedTasks = taskList.map((item, index) =>
            index === indexToUpdate ? { ...item, done: !item.done } : item
        );
        setTaskList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleDelete = (indexToRemove) => {
        const updatedTasks = taskList.filter((_, index) => index !== indexToRemove);
        setTaskList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const clearAll = () => {
        const updatedTasks = [];
        setTaskList(updatedTasks);
        localStorage.removeItem('tasks');
    }

    return (
        <div className='wrapper'>
            <div className='container'>
                <div>
                    <h2>TO DO LIST</h2>
                    <div className='dateTime'>
                        <p>{date}</p>
                        <p>{time}</p>
                    </div>
                </div>

                <div className='inputSection'>
                    <input
                        type="text"
                        placeholder="Enter your task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button onClick={handleSubmit}>Add</button>
                </div>

                <div className='taskList'>
                    {taskList.map((item, index) => (
                        <div key={index} className='item'>
                            <span className={item.done ? 'done' : ''}>{item.text}</span>
                            <button onClick={() => handleDone(index)}>{item.done ? 'Undo' : 'Completed'}</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                </div>

                <div>
                    <button className='clearAll' onClick={clearAll}>Clear All</button>
                </div>

            </div>
        </div>
    );
};
