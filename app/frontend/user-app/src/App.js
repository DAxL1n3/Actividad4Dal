import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [user,setUser] = useState([])

  const getUser = () =>{
    fetch("api/user")
    .then(res => res.json())
    .then(json => setUser(json))
  }

  useEffect(()=>{
    getUser()
  },[])

  return(
    <div>
      <h1 className='titulo'> Datos de los usuarios</h1>
      {user.map((data)=>{
        return <>
        <br></br>
        <div className="mdiv">
          <h1>Nombre : {data.nombre}</h1> 
          <h1>Usuario : {data.usuario}</h1>
          <h1>Correo : {data.correo}</h1>
        </div>
        </>
        
      })}
    </div>
  )
}

export default App