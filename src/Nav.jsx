import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useState, useEffect } from 'react'
import { use } from 'react'
import Gallery from './Gallery'


function Nav(){

const [isOpen, setOpen] = useState(false)
const [bool, setBool] = useState(false)


function useWindowSize(){
const [sizeScreen, setSizeScreen] = useState({
width: window.innerWidth,
height: window.innerHeight
})
useEffect(()=>{

    function handleResize() {
    setSizeScreen({
    width: window.innerWidth,
    height: window.innerHeight
})
    }

    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
}, [])
return sizeScreen
}

const {width, height} = useWindowSize()


// Created a Bool to display or hide element. When burger is toogled
// it'll set setBool to whatever value isBool is
useEffect(()=>{
    if (width >= 1006){
        setBool(true)
    }
    else {
        setBool(isOpen)
    }
    // if (width < 1006){
    //     setBool(false)
    // }
})

// useEffect(()=>{
    
//     setBool(isOpen)
// },[isOpen])

// console.log(width)

// function resizeScreen(){
// // console.log(window.innerWidth)
// setSizeScreen(window.innerWidth)
// }

// window.addEventListener('resize', resizeScreen)


// useEffect(()=> {
//     if (sizeScreen >= 1006){
//         setOpen(true)
//         // console.log("resized effect")
//         }
//         if (sizeScreen <= 1006){
//             setOpen(false)
//             // console.log("resized effect")
//             }
// },[sizeScreen])

return (
   <div className = 'NavLink'>

    <Hamburger toggled={isOpen} toggle={setOpen} />
    <span id = "navbar">
     {bool ? <>
     <NavLink to = "/">Home</NavLink>
    <NavLink to = "/gallery" >Gallery</NavLink>
    <NavLink to = {{pathname: "https://www.vagaro.com/advbeauty/services"}} target = "_blank">Services</NavLink>
    <a id = "booknow" href = "https://www.vagaro.com/advbeauty">Book Now </a>
    </> : null}
    </span>

    </div>
)
}

export default Nav