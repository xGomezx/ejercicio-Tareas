import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><button className='buttonNav'>Ver tareas pendientes</button> </li>
                <li><button className='buttonNav'>Ver tareas archivadas</button></li>
                <li><button className='buttonNav'>Ver todas las tareas</button></li>
            </ul>
            
        </nav>
    )
}
