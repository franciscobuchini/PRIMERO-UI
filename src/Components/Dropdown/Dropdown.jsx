import './Dropdown.css'
import { useState, useRef, useEffect } from 'react'

export default function Dropdown(props) {
  const className = `Dropdown Style${props.style}`
  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef(null)
  const clickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false)}};

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    
    return () => {
      document.removeEventListener('mousedown', clickOutside);};}, []);
    
  return (
    <div className='DropdownContainer'>
      <a className={className} onClick={(e)=> setIsActive(!isActive)}>{props.text} ▾</a>
      {isActive && (
        <div className='Dropdown__Box' ref={dropdownRef}>
          <a className='Dropdown__Item'> Spanish </a>
          <a className='Dropdown__Item'> English </a>
          <a className='Dropdown__Item'> Italian </a>
          <a className='Dropdown__Item'> Portuguese </a>
          <a className='Dropdown__Item'> German </a>
          <a className='Dropdown__Item'> Danish </a>
        </div>
      )}
    </div>
  )
}