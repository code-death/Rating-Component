import './Star.css'
import { ReactComponent as StarImage } from '../Assets/icon-star.svg'

const Star = props => {
  return (
    <div className='star'>
      <StarImage className='starImage' />
    </div>
  )
}

export default Star
