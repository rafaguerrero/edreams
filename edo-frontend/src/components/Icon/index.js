import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Icon({ className, type, onClick, size, name }) {
    return (
      <span className={`edo-icon material-icons ${className || ''} ${onClick ? 'interactable': ''} material-icons-${type}`}
            style={{ fontSize: size }}
            onClick={(event) => onClick && onClick(event)}>
        { name }
      </span>
    );
}

Icon.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.string,
    size: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default Icon;