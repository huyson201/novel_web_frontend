import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
interface Props {
    title?: string
    type?: 'reset' | 'submit' | 'button',
    className?: string,
    disabled?: boolean,
    link?: boolean,
    path?: string,
    state?: any
}
const Button = ({ title, type, className, state, disabled, link, path, ...props }: Props) => {

    if (link) {
        return (<Link state={state || null} className={`${disabled ? 'disabled' : ''} ${className}`} to={path || '#'} {...props} >{title || 'Button'} </Link >)
    }
    return (
        <button className={`${className}`} type={type} disabled={disabled && true} {...props}>{title || 'Button'}</button>
    )
}

export default Button