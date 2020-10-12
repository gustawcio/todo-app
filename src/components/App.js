import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends Component {
  counter = 5
  state = {
    tasks: [
      {
        id: 0,
        text: 'wypić kawę',
        date: 'dzisiaj',
        important: false,
        active: true,
        finishDate: null

      },
      {
        id: 1,
        text: 'nauczyć się reacta',
        date: '01.10.2020',
        important: true,
        active: true,
        finishDate: null

      },
      {
        id: 2,
        text: 'zdobyć pracę w IT',
        date: '01.11.2020',
        important: true,
        active: true,
        finishDate: null

      },
      {
        id: 3,
        text: 'zbudować portfolio',
        date: '10.10.2020',
        important: true,
        active: true,
        finishDate: null

      }
    ]
  }

  deleteTask = (id) => {
    console.log("delete id " + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    if (text === "") alert("wypełnij formularz")
    else {
      this.counter++
      this.setState(prevState => ({
        tasks: [...prevState.tasks, task]
      }))
      return true
    }
  }

  render() {
    return (
      <div className="App">
        <h1>todo app</h1>
        <hr className="App__hr" />
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
