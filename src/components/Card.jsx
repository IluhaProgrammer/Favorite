import React from 'react';
import { useFavorets } from '../hooks/useFavorets';
import { useDispatch } from 'react-redux';
import { toggleToFavoriet } from '../store/favorets/favoriets';

const Card = ({reciep}) => {

    const {favorets} = useFavorets()

    const dispatch = useDispatch()
    console.log(favorets)

    const isFavorites = favorets.some(e => e.id === reciep.id)
    return (
        <div className='card' >
            <img width={175} height={175} src={reciep.image} alt={reciep.name} />
            <h2>{reciep.name}</h2>
            <button onClick={() => dispatch(toggleToFavoriet(reciep))}> {
                isFavorites
                    ? <p>Remove from favorites</p>

                    :  <p>Add to favorites</p>
            }</button>
        </div>
    );
};

export default Card;