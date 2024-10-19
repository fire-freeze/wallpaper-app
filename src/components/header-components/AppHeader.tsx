import React from 'react'

interface PropTypes {
    children: React.ReactNode
}

const AppHeader : React.FC<PropTypes> = ({children}) => {
  return (
    <div className="app-header">
      {children}
    </div>
  )
}

export default AppHeader