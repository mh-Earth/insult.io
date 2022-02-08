import React from 'react';
import PropTypes from "prop-types"

export default function Navber(props) {
    return (

        <nav className='navber'>
            <p>INSULAT.IO</p>



        </nav>

    )
};


Navber.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
    mode: PropTypes.string
}



Navber.defaultProps = {
    title: 'Insult',
    about: 'About us',
    mode: 'dark'

}



