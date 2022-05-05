import React, { ChangeEvent } from 'react'
import './style.scss'
interface Props {
    type?: string,
    title?: string,
    placeholder?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    name?: string
}

const InputField = ({ title, ...props }: Props) => {

    return (
        <div className='ip-fields'>
            <label>
                <div className="ip-fields__title">
                    {title || 'Field title'}
                </div>
                <input {...props} />
            </label>
        </div>
    )
}

export default InputField