import './Checkbox.css'

export default function Checkbox(props) {

  return (
    <div className='CheckboxContainer'>
      <label className='Checkbox__Label' htmlFor={props.text}>
        <input className='Checkbox__Input'  id={props.text} type='checkbox'/>{props.text}</label>
    </div>
  )
}