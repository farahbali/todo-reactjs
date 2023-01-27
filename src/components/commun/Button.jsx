import {IoIosAddCircle,IoIosCloseCircleOutline} from "react-icons/io"
import {AiFillDelete,AiFillEdit} from "react-icons/ai"
import "../../index.css"
function Button({type,label,id,cl,onclik}) {
  return (
  <button className={cl} onClick={onclik} id={id}>
    {type==='add' && <IoIosAddCircle/>}
    {type==='remove' &&<IoIosCloseCircleOutline/>}
    {type==='trash' &&<AiFillDelete/>}
    {type==='edit'&&<AiFillEdit/>}
    {label&&label}
  </button>
  )
}
export default Button
