import './Label.css'

export default function Label(props) {

  return (
    <div className='LabelContainer'>
      {props.text}
    </div>
  )
}