import './Rating.css'
import Card from '../Card/Card'
import Star from '../UI/Star'
import ButtonGroup from '../Buttons/ButtonGroup'
import { useState } from 'react'

const Rating = props => {
  const [rating, setRating] = useState('')
  const handleSave = value => {
    setRating(value)
    props.onRate(value)
  }

  return (
    <div className='rating'>
      <Card>
        <Star />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ButtonGroup onSave={handleSave} />
      </Card>
    </div>
  )
}

export default Rating
