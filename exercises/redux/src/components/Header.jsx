import React from 'react'

/**
 * Componente de header reutilizable
 * @function
 * @param {object} props - Las props para el componente
 * @param {string} props.title  - Titulo del encabezado
 * @param {string} [props.subtitle] -Subtitulo opcional del encabezado
 * @returns {JSX.Element} - El componente de encabezado
 */

export const Header = ({title, subtitle}) => {
    return (
        <header>
            <h1> {title} </h1>
            { subtitle && <h2> {subtitle} </h2>}
        </header>
    
    )
}
