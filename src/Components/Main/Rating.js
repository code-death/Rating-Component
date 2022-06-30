import './Rating.css'
import Card from '../Card/Card'
import Star from '../UI/Star'

const Rating = props => {
  return (
    <div className='rating'>
      <Card>
        <Star />
      </Card>
    </div>
  )
}

export default Rating
