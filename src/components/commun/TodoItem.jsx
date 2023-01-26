import Button from "./Button"
import "../../index.css"
function TodoItem({list,index,onclik,handelEdit,itemClicked,onchan,onblur}) {
  return (
    <li className="data-task" onClick={handelEdit} key={index}>
     {itemClicked===true&&<input type="text" value="list" onChange={onchan} onBlur={onblur}/>}
     {itemClicked===false&&<><input type="checkbox" className="check"/>
     <label>{list}</label>
    <Button type="trash" cl="trash" onclik={onclik}/></>}
    </li>
  )
}
export default TodoItem
