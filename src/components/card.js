import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div id="Icon" className="card-icon">
        <svg id={props.iconId} viewBox="0 0 1024 1024" className="card-icon1">
          <path
            d="M682 746q44 0 76-31t32-75-32-75-76-31-75 31-31 75 31 75 75 31zM406 342q0 44 31 75t75 31 75-31 31-75-31-76-75-32-75 32-31 76zM342 746q44 0 75-31t31-75-31-75-75-31-76 31-32 75 32 75 76 31zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
            className=""
          ></path>
        </svg>
      </div>
      <main className="card-content">
        <h1 className="card-header">{props.header}</h1>
        <p className="card-description">{props.description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  iconId: '5a71a962-a9fa-4442-abe9-1f257a02455c',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  header: 'Sima Mosbacher',
}

Card.propTypes = {
  iconId: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  header: PropTypes.string,
}

export default Card
