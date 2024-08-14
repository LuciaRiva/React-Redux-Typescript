import React from 'react'
import PropTypes from 'prop-types'

// proptypes/ComponentBasic.js
export const ComponentBasic = ({ texto }) => {
    return <div>{texto}</div>;
};


ComponentBasic.propTypes = {
    texto: PropTypes.string
}