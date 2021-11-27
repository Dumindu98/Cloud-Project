import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.todo_Owner_name}</td>
        <td>{props.todo.todo_date}</td>
        <td>{props.todo.todo_Car_model}</td>
        <td>{props.todo.todo_Manufacture_year}</td>
        <td>{props.todo.todo_Fuel_type}</td>
        <td>{props.todo.todo_Mileage}</td>
        <td>{props.todo.todo_Description}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Car Details List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Owner_name</th>
                            <th>Date</th>
                            <th>Car_model</th>
                            <th>Manufacture_year</th>
                            <th>Fuel_type</th>
                            <th>Mileage</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}