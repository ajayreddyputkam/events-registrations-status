// Write your code here

import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {statusRegister, registrationStatus} = props

  const renderInitialPage = () => (
    <div className="initial-details-container">
      <p className="initial-description">
        Click on an event, to view its registration details{' '}
      </p>
    </div>
  )

  const renderRegisteredPage = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-logo"
      />
      <h1 className="registered-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedPage = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderYetToRegisterPage = () => (
    <div className="yet-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-image"
      />
      <p className="yet-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderingThePage = () => {
    switch (statusRegister) {
      case registrationStatus.registered:
        return renderRegisteredPage()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedPage()
      case registrationStatus.yetToRegister:
        return renderYetToRegisterPage()

      default:
        return renderInitialPage()
    }
  }

  return (
    <div className="registration-page-main-container">{renderingThePage()}</div>
  )
}

export default ActiveEventRegistrationDetails
