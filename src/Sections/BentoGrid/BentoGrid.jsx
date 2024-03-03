import './BentoGrid.css'
import Title from '../../Components/Title/Title.jsx'
import Space from '../../Components/Space/Space.jsx'
import Bentob3x3 from '../../Components/BentoGridElements/Bentob3x3.jsx'
import BentoWide from '../../Components/BentoGridElements/BentoWide.jsx'
import Bentob6x3 from '../../Components/BentoGridElements/Bentob6x3.jsx'
import BentoBigb3x3 from '../../Components/BentoGridElements/BentoBigb3x3.jsx'
import bentoX from './../../Assets/Icons/bentoX.svg'
import bentoInstagram from './../../Assets/Icons/bentoInstagram.svg'
import bentoLinkedin from './../../Assets/Icons/bentoLinkedin.svg'
import bentoBehance from './../../Assets/Icons/bentoBehance.svg'
import bentob6x31 from './../../Assets/Icons/bentob6x31.svg'

export default function BentoGrid(props) {
  return (
    <div className='BentoGridComponent' >
      <Title title = {props.title} /> 
      <Space/>
      <div className='Bento__Grid'>
        <BentoBigb3x3 />
        <Bentob3x3 image = {bentoX} />
        <Bentob3x3 image = {bentoInstagram} />
        <BentoWide />
        <Bentob6x3 image = {bentob6x31} />
        <BentoWide />
        <Bentob3x3 image = {bentoLinkedin} />
        <Bentob3x3 image = {bentoBehance} />
        <BentoWide />
      </div>
    </div>
    
  )
}