import logoig from "./Media/iglogo.png"
import logovag from "./Media/Square.png"

function Footer(){

   return(
    <div className="Footer">
<a href = "https://www.instagram.com/advbeautyy/" target = "_blank" >
<img id = "iglogo" src = {logoig}></img>
</a>
<a href = "https://adv-beauty.square.site/" target = "_blank" >
<img id = "vaglogo" src = {logovag}></img>
</a>
<span style={{position: 'relative', float: 'right'}}> created by &copy;Smartchip LLC</span>
    </div>
   )
}
    export default Footer;