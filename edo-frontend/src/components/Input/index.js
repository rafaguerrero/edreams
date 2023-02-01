import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Input({ name, value, placeholder, className, onChange }) {
    return (
        <input className={`edo-input ${className || ''}`}
                name={name}
                value={value}
                placeholder={placeholder}
                type="text"
                onChange={(e) => onChange(e.target.value)}/>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;
