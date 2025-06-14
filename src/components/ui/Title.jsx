import React from 'react'

const Title = ({children, addClass}) => {
  return (
    <h4 className={`text-2xl mt-8 font-bold ${addClass}`}>{children}</h4>
  )
}

export default Title