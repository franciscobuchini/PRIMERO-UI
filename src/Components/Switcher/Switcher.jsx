import './Switcher.css'

export default function Switcher(props) {

  return (
    <div className='SwitcherComponent'>
      <label className='Switcher__Label' htmlFor={props.text}> 
        <input className="Switcher__Checkbox" type="checkbox" id={props.text}/>
        <span className="Switcher__Slider"></span>
      </label>
      <span className='Switcher__Text'>{props.text}</span>
    </div>

  )
}