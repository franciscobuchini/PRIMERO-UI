import './Button.css'

export default function Button(props) {
  const className = `Button Style${props.style}`;

  return (
    <a className={className} href={props.href}>
      {props.text}
    </a>
  )
}