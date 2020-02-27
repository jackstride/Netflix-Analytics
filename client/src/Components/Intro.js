import React, {useState,useEffect} from 'react'
import HOC from '../images/hoc.png'


let Intro = () => {

    const [isShown, setShown] = useState(true)

    useEffect(() => {
        let bg = document.querySelector('.app_intro');
        bg.classList.add("test")

        
    },[])



    return(
        <div className="app_intro">
            <img src={HOC}></img>
            <span className="intro_text">The Rise and <br></br> Success of Netflix</span>
            </div>
    )


}



export default Intro;