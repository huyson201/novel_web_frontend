import React, { useState } from 'react'
import { default as RCPagination } from 'rc-pagination'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import './pagination.scss'
import { useNavigate, useSearchParams } from 'react-router-dom'
export interface Props {
    showLessItems?: boolean,
    current?: number,
    defaultCurrent?: number,
    total?: number,
    pageSize?: number,
    defaultPageSize?: number,
    showPrevNextJumpers?: boolean,
    disabled?: boolean
    className?: string
    onChange?: (current?: number, pageSize?: number) => void
}

const Pagination = ({ className, current, onChange, ...props }: Props) => {
    const navigation = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState<number>(() => {
        if (!searchParams.get('page') && current) return current
        let page: number = parseInt(searchParams.get('page') || '1')
        return page
    })
    const handleOnchange = (current: number, pageSize: number) => {
        onChange && onChange(current, pageSize)
        setCurrentPage(current)
        setSearchParams(`page=${current}`)
    }
    return (
        <RCPagination
            className={`pagination ${className}`}
            jumpNextIcon={'...'}
            jumpPrevIcon='...'
            nextIcon={<VscChevronRight />}
            prevIcon={<VscChevronLeft />}
            {...props}
            onChange={handleOnchange}
            current={currentPage}
        />
    )
}

export default Pagination