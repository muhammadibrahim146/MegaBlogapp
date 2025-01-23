import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import Container from './Container'
import { useSelector } from 'react-redux'
import Logo from './Logo'
import Logout from './Logout'
const Headee = () => {
  const authtest=useSelector((state)=>state.auth.status)
  console.log(authtest)
  const navigate=useNavigate()
  const navItem=[
    {
      name:"Home",
      slug:"/",
      active:true,
    },
    {
      name:"Login",
      slug:"/Login",
      active:!authtest,
    },
    {
      name:"SignUp",
      slug:"/signup",
      active:!authtest,
    },
    {
      name:"AddPost",
      slug:"/addpost",
      active:authtest,
    },
    {
      name:"AllPost",
      slug:"/allpost",
      active:authtest,
    },
  ]
  return (
  <header>
    <Container>
      <nav className='flex'>
        <div className=''>
          <Link to={"/"}>
          <Logo width='70px'/>
          </Link>
          </div>
         <ul>
          {navItem.map((item)=>(
          item.active?(
            <li key={item.name} className='flex  justify-center'>
              {item.name}
            

            </li>)
      :null 
      ))}
      {authtest&&(
        <li>
          <Logout/>
        </li>
      )}
        
    
        

         </ul>

      

      </nav>
    </Container>
  </header>
  )
}

export default Headee