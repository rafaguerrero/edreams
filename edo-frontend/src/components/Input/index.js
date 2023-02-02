import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Input({ name, type, value, placeholder, className, onChange }) {
    return (
        <input className={`edo-input ${className || ''}`}
                name={name}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={(e) => onChange(e.target.value)}/>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired
};

export default Input;
