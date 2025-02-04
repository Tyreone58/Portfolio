import './Header.css'
import  {useState} from "react";

function Header(props) {
  return (
    <>
    <header>
      <h1>Portolio</h1>
       <nav>
        <h2>
       <a href="/about" > About Me</a>
       <a href="/porfolio" >  Porfolio</a>
       <a href="/contact" >  Contact</a>
       <a href="/resume" >  Resume</a>
       </h2>
       </nav>
    </header>
    </>
  )
}

export default Header