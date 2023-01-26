import {IoIosAddCircle,IoIosCloseCircleOutline} from "react-icons/io"
import {AiFillDelete} from "react-icons/ai"
import "../../index.css"
function Button({type,label,cl,onclik}) {
  return (
  <button className={cl} onClick={onclik}>
    {type==='add' && <IoIosAddCircle/>}
    {type==='remove' &&<IoIosCloseCircleOutline/>}
    {type==='trash' &&<AiFillDelete/>}
    {label&&label}
  </button>
  )
}
export default Button
