import React from 'react'
import Button from './Button'

function ButtonList() {
  return (
    <div className ="flex ">
      <Button name = "Games"/>
      <Button name = "Live"/>
      <Button name = "Trending"/>
      <Button name = "Songs"/>
      <Button name = "Latest"/>
      <Button name = "Telugu"/>
      <Button name = "Movies"/>

    </div>
  )
}

export default ButtonList