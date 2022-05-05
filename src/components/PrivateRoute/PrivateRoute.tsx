import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'

interface Props {
  children: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[],
  authorized?: boolean
}

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation()
  const userState = useAppSelector(state => state.user)
  console.log("private")
  if (!userState.authorized && !userState.logout) {
    return <Navigate to={'/login'} state={{ from: location }} replace />
  }
  return (
    <>
      {children}
    </>
  )
}

export default PrivateRoute