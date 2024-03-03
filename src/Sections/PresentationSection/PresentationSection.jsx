import React from 'react';
import './PresentationSection.css'
import PresentationUI from '../../Components/PresentationUI/PresentationUI.jsx'
import Space from '../../Components/Space/Space.jsx'
import Title from '../../Components/Title/Title.jsx';

export default function PresentationSection(props) {

  const renderSections = () => {
    return props.sections.map((section, index) => (
      <React.Fragment key={index}>
        <PresentationUI flex={props.flex} component={props.component} subtitle={section.subtitle} style={section.style} text={section.text} type={section.type}/>
        {index < props.sections.length - 1 && <Space height ='10px'/>}
      </React.Fragment>
    ));
  };

  return (
    <div className='PresentationSection'>
      <Title title = {props.title} /> 
      <div className='PresentationSection__Box' style={{display:props.flex}}> {renderSections()} </div>
      
    </div>
  )
}