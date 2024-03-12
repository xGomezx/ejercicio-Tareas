import React from 'react'
import './Header.css'
import LogoDragonBall from '../../../assets/LogoDragonBall.png'

export const Header = ({children}) => {
  return (
    <header>
        <h2 className='titleHeader'>Lista de tareas</h2>
        <img className='logo' src={LogoDragonBall} alt="" />
        <div className='clear'></div>
    </header>
  )
}
