import React from 'react'
import { Link } from 'react-router-dom'

const Header = ()=>{
  return(
    <header>
	    <h1> Todos </h1>
	    <nav> {/* The Link component is exactly what you think it is, a link to another route. 
		    You can think of it as an href in plain 'ol HTML. HERE we are setting a link to go to our routes */}
              <Link to = {'/'}>Home</Link>
	      <Link to = {'/todos'}>Todos</Link>
	    </nav>
    </header>
  )
}

export default Header

