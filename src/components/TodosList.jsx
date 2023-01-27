import TodoItem from "./commun/TodoItem";
function TodosList({
  list,
  onrem,
  handelEdit,
  itemClicked,
  onchan,
  val,
  onblur,
}) {
  return (
    <ul className="container-task">
      {list.map((list, index) => (
        <TodoItem
          list={list}
          key={index}
          index={index}
          onclik={(e)=>{e.preventDefault()
            onrem(e,index)}}
          handelEdit={(e) => {
            e.preventDefault()
            handelEdit(e,index);
          }}
          itemClicked={itemClicked[index]}
          onchan={onchan}
          val={val}
          onblur={(e) => {
            e.preventDefault()
            onblur(e,index);
          }}
        />
      ))}
    </ul>
  );
}
export default TodosList;
