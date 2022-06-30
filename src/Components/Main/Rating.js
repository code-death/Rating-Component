import './Rating.css'
import Card from '../Card/Card'
import Star from '../UI/Star'
import ButtonGroup from '../Buttons/ButtonGroup'

const Rating = props => {
  return (
    <div className='rating'>
      <Card>
        <Star />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ButtonGroup />
      </Card>
    </div>
  )
}

export default Rating
