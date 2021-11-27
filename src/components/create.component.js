import React, { Component } from 'react';
import axios from 'axios';
export default class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoOwner_name = this.onChangeTodoOwner_name.bind(this);
        this.onChangeTododate = this.onChangeTododate.bind(this);
        this.onChangeTodoCar_model = this.onChangeTodoCar_model.bind(this);
        this.onChangeTodoManufacture_year = this.onChangeTodoManufacture_year.bind(this);
        this.onChangeTodoFuel_type = this.onChangeTodoFuel_type.bind(this);
        this.onChangeTodoMileage = this.onChangeTodoMileage.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_Owner_name: '',
            todo_date: '',
            todo_Car_model: '',
            todo_Manufacture_year: '',
            todo_Fuel_type: '',
            todo_Mileage: '',
            todo_Description: '',
            
        }
    }

    onChangeTodoOwner_name (e) {
        this.setState({
            todo_Owner_name: e.target.value
        });
    }

    onChangeTododate(e) {
        this.setState({
            todo_date: e.target.value
        });
    }

    onChangeTodoCar_model(e) {
        this.setState({
            todo_Car_model: e.target.value
        });
    }
    onChangeTodoManufacture_year(e) {
        this.setState({
            todo_Manufacture_year: e.target.value
        });
    }
    onChangeTodoFuel_type(e) {
        this.setState({
            todo_Fuel_type: e.target.value
        });
    }
    onChangeTodoMileage(e) {
        this.setState({
            todo_Mileage: e.target.value
        });
    }
    onChangeTodoDescription(e) {
        this.setState({
            todo_Description: e.target.value
        });
    }

   

    onSubmit(e) {
        e.preventDefault();
        
       
        const newTodo = {
            todo_Owner_name : this.state.todo_Owner_name,
            todo_date: this.state.todo_date,
            todo_Car_model: this.state.todo_Car_model,
            todo_Manufacture_year: this.state.todo_Manufacture_year,
            todo_Fuel_type: this.state.todo_Fuel_type,
            todo_Mileage: this.state.todo_Mileage,
            todo_Description: this.state.todo_Description
            
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_Owner_name : '',
            todo_date: '',
            todo_Car_model: '',
            todo_Manufacture_year: '',
            todo_Fuel_type: '',
            todo_Mileage: '',
            todo_Description: '',
            
        })

        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Generate New Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Owner_name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_Owner_name}
                                onChange={this.onChangeTodoOwner_name}
                                />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input 
                                type="date" 
                                className="form-control"
                                value={this.state.todo_date}
                                onChange={this.onChangeTododate}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Car_model: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_Car_model}
                                onChange={this.onChangeTodoCar_model}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Manufacture_year: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_Manufacture_year}
                                onChange={this.onChangeTodoManufacture_year}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Fuel_type: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_Fuel_type}
                                onChange={this.onChangeTodoFuel_type}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Mileage: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_Mileage}
                                onChange={this.onChangeTodoMileage}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_Description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>

                    
                    
                    <div className="form-group">
                        <input type="submit" value="Register Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}