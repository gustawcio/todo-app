import React from 'react';
import './Task.css';

const Task = (props) => {

    const importantStyle = {
        color: 'rgb(247, 150, 59)',
    }

    const { text, date, id, active, important, finishDate } = props.task;
    if (active) {
        return (
            <div>
                <p className="task">
                    <strong className="task__title" style={important ? importantStyle : null}>{text}</strong><span className="task__date"> do {date} </span>
                    <button className="taskDoneButton" onClick={() => props.change(id)}>Zrobione</button>
                    <button className="taskDeleteButton" onClick={() => props.delete(id)}>Usuń</button>
                </p>
            </div>
        );
    } else {
        const convertedFinishDate = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p className="task__done">
                    <strong>{text}</strong><em> (zrobić do {date}) </em><br />
                    - potwierdzenie wykonania<span> {convertedFinishDate}</span>
                </p>
            </div>
        )
    }
}

export default Task;