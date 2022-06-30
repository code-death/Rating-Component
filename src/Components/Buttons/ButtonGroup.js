import './ButtonGroup.css'
import Button from './Button'

const buttons = [
  { name: 'button1', id: 1, key: 1, type: 'button' },
  { name: 'button2', id: 2, key: 2, type: 'button' },
  { name: 'button3', id: 3, key: 3, type: 'button' },
  { name: 'button4', id: 4, key: 4, type: 'button' },
  { name: 'button5', id: 5, key: 5, type: 'button' },
]

const ButtonGroup = props => {
  return (
    <>
      <div className='ButtonGroup'>
        {buttons.map(value => {
          return (
            <Button
              class='rating-button'
              type={value.type}
              name={value.name}
              id={value.id}
            />
          )
        })}
      </div>
      <Button class='Submit' type='submit' name='submit' id='SUBMIT' />
    </>
  )
}

export default ButtonGroup
