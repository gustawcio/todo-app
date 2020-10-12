import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    handleClick = () => {
        const { text, checked, date } = this.state;
        const add = this.props.add(text, date, checked)
        if (add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }
    }
    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";
        return (
            <>
                <h2 className="addTask__title">dodaj zadanie</h2>
                <div className="form">
                    <div className="addTask__name">
                        <input className="addTask__input" type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText} />
                        <div>
                            <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
                            <label htmlFor="important">Priorytet</label>
                        </div>
                    </div>
                    <div className="addTask__date"><label htmlFor="date">Do kiedy zrobić</label>
                        <input className="addTask__dateInput" type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                    </div>
                </div>
                <button className="addTask__button" onClick={this.handleClick}>Dodaj</button>
                <hr className="addTask__hr" />
            </>
        );
    }
}

export default AddTask;