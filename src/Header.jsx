import Nav from "./Nav";
import logo from "./Media/logo3.jpeg"
function Header(){

return (
<div id = "Header">
    {/* <img id = "logo" src = {logo} style = {{color: "black"}}></img> */}
    {/* <span id = "logoback"></span> */}
   
   <h1>ADV Beauty</h1>
   
    <Nav />
</div>
)
}
export default Header;