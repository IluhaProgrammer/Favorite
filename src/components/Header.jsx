import React from 'react';
import { useFavorets } from '../hooks/useFavorets';
import {BsFillBookmarkHeartFill} from 'react-icons/bs'

const Header = () => {

    const{favorets} = useFavorets()
    console.log(favorets)

    return (
        <header className='header' >
            <span>{favorets.length}</span>
            <BsFillBookmarkHeartFill className='favorite' />
        </header>
    );
};

export default Header;