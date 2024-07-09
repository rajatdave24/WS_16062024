import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar';
import MenuContext from '../FFC';

const AnnaDan = () => {

    const [menu, setMenu] = useState(false);

    return(
        <>
            <NavBar/>
        </>
    );
}

export default AnnaDan;