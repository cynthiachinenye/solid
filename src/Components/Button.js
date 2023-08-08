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
  const commaClick =() =>{
    
  }
  const clickHandler = ()=>{
    const command ={
      '.': commaClick,
      'C':resetClick,
      '/':signClick,
      'x':signClick,
      '-':signClick,
      '=':equalsClick,
      '%':percentageClick,
      '+-':invertClick,

    }

    if(command[value]){
      return command[value]()
    }else{
      return clickHandlerButton()
    }
  }
  return (
<button onClick={clickHandler} className={`${getStyleName(value)} button`}> {value}</button >
  )
}

export default Button