import { useState, useEffect } from 'react';

function getSavedValue(key:string, initialValue:any)
{
    let savedValue = JSON.parse(localStorage.getItem(key) || '')
    if(savedValue !== '') return savedValue

    if(initialValue instanceof Function) return initialValue()
    return initialValue
}

function useLocalStorage<T>(key: string, initialValue?: T)
{
    const [value,setValue] = useState<any>(()=>{
       return getSavedValue(key, initialValue)
    })

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    },[initialValue])

    return [value, setValue]
}

export default useLocalStorage