import './PresentationUI.css'

export default function PresentationUI(props) {

  const DynamicComponent = props.component;

  return (
    <div className='PresentationUI' style={{display:props.flex}}>
      <h3 className='PresentationUI__Subtitle'>{props.subtitle}</h3>
      <div className='PresentationUI__Component'>
        <DynamicComponent style={props.style} text={props.text} type={props.type}/>
      </div>
    </div>
  )
}