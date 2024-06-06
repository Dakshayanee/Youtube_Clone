import React from 'react'
import Button from './Button'

// const list=["All","Live","Gaming"];
const ButtonList = () => {
  return (
    <div className='flex'>
       <Button name="All "/>
       <Button name="Gaming"/>
       <Button name="Songs"/>
       <Button name="Live"/>
       <Button name="Cricket"/>
       <Button name="News"/>
       <Button name="T-Series"/>
       <Button name="Drama"/>
       <Button name="Comedy"/>
    </div>
  )
}

export default ButtonList