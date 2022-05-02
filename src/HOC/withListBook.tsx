import React, { FC } from 'react'

export interface Props {
    title?: string,
}
const withListBook = (WrapperComponent: any, api?: any): FC<Props> => {
    return ({ title }: Props) => {
        return (
            <>
                <WrapperComponent title={title || 'List'} />
            </>
        )
    }

}


export { withListBook }