import React from 'react';
import '../css/Cards.css'

 export function Cards(props){
    return(
        <div className='contenedor-cards'>
            <img className='imagen-cards' src={require(`../imagenes/${props.imagen}.jpg`)} alt='foto de Animales'></img>
            <div className='contenedor-texto-cards'>
                <p className='nombre-cards'> <strong>{props.nombre} </strong> </p>
                <p className='zona-cards'>{props.zona}</p>
                <p className='texto-cards'>{props.texto}</p>
            </div>
        </div>
    );
}

export default Cards;