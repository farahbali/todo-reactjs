import Button from "./Button"
import "../../index.css"
function TodoItem({list,index,onclik,handelEdit,itemClicked,onchan,onblur}) {
  return (
    <li className="data-task" key={index}>
      {itemClicked===false&&
     <><input type="checkbox" className="check"/>
     <label>{list}</label>
    <Button type="trash" cl="trash" onclik={onclik}/></>}
     {itemClicked===true&&<input type="text" value={list} onChange={(e)=>{onchan(e,index)}} onBlur={onblur} className="change-input"/>}
     <Button type="edit" id="edit" onclik={handelEdit} />
    </li>
  )
}
export default TodoItem
