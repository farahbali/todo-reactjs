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
    isClicked:false,
  }
  handelChange=(e)=>{
    e.preventDefault()
    const value = e.target.value
    this.setState({task: value })
    console.log("im changing",value)
  }
  handelSubmit=(e)=>{
    e.preventDefault()
    this.setState((oldTask)=>{
      return{
        listTodo:[...oldTask.listTodo,oldTask.task],
        task:""
      }
    })
  }
  handleRemoveItem=(e)=>{
    let i=e.target.parentElement.parentElement.previousSibling.innerText
    this.setState((oldTask) => {
      return {
        listTodo: oldTask.listTodo.filter((item) => item !== i)
      };
    });
  };
  handelEdit=(e)=>{
  this.setState({isClicked:true})
  console.log("handel edit this is the target",e.target,this.state.isClicked)
  }
  handelBlur=(e)=>{
    e.preventDefault()
    this.setState({isClicked:false})
    console.log("this is blur event",e.target,this.state.isClicked)
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
      <TodosList list={listTodo} onrem={this.handleRemoveItem} handelEdit={this.handelEdit} itemClicked={isClicked} onchan={this.handelChange} onblur={this.handelBlur} />
      </div>
    </div>
  )
}
}
export default TodoContainer
