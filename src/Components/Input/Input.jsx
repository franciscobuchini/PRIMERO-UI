import './Input.css'

export default function Input(props) {

  return (
    <div className='InputContainer'>
      <input id={props.type} type={props.type} autoComplete='off' required pattern='\S+'/>
      <label htmlFor={props.type}>{props.type}</label>
    </div>
  )
}