import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Mark from '../components/mark'
import Accordion from '../components/accordion'
import Review from '../components/review'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Into-Tutoring</title>
        <meta property="og:title" content="Into-Tutoring" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive sticky">
        <img
          alt="logo"
          src="https://into-tutoring.org/public/into%20logo1-200h.webp"
          className="home-image"
        />
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links">
            <span className="home-text">Our Misson</span>
            <span className="home-text01">Learning Options</span>
            <span className="home-text02">Team</span>
            <span className="home-text03">FAQ</span>
            <span className="home-text04">Contact Us</span>
          </nav>
          <div className="home-buttons"></div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-text05">About</span>
              <span className="home-text06">Features</span>
              <span className="home-text07">Pricing</span>
              <span className="home-text08">Team</span>
              <span className="home-text09">Blog</span>
            </nav>
            <div className="home-buttons1">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  <span className="home-text10">
                    Closing the gap for English Language Learning instruction.
                  </span>
                  <br></br>
                </h1>
                <span className="home-caption">
                  A non-profit ran by students, founded by students currently
                  offering classes for Spanish and Chinese Speakers. 
                </span>
              </header>
              <div className="home-buttons2">
                <div className="home-get-started button">
                  <span className="home-text12">Sign up today</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text13">
                    <span>Email us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
          </div>
          <img
            alt="image"
            src="https://png.pngtree.com/png-vector/20230914/ourmid/pngtree-cheerful-hispanic-schoolboy-giving-a-thumbs-png-image_9977833.png"
            className="home-image01"
          />
          <div className="home-image02">
            <svg viewBox="0 0 1316.5714285714284 1024" className="home-icon10">
              <path d="M1013.714 477.714l10.286 180.571c4.571 80.571-164 146.286-365.714 146.286s-370.286-65.714-365.714-146.286l10.286-180.571 328 103.429c9.143 2.857 18.286 4 27.429 4s18.286-1.143 27.429-4zM1316.571 292.571c0 8-5.143 14.857-12.571 17.714l-640 201.143c-2.286 0.571-4 0.571-5.714 0.571s-3.429 0-5.714-0.571l-372.571-117.714c-32.571 25.714-55.429 88.571-60 165.714 21.714 12.571 36 35.429 36 62.286 0 25.714-13.143 48-33.143 61.143l33.143 247.429c0.571 5.143-1.143 10.286-4.571 14.286s-8.571 6.286-13.714 6.286h-109.714c-5.143 0-10.286-2.286-13.714-6.286s-5.143-9.143-4.571-14.286l33.143-247.429c-20-13.143-33.143-35.429-33.143-61.143 0-27.429 15.429-50.857 37.143-63.429 3.429-66.857 20.571-138.857 56-188.571l-190.286-59.429c-7.429-2.857-12.571-9.714-12.571-17.714s5.143-14.857 12.571-17.714l640-201.143c2.286-0.571 4-0.571 5.714-0.571s3.429 0 5.714 0.571l640 201.143c7.429 2.857 12.571 9.714 12.571 17.714z"></path>
            </svg>
          </div>
          <div className="home-image03"></div>
        </div>
      </section>
      <div className="home-container01">
        <h2 className="home-text16">Our Mission</h2>
        <span className="home-text17">
          <span>
             At INTO , we are dedicated to breaking language barriers and
            fostering inclusive communities through accessible and personalized
            English language education. Our student-run non-profit organization
            is committed to providing free, remote English lessons and
            translation services to Chinese and Spanish speakers, equipping them
            with the skills and confidence needed to thrive in English-speaking
            environments.
          </span>
          <br></br>
        </span>
      </div>
      <section className="home-section01">
        <div className="home-note">
          <div className="home-content1">
            <main className="home-main1">
              <h2 className="home-heading01">
                <span>We want to help you and your child.</span>
                <br></br>
              </h2>
              <p className="home-paragraph">
                <span>Into-Tutoring </span>
                <br></br>
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text24">Explore more -&gt;</p>
            </div>
          </div>
          <div className="home-image04">
            <img
              alt="image"
              src="/SectionImages/group%201490-1200w.png"
              className="home-image05"
            />
          </div>
        </div>
      </section>
      <section className="home-section02">
        <header className="home-header01">
          <h2 className="home-text25">Why do you need a mobile medical app?</h2>
          <span className="home-text26">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </span>
        </header>
        <section className="home-note1">
          <div className="home-image06">
            <img
              alt="image"
              src="/SectionImages/group%201428-1200w.png"
              className="home-image07"
            />
          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption1">
                <span className="section-head">Tempor incididunt</span>
              </div>
              <div className="home-heading02">
                <h2 className="section-heading">
                  We provide compassionate care from start to finish.
                </h2>
                <p className="section-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </p>
              </div>
            </div>
            <div className="home-get-started2 button">
              <span className="home-text27">Get started</span>
            </div>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image08">
            <img
              alt="image"
              src="/SectionImages/group%201449-1200w.png"
              className="home-image09"
            />
          </div>
          <div className="home-content3">
            <main className="home-main3">
              <header className="home-caption2">
                <span className="home-section04 section-head">
                  Tempor incididunt
                </span>
              </header>
              <main className="home-heading04">
                <header className="home-header02">
                  <h2 className="section-heading">
                    Great care, wherever you are
                  </h2>
                  <p className="section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </header>
                <div className="home-checkmarks">
                  <Mark></Mark>
                  <Mark label="Quis nostrud exercitation ullamco"></Mark>
                  <Mark label="Reprehenderit qui in ea voluptate velit"></Mark>
                </div>
              </main>
            </main>
            <div className="home-get-started3 button">
              <span className="home-text28">Get started</span>
            </div>
          </div>
        </section>
      </section>
      <section className="home-section05">
        <header className="home-header03">
          <header className="home-left">
            <span className="section-head">
              <span>Offering many different options to fit everyone</span>
              <br></br>
            </span>
            <h2 className="section-heading">Learning Options</h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph3 section-description">
              <span>
                One our goals as a tutoring non-profit is serving our community.
                We understand that it is difficult to find quality tutoring and
                education. We offer many options to fit a childs busy schedule,
                learning style and situation. We offer both online and in-person
                tutoring.
              </span>
              <br></br>
            </p>
          </div>
        </header>
        <main className="home-plans">
          <div className="home-plan">
            <div className="home-container02">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
              </svg>
            </div>
            <label className="home-name">1-1 Instructional Plans</label>
            <span className="home-text33">Type more info here...</span>
            <div className="home-details">
              <div className="home-header04">
                <div className="home-pricing"></div>
              </div>
            </div>
          </div>
          <div className="home-plan1">
            <div className="home-container03">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
              </svg>
            </div>
            <label className="home-name1">1-1 Instructional Plans</label>
            <span className="home-text34">Type more info here...</span>
            <div className="home-details1">
              <div className="home-header05">
                <div className="home-pricing01"></div>
              </div>
            </div>
          </div>
          <div className="home-plan2">
            <div className="home-container04">
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
              </svg>
            </div>
            <label className="home-name2">1-1 Instructional Plans</label>
            <span className="home-text35">Type more info here...</span>
            <div className="home-details2">
              <div className="home-header06">
                <div className="home-pricing02"></div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section07">
        <header className="home-left1">
          <h2 className="home-heading07 section-heading">Langauges Offered</h2>
        </header>
        <header className="home-header07">
          <div className="home-right1"></div>
        </header>
        <main className="home-plans1">
          <div className="home-plan3">
            <div className="home-container05">
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
              </svg>
            </div>
            <label className="home-name3">Chinese</label>
            <div className="home-details3">
              <div className="home-header08">
                <div className="home-pricing03"></div>
              </div>
            </div>
          </div>
          <div className="home-plan4">
            <div className="home-container06">
              <svg viewBox="0 0 1024 1024" className="home-icon20">
                <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
              </svg>
            </div>
            <label className="home-name4">Spanish</label>
            <div className="home-details4">
              <div className="home-header09">
                <div className="home-pricing04"></div>
              </div>
            </div>
          </div>
          <div className="home-plan5">
            <div className="home-container07">
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
              </svg>
            </div>
            <label className="home-name5">And more coming soon!</label>
            <div className="home-details5">
              <div className="home-header10">
                <div className="home-pricing05"></div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section08">
        <div className="home-note3">
          <div className="home-image10">
            <img
              alt="image"
              src="/SectionImages/iphone%2014%20pro%20max-1200w.png"
              className="home-image11"
            />
          </div>
          <div className="home-content4">
            <div className="home-caption3">
              <span className="section-head">Tempor incididunt</span>
            </div>
            <div className="home-heading08">
              <div className="home-header11">
                <h2 className="section-heading">
                  Tips to get care, answers and advice faster
                </h2>
              </div>
              <Accordion rootClassName="accordion-root-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section10">
        <div className="home-cube">
          <div className="home-top1 side"></div>
          <div className="home-front side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header12">
            <h2 className="section-heading">
              Planical makes online doctor visits easier
            </h2>
            <p className="home-description section-description">
              Lorem ipsum dolor sit amet!
            </p>
          </div>
          <div className="home-buttons3">
            <div className="home-get-started4 button">
              <span className="home-text36">Get started</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text37">Book a demo</span>
            </div>
          </div>
        </main>
      </section>
      <div className="home-container08">
        <img
          alt="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/1200px-Emoji_u1f44b.svg.png"
          className="home-image12"
        />
        <span className="home-text38">
          <span>
            Hello, nice to
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>meet you!</span>
        </span>
      </div>
      <section className="home-section11">
        <div className="home-cube1">
          <div className="home-top2 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left3 side"></div>
        </div>
        <main className="home-pricing06">
          <header className="home-header13">
            <header className="home-left4">
              <h2 className="section-heading home-heading11">
                Our Team Directory
              </h2>
            </header>
            <div className="home-right2"></div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans2">
              <div className="home-plan6">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBlcnNvbnxlbnwwfHx8fDE3MTU0NjAxNTh8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image13"
                />
                <label className="home-name6">Ziyu Bai</label>
                <div className="home-container09">
                  <img
                    alt="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                    className="home-image14"
                  />
                  <span className="home-text42">Chinese Section</span>
                </div>
                <h1 className="home-price">
                  Co-Founder and Business Management of Into-Tutoring
                </h1>
                <p className="home-description1">zbai@into-tutoring.org</p>
                <div className="home-details6">
                  <div className="home-header14">
                    <div className="home-pricing07"></div>
                  </div>
                </div>
              </div>
              <div className="home-plan7">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBlcnNvbnxlbnwwfHx8fDE3MTU0NjAxNTh8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image15"
                />
                <label className="home-name7">Ziyu Bai</label>
                <div className="home-container10">
                  <img
                    alt="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                    className="home-image16"
                  />
                  <span className="home-text43">Chinese Section</span>
                </div>
                <h1 className="home-price1">
                  Co-Founder and Business Management of Into-Tutoring
                </h1>
                <p className="home-description2">zbai@into-tutoring.org</p>
                <div className="home-details7">
                  <div className="home-header15">
                    <div className="home-pricing08"></div>
                  </div>
                </div>
              </div>
              <div className="home-plan8">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBlcnNvbnxlbnwwfHx8fDE3MTU0NjAxNTh8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image17"
                />
                <label className="home-name8">Ziyu Bai</label>
                <div className="home-container11">
                  <img
                    alt="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                    className="home-image18"
                  />
                  <span className="home-text44">Chinese Section</span>
                </div>
                <h1 className="home-price2">
                  Co-Founder and Business Management of Into-Tutoring
                </h1>
                <p className="home-description3">zbai@into-tutoring.org</p>
                <div className="home-details8">
                  <div className="home-header16">
                    <div className="home-pricing09"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text45">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text48">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section12">
        <header className="home-header17">
          <header className="home-left5">
            <span className="section-head">
              <span>From the students</span>
              <br></br>
            </span>
            <h2 className="home-heading12 section-heading">
              Testimonials from Students
            </h2>
          </header>
          <div className="home-right3"></div>
        </header>
        <main className="home-cards">
          <div className="home-container12">
            <Review rootClassName="review-root-class-name"></Review>
            <Review
              quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container13">
            <Review
              quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container14">
            <Review
              quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text51">View more</p>
        </div>
      </section>
      <section className="home-section14">
        <main className="home-content5">
          <header className="home-header18">
            <h2 className="home-heading13 section-heading">
              Contact our Cordinators!
            </h2>
            <span className="home-text52">
              Or fill out the contact form in the bottom right corner!
            </span>
            <div className="home-buttons4">
              <div className="home-ios button">
                <svg
                  viewBox="0 0 1170.2857142857142 1024"
                  className="home-icon24"
                >
                  <path d="M331.429 263.429c0-31.429-20.571-52-52-52-30.857 0-62.286 20.571-62.286 52 0 30.857 31.429 51.429 62.286 51.429 31.429 0 52-20.571 52-51.429zM756 553.143c0-20.571-20.571-41.143-52-41.143-20.571 0-41.143 20.571-41.143 41.143 0 21.143 20.571 41.714 41.143 41.714 31.429 0 52-20.571 52-41.714zM621.143 263.429c0-31.429-20.571-52-51.429-52-31.429 0-62.286 20.571-62.286 52 0 30.857 30.857 51.429 62.286 51.429 30.857 0 51.429-20.571 51.429-51.429zM984 553.143c0-20.571-21.143-41.143-52-41.143-20.571 0-41.143 20.571-41.143 41.143 0 21.143 20.571 41.714 41.143 41.714 30.857 0 52-20.571 52-41.714zM832 326.286c-13.143-1.714-26.286-2.286-40-2.286-196.571 0-352 146.857-352 327.429 0 30.286 4.571 59.429 13.143 86.857-13.143 1.143-25.714 1.714-38.857 1.714-52 0-93.143-10.286-145.143-20.571l-144.571 72.571 41.143-124.571c-103.429-72.571-165.714-166.286-165.714-280 0-197.143 186.286-352 414.286-352 203.429 0 382.286 124 417.714 290.857zM1170.286 646.857c0 93.143-61.714 176-145.143 238.286l31.429 103.429-113.714-62.286c-41.714 10.286-83.429 21.143-124.571 21.143-197.143 0-352-134.857-352-300.571s154.857-300.571 352-300.571c186.286 0 352 134.857 352 300.571z"></path>
                </svg>
                <span className="home-text53">WeChat</span>
              </div>
              <div className="home-android button">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
                </svg>
                <span className="home-text54">WhatsApp</span>
              </div>
              <div className="home-android1 button">
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="home-text55">Email</span>
              </div>
            </div>
          </header>
          <img
            src="https://qvcc.edu/wp-content/uploads/2017/08/information-clipart-information-icon-e1502898603179.png"
            className="home-image19"
          />
        </main>
      </section>
      <div>
        <div className="home-container16">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
