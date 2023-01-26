import Button from "./commun/Button"
function InputTodo({val,onchan,type,onclik,name,index}) {
  return (
    <div className="input-data">
      <input placeholder="enter a task..." value={val} onChange={onchan} key={index}type={type} name={name} index={index}/>
      <Button type='add' cl='add' onclik={onclik}/>
    </div>
  )
}
export default InputTodo
