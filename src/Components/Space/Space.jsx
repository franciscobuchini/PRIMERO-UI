export default function Space(props) {

  const SpaceHeight = {height: props.height || '60px'};

  return (
    <div className='Space' style={SpaceHeight}></div>
  )
}