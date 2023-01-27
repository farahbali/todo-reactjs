import Navbar from "./commun/Navbar"
import Header from "./commun/Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import React, { Component } from 'react'
import '../index.css'
export class TodoContainer extends Component {
  state={
    task:"",
    listTodo:[],
    isClicked:[],
  }
  handelChange=(e)=>{
    e.preventDefault()
    const value = e.target.value
    this.setState({task: value })
  }
  handelChangeEdit=(e,index)=>{
    const value = e.target.value
    this.setState((prevState) => {
      const newListTodo = [...prevState.listTodo];
      newListTodo[index] = value;
      return { listTodo: newListTodo };
  });
  }
  handelSubmit=(e)=>{
    e.preventDefault()
    this.setState((oldTask)=>{
      return{
        listTodo:[...oldTask.listTodo,oldTask.task],
        task:"",
        isClicked:[...oldTask.isClicked,false],
      }
    })
  }
  handleRemoveItem=(e,i)=>{
    e.preventDefault()
    this.setState((oldTask) =>{
      return {
        isClicked: oldTask.isClicked.filter((item,index) => index !== i),
        listTodo: oldTask.listTodo.filter((item,index) => index !== i),
      };
    });
  };
  handelEdit=(e,i)=>{
    e.preventDefault()
    this.setState(prevState => {
      const newIsClicked = prevState.isClicked.map((item, index) => {
        if (index ===i) {
          return true;
        }
        return item;
      });
      return { isClicked: newIsClicked };
    });
  }
  handelBlur=(e,i)=>{
    e.preventDefault()
    this.setState(prevState => {
      const newIsClicked = prevState.isClicked.map((item, index) => {
        if (index ===i) {
          return false;
        }
        return item;
      });
      return { isClicked: newIsClicked };
    });
   }
  render() {
    const links=["Home","About"]
    const {task,listTodo,isClicked}=this.state
  return (
    <div className="big-container">
      <div className="navbar">
      <Navbar links={links}/>
      </div>
      <div className="main-content">
      <Header label="ToDos"/>
      <InputTodo type="text" val={task} onchan={this.handelChange} onclik={this.handelSubmit} name="task"/>
      <TodosList list={listTodo} onrem={this.handleRemoveItem} handelEdit={this.handelEdit} itemClicked={isClicked} onchan={this.handelChangeEdit} onblur={this.handelBlur} />
      </div>
    </div>
  )
}
}
export default TodoContainer
