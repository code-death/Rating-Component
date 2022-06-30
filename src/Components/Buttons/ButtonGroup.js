import './ButtonGroup.css'
import Button from './Button'
import { useState } from 'react'

const buttons = [
  { name: 'button1', id: 1, key: 1, type: 'button' },
  { name: 'button2', id: 2, key: 2, type: 'button' },
  { name: 'button3', id: 3, key: 3, type: 'button' },
  { name: 'button4', id: 4, key: 4, type: 'button' },
  { name: 'button5', id: 5, key: 5, type: 'button' },
]

const ButtonGroup = props => {
  const [clickValue, setClickValue] = useState('')
  const handleClick = e => {
    setClickValue(e.target.id)
  }
  const handleSubmit = e => {
    props.onSave(clickValue)
  }

  return (
    <>
      <div className='ButtonGroup'>
        {buttons.map(value => {
          return (
            <Button
              onClick={handleClick}
              class='rating-button'
              type={value.type}
              name={value.name}
              id={value.id}
              key={value.key}
            />
          )
        })}
      </div>
      <Button
        onClick={handleSubmit}
        class='Submit'
        type='submit'
        name='submit'
        id='SUBMIT'
      />
    </>
  )
}

export default ButtonGroup
