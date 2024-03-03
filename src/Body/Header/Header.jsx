import './Header.css'
import Button from '../../Components/Button/Button.jsx'
import Dropdown from '../../Components/Dropdown/Dropdown.jsx';
import Logo from './../../Assets/Logo.svg'

export default function Header(props) {

  const classNames = `Header Header__Style${props.style}`;

  const buttons = [
    // { id: 1 , text: 'Option 1' , href: '#' , style: '01'},

  ];

  const dropdowns = [
    // { id: 1 , text: 'Dropdown 1' , style: '04'},
  ];

  return (
    <div className= {classNames}>
      <div className='Header__LogoArea'>
        <img className='Header__Logo' src={Logo}/>
      </div>
      <div className='Header__ButtonsArea'>
        {buttons.map((item) => (<Button key={item.id} text={item.text} href={item.href} style={item.style}/>))}
        {dropdowns.map((item) => (<Dropdown key={item.id} text={item.text} style={item.style}/>))}
        Created by <a> Francisco Buchini</a>
      </div>
    </div>
  )
}