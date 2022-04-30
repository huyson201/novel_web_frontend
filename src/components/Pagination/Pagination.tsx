import React from 'react'
import { default as RCPagination } from 'rc-pagination'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import './pagination.scss'
export interface Props {
    showLessItems?: boolean,
    current?: number,
    defaultCurrent?: number,
    total: number,
    pageSize?: number,
    defaultPageSize: number,
    showPrevNextJumpers?: boolean,
    disabled?: boolean
    className?: string
    onChange?: (current?: number, pageSize?: number) => void
}

const Pagination = ({ className, ...props }: Props) => {
    return (
        <RCPagination
            className={`pagination ${className}`}
            jumpNextIcon={'...'}
            jumpPrevIcon='...'
            nextIcon={<VscChevronRight />}
            prevIcon={<VscChevronLeft />}
            {...props}
        />
    )
}

export default Pagination