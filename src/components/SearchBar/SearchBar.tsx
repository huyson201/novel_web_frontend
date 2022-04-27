import React, { useRef, ChangeEvent, useState, useCallback, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import useDebounce from '../../hooks/useDebounce'
import './searchbar.scss'
import SearchingItem from './SearchingItem/SearchingItem'
interface Props {
    placeholder?: string
}

const SearchBar = ({ ...props }: Props) => {
    const [searchData, setSearchData] = useState<any>(null)
    const [key, setKey] = useState<string>('')
    const [focus, setFocus] = useState<boolean>(false)
    const [waiting, setWaiting] = useState<boolean>(false)
    const [emptyResult, setEmptyResult] = useState<boolean>(false)
    const debounceValue = useDebounce<string>(key, 1500);


    const inputRef = useRef<HTMLDivElement>(null)

    const handleFocusAndBlur = () => {
        inputRef.current?.classList.toggle('active')
        setFocus(!focus)
    }

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setWaiting(true)
        let value = e.currentTarget.value
        setKey(value)
    }


    useEffect(() => {
        setWaiting(false)
        console.log('use debounce')
    }, [debounceValue])

    return (
        <div className='search-bar'>
            <div ref={inputRef} className="search-bar__ip">
                <IoSearch />
                <input {...props} onChange={handleOnchange} type="search" autoComplete='off' onBlur={handleFocusAndBlur} onFocus={handleFocusAndBlur} />
            </div>
            {
                focus && <div className='search-bar__result'>
                    {(key == '') &&
                        <div style={{ padding: 12 }}>Nhập từ khóa bất kỳ để tìm kiếm truyện.</div>
                    }
                    {
                        waiting && (
                            <div>
                                <SearchingItem />
                                <div className='separator'></div>
                                <SearchingItem />
                            </div>
                        )
                    }
                    {
                        (emptyResult === true) &&
                        <div style={{ padding: 12 }}>Không tìm thấy truyện với từ khóa này.</div>

                    }
                </div>
            }
        </div>
    )
}

export default SearchBar