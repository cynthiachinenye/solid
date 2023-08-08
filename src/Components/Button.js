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
  const clickHandler = ()=>{
    const command ={
      '.': commaClick,
      'C':resetClick,
      '/':signClick,
    }

  }
  return (
<button onClick={clickHandler} className={`${getStyleName(value)} button`}> {value}</button >
  )
}

export default Button