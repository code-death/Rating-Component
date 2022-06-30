import './Button.css'

const Button = props => {
  return (
    <button
      className={props.class}
      type={props.type}
      name={props.name}
      id={props.id}
    >
      {props.id}
    </button>
  )
}

export default Button
