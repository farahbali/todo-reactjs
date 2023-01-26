import TodoItem from "./commun/TodoItem"
function TodosList({list,onrem,handelEdit,itemClicked,onchan,val,onblur,itemOut}) {

  return (
    <ul className="container-task">
        {list.map((list,index)=><TodoItem list={list} key={index} index={index} onclik={onrem} handelEdit={handelEdit} itemClicked={itemClicked} onchan={onchan} val={val} onblur={onblur}itemOut={itemOut}/>)}
    </ul>
  )
}
export default TodosList
