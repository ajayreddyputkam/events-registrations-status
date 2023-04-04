// Write your code here
import './index.css'

const EventItem = props => {
  const {eachObject, gettingStatus, isActive} = props
  const {imageUrl, name, location, registrationStatus, id} = eachObject

  const statusOfObject = () => {
    gettingStatus(registrationStatus, id)
  }

  const activeBorder = isActive ? 'active-image' : ''

  return (
    <li className="list-item" onClick={statusOfObject}>
      <button className="image-buttons" type="button" onClick={statusOfObject}>
        <img
          src={imageUrl}
          alt="event"
          className={`image-item-event ${activeBorder} `}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-place">{location}</p>
    </li>
  )
}

export default EventItem
