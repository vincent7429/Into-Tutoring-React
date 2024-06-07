import React from 'react'

import PropTypes from 'prop-types'

import './sign-in7.css'

const SignIn7 = (props) => {
  return (
    <div className="sign-in7-container thq-section-padding">
      <div className="sign-in7-max-width thq-section-max-width">
        <div className="sign-in7-container1 thq-section-padding">
          <div className="sign-in7-form">
            <h2 className="thq-heading-2 sign-in7-text">{props.heading1}</h2>
            <form className="sign-in7-form1">
              <div className="sign-in7-email">
                <label htmlFor="thq-sign-in-7-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-7-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-in7-textinput thq-body-large thq-input"
                />
              </div>
              <div className="sign-in7-password">
                <div className="sign-in7-textfield">
                  <div className="sign-in7-container2">
                    <label
                      htmlFor="thq-sign-in-7-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                    <div className="sign-in7-hide-password">
                      <svg viewBox="0 0 1024 1024" className="sign-in7-icon">
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="thq-body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-in-7-password"
                    required="true"
                    placeholder="Password"
                    className="sign-in7-textinput1 thq-body-large thq-input"
                  />
                </div>
                <span className="sign-in7-text04 thq-body-small">
                  Forgot password
                </span>
              </div>
            </form>
            <button type="submit" className="sign-in7-button thq-button-filled">
              <span className="sign-in7-text05 thq-body-small">
                {props.action1}
              </span>
            </button>
            <div className="sign-in7-divider">
              <div className="sign-in7-divider1"></div>
              <p className="thq-body-large">OR</p>
              <div className="sign-in7-divider2"></div>
            </div>
            <button className="sign-in7-button1 thq-button-outline">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="sign-in7-icon2"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <span className="thq-body-small">Continue with Facebook</span>
            </button>
          </div>
        </div>
        <div className="sign-in7-container3 thq-section-padding">
          <h2 className="thq-heading-2">{props.heading2}</h2>
          <p className="thq-body-large">{props.content1}</p>
          <ul className="list">
            <li className="sign-in7-li list-item">
              <span className="thq-body-small">{props.content2}</span>
            </li>
            <li className="sign-in7-li1 list-item">
              <span className="thq-body-small">{props.content3}</span>
            </li>
            <li className="sign-in7-li2 list-item">
              <span className="thq-body-small">{props.content4}</span>
            </li>
            <li className="sign-in7-li3 list-item">
              <span className="thq-body-small">{props.content5}</span>
            </li>
          </ul>
          <button type="submit" className="sign-in7-button2 thq-button-filled">
            <span className="sign-in7-text14 thq-body-small">
              Create an account
            </span>
          </button>
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="sign-in7-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-in7-container4"></div>
    </div>
  )
}

SignIn7.defaultProps = {
  content2:
    'Create an account to get started with our mobile medical app, online doctor visits, healthcare services, and language learning programs.',
  heading1: 'Sign In',
  content4:
    'By signing in, you agree to our Terms of Service and Privacy Policy.',
  image1Src:
    'https://images.unsplash.com/photo-1629036747901-6cad3758cd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTQ1OTEzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Sign In Image',
  action1: 'Sign In',
  content1: 'Access your account to start using our services.',
  heading2: 'New User?',
  content5: 'For assistance, contact our support team.',
  content3: 'Forgot your password? No worries, you can reset it here.',
}

SignIn7.propTypes = {
  content2: PropTypes.string,
  heading1: PropTypes.string,
  content4: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading2: PropTypes.string,
  content5: PropTypes.string,
  content3: PropTypes.string,
}

export default SignIn7
