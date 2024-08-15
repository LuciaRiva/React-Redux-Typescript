import React from 'react'
import PropTypes from 'prop-types'
import { prototype } from 'events';

// proptypes/ComponentBasic.js
export const ComponentBasic = ({array }) => {
    return (
    
        <div>{JSON.stringify(array)}</div>

    ) 
};


ComponentBasic.propTypes = {
    // texto: PropTypes.string,
    // numero: PropTypes.number,
    // data: PropTypes.bool,
    array: PropTypes.array,


}