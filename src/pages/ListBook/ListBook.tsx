import React from 'react'
import ListBookContent from '../../components/ListBookContent/ListBookContent'
import NovelNewItem from '../../components/NovelNewItem/NovelNewItem'
import Pagination from '../../components/Pagination/Pagination'
import './listbook.scss'
export interface Props {
    title?: string,
    onPageChange?: () => void
}
const ListBook = ({ title }: Props) => {
    return (
        <div className="list-book-page">
            <div className='list-book'>
                <div className="container">
                    <div className="list-book__title">
                        <h2>{title || 'List'}</h2>
                    </div>
                    <ListBookContent />
                    <div className="pagination-wrapper">
                        <Pagination total={100} pageSize={10} defaultPageSize={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListBook