import ArrowLink from "../ArrowLink/ArrowLink"
import './BentoGridElements.css'

export default function Bentob3x3(props) {

  return (
  <div className="BentoGridElement Bentob3x3">
    <ArrowLink/>
    <img className='Bentob3x3__Image' src={props.image}/>
  </div>)}