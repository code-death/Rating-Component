import './Button.css'

const Button = props => {
  return (
    <button type={props.type} name={props.name} id={props.id}>
      {props.id}
    </button>
  )
}

export default Button
