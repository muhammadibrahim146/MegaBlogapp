import React from 'react'
import {useDispatch} from"react-redux"
import { login, logout } from '../store/auth';
import authSevice from '../config/auth';
const Logout = () => {
    const dispatch=useDispatch()
    const logoutHnadler=()=>{
        authSevice.logout().then(()=>{
            dispatch(logout())
            
        })
    }
  return (
    <button className='px-5 py-5 duration-200 hover:bg-slate-500  bg-zinc-600 text-white ' onClick={logoutHnadler}>
        Logout

    </button>

  )
}

export default Logout