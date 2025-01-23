import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authSevice from './config/auth';
import { login, logout } from './store/auth';
import Footer from './components/Footer';
import Headee from './components/Headee';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
function App() {
  //const [count, setCount] = useState(0)
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch()
  useEffect(()=>{
    authSevice.getCurrentUser()
.then((data)=>{
  if(data){
  dispatch(login(data))
  }
  else{
    dispatch(logout());
  }
})
.finally(()=>{
  setLoading(false)

})
  },[])


if(loading){
  return <div className='text-center text-2xl'>Loading...</div>
}
else{
  return (
    <>
  <Routes>
<Route path='/' element={<Layout/>}/>

  </Routes>
    
    
    </>
  )
}
}
export default App
