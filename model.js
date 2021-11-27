const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_Owner_name: {
        type: String
    },
    todo_date: {
        type: String
    }, 
    todo_Car_model: {
        type: String
    },
    todo_Manufacture_year: {
        type: String
    },
    todo_Fuel_type: {
        type: String
    },
    todo_Mileage: {
        type: String
    },
    todo_Description: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);