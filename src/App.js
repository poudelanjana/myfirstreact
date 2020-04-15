import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
// import uuid from 'uuid';
import { v4 as uuid } from "uuid";
import axios from 'axios'
class App extends Component{

state = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    }
  ]
}
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res=> this.setState({ todos: res.data }))
}

  markComplete = (id) => {
   this.setState({todos:this.state.todos.map(todo =>{
     if(todo.id===id){
       todo.completed=!todo.completed
     }
     return todo;
   })
  });
  }

 delTodo=(id)=>{
 this.setState({todos: [...this.state.todos.filter(todo => todo.id!== id)]});
 }
  addTodo=(title)=>{
    const newTodo={
            id:uuid(),
             title,
             completed:false
    } 
 this.setState({todos:[...this.state.todos,newTodo]});
}

  render(){
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header></Header>
          <Route exact path="/" render={props=>(
            <React.Fragment>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} markComplete=
                  {this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />

         <Route path="/about" component={About} />
         
        </div>
      </div>
      </Router>
    );
  }
}


export default App;
