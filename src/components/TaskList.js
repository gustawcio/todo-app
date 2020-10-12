import React from 'react';
import Task from './Task';
import "./TaskList.css"

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="active">
                <h2>Zadania do zrobienia</h2>
                <div className="activeTaskList">
                    {activeTasks.length > 0 ? activeTasks : <p className="active__empty">brak zadań :)</p>}
                </div>
            </div>
            <hr className="taskList__hr" />
            <div className="done">
                <h3>Zadania zrobione <em>({done.length})</em></h3>
                {done.length > 5 && <span className="done__info">wyświetlonych jest 5 ostatnich elementów</span>}
                {doneTasks.slice(0, 5)}

            </div>
        </>
    );
}

export default TaskList;