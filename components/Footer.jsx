import React from 'react'
import Link from 'next/link'

 const Footer = () => {
    return (
      <div className='footer-container'>
        <section className='footer-sub'>
          <p className='footer-sub-header'>Welcome To Our Football Club and Join Us!</p>
          <p className='footer-sub-text'>You can subscrip any time.</p>
          <div className='input-area'>
            <input className='footer-input' type="text" name="" placeholder='Type Your Email Here...' />
            <button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Subscrip
            </button>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-links-wrapper'>
            <div className='footer-links-items'>
              <h2>About Us</h2>
              <Link  href={'/'}>How it works</Link>
              <Link  href={'/'}>About Teams</Link>
              <Link  href={'/'}>Docs</Link>
            </div>
            <div className='footer-links-items'>
              <h2>Contact Us</h2>
              <Link href={'/'}>Contact</Link>
              <Link href={'/'}>Support</Link>
              <Link href={'/'}>Help</Link>
            </div>
            <div className='footer-links-items'>
              <h2>Resources</h2>
              <Link href={'/'}>Blog</Link>
              <Link href={'/'}>Learn More</Link>
            </div>
            <div className='footer-links-items'>
              <h2>Join Us</h2>
              <Link href={'/'}>Get Started</Link>
              <Link href={'/'}>Subscrip</Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link className='logo-link' href="/">Swe-Uyghur FC <i className='fab fa-typo3'/></Link>
            </div>
            <small className="website">SweUyghur © 2022</small>
            <div className='social-icons'>
              <Link className='social-icon-link facebook' href="/"
              target="_blank"
              area-aria-label='Facebook'
              >
                <i className="fab fa-facebook"/>
              </Link>
              <Link className='social-icon-link instagram' href="/"
              target="_blank"
              area-aria-label='Instagram'
              >
                <i className="fab fa-instagram"/>
              </Link>
              <Link className='social-icon-link youtube' href="/"
              target="_blank"
              area-aria-label='Youtube'
              >
                <i className="fab fa-youtube"/>
              </Link>
              <Link className='social-icon-link twitter' href="/"
              target="_blank"
              area-aria-label='Twitter'
              >
                <i className="fab fa-twitter"/>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

export default Footer