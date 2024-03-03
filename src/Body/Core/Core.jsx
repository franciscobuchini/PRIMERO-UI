import './Core.css'
import PresentationSection from '../../Sections/PresentationSection/PresentationSection.jsx'
import HeaderDemo from '../../Components/DemoComponents/HeaderDemo/HeaderDemo.jsx'
import Button from '../../Components/Button/Button.jsx';
import SocialMedia from '../../Components/SocialMedia/SocialMedia.jsx'
import Dropdown from '../../Components/Dropdown/Dropdown.jsx'
import Space from '../../Components/Space/Space.jsx';
import Input from '../../Components/Input/Input.jsx';
import Checkbox from '../../Components/Checkbox/Checkbox.jsx';
import Switcher from '../../Components/Switcher/Switcher.jsx';
import BentoGrid from '../../Sections/BentoGrid/BentoGrid.jsx';
import Label from '../../Components/Label/Label.jsx';

export default function Core() {

  const HeaderSections = [
    { subtitle: 'Style 1:', style: '01' },
    { subtitle: 'Style 2:', style: '02' },
    { subtitle: 'Style 3:', style: '03' },
  ];

  const ButtonSections = [
    { subtitle: 'Style 1:', style: '01', text: 'Button'},
    { subtitle: 'Style 2:', style: '02', text: 'Button'},
    { subtitle: 'Style 3:', style: '03', text: 'Button'},
    { subtitle: 'Style 4:', style: '04', text: 'Button'},
    { subtitle: 'Style 5:', style: '05', text: 'Button'},
  ];

  const SocialMediaSections = [
    { subtitle: 'Style 1:', style: '01' },
    { subtitle: 'Style 2:', style: '02' },
    { subtitle: 'Style 3:', style: '03' },
    { subtitle: 'Style 4:', style: '04' },
    { subtitle: 'Style 5:', style: '05' },
  ];

  const InputSections = [
    {type:'Text'}, {type:'Password'}, {type:'Search'},
  ];

  const CheckboxSections = [
    {text:'Click on this checkbox'},
  ];

  const SwitcherSections = [
    {text:'Try the switcher'},
  ];

  const LabelsSections = [
    {text:'Adobe XD'}, {text:'Figma'}, {text:'Photoshop'}, {text:'HTML'}, {text:'CSS'}, {text:'Javascript'}, {text:'React'},
    {text:'SASS'}, {text:'Illustrator'}, {text:'AutoCAD'},
  ];

  return (
    <div className='Core'>
      <Space/> <Space/>
      <PresentationSection title='Headers:' component={HeaderDemo} sections={HeaderSections} />
      <Space/>
      <PresentationSection title='Buttons:' flex='flex' component={Button} sections={ButtonSections} />
      <Space/>
      <PresentationSection title='Dropdowns:' flex='flex' component={Dropdown} sections={ButtonSections} />
      <Space/>
      <PresentationSection title='Social Media:' component={SocialMedia} sections={SocialMediaSections} />
      <Space/>
      <PresentationSection title='Inputs:' flex='flex' component={Input} sections={InputSections} />
      <Space/>
      <PresentationSection title='Checkbox:' component={Checkbox} sections={CheckboxSections} />
      <Space/>
      <PresentationSection title='Switcher:' component={Switcher} sections={SwitcherSections} />
      <Space/>
      <PresentationSection title='Labels:' flex='flex' component={Label} sections={LabelsSections} />
      <Space/>
      <BentoGrid title='Bento Grid:'/>
    </div>
  )
}