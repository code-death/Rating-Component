import './Thanks.css'
import Card from '../Card/Card'
import { ReactComponent as Illustration } from '../Assets/illustration-thank-you.svg'

const Thanks = props => {
  return (
    <div className='Thanks'>
      <Card>
        <Illustration className='image' />
        <p id='rating'>You selected {props.rating} out of 5</p>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch.
        </p>
      </Card>
    </div>
  )
}

export default Thanks
