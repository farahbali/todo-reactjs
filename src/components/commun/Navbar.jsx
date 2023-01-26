import Button from "./Button"
import "../../index.css"
function Navbar(props) {
   let navbar=props.links.map((link)=><li key={link} id={link}><a href="#">{link}</a></li>)
  return (
    <nav>
      <a href="#" id="responsive-logo"></a>
        <Button type='remove' cl="remove"/>
        <ul className="ul-nav">
            {navbar}
        </ul>
    </nav>
  )
}

export default Navbar
