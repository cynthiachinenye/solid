import React from 'react'

const getStyleName = cyndy =>{
  const className ={
    '=': 'equalto',
    'x': 'options',
    '-':'options',
    '+': 'options',
    '/': 'options',
  }
  return className[cyndy]
}
const Button = ({value}) => {
  return (
<button className={`${getStyleName(value)} button`}> {value}</button >
  )
}

export default Button