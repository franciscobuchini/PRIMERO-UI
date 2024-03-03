import './HeaderDemo.css'
import Logo from './../../../Assets/Examples/yourcompany.svg'
import Button from '../../Button/Button.jsx';
export default function HeaderDemo(props) {

  const classNames = `HeaderDemo Header__Style${props.style}`;

  return (
    <div className= {classNames}>
      <div className='HeaderDemo__LogoArea'> <img className='HeaderDemo__Logo' src={Logo}/> </div>
      <div className='HeaderDemo__ButtonsArea'>
        <Button style='02' text='Button01'/>
        <Button style='02' text='Button02'/>
        <Button style='02' text='Button03'/>
      </div>
    </div>
  )
}