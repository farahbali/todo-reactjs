state={
    task:"",
    listTodo:[],
    isClicked:[],
    id:[],
    nextId: 1
  }

handelSubmit=(e)=>{
    e.preventDefault()
    this.setState((oldTask)=>{
      return{
        listTodo:[...oldTask.listTodo,oldTask.task],
        task:"",
        isClicked:[...oldTask.isClicked,false],
        id:[...oldTask.id, oldTask.nextId],
        nextId: oldTask.nextId + 1
      }
    })
  }

render() {
    const links=["Home","About"]
    const {task,listTodo,isClicked, id}=this.state
  return (
    <div className="big-container">
      <div className="navbar">
      <Navbar links={links}/>
      </div>
      <div className="main-content">
      <Header label="ToDos"/>
      <InputTodo type="text" val={task} onchan={this.handelChange} onclik={this.handelSubmit} name="task"/>
      <TodosList list={listTodo} id={id} onrem={this.handleRemoveItem} handelEdit={this.handelEdit} itemClicked={isClicked} onchan={this.handelChangeEdit} onblur={this.handelBlur} />
      </div>
    </div>
  )
} 