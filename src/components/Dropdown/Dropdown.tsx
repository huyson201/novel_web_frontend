import React, { useState, MouseEvent, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoChevronDown } from 'react-icons/io5'
import './dropdown.scss'
interface Props {
    title: string,
    children?: React.ReactNode
    | React.ReactNode[]
    | React.ReactElement
    | React.ReactElement[],
    grid?: boolean
    columns?: 1 | 2 | 3
}
const Dropdown = ({ title, children, grid, columns }: Props) => {
    const [active, setActive] = useState<boolean>(false)
    const btnRef = useRef<HTMLDivElement>(null)
    const handleClick = (e: MouseEvent) => {
        setActive(!active)
    }

    useEffect(() => {
        const closeDropdown = (e: any) => {
            if (!(e.target === btnRef.current)) {
                setActive(false)
                return
            }
        }

        window.addEventListener('click', closeDropdown)

        return () => {
            window.removeEventListener('click', closeDropdown)
        }
    }, [])
    return (
        <div className='drop-down'>
            <div ref={btnRef} className={`drop-toggle-btn ${active && 'active'}`} onClick={handleClick}>
                {title}
                <IoChevronDown className='arrow-down' />
            </div>
            <div className={`drop-content ${grid && 'grid'} ${columns && 'col-' + columns}`}>
                {children && children}
            </div>
        </div>
    )
}

interface ItemProps {
    path?: string,
    title: string
}
Dropdown.Item = ({ path, title }: ItemProps) => {
    return (
        <Link className='drop-content__items' to={path || '#'}>{title}</Link>
    )
}
export default Dropdown