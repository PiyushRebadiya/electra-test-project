import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';
import '../styles/Director.css';
import Navbar from '../components/Navbar/Navbar';

const Contact = () => {
  const [activeSection, setActiveSection] = useState('section-1');
  const [loader, setLoader] = useState(true)

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 0)
  }, [])

  if (loader) {
    return (
      <div className="loader-container">
        <div className="loader">Loading</div>
      </div>
    )
  }
  return (
    <>
      <div style={{ background: "#0a0a0a", paddingTop: "0px" }}>
        <Navbar />

        <div className="content" style={{ background: "#0a0a0a" }}>
          <div className="mainCursor"></div>
          <div className="sparkCursor">
            <div className="iconWrapper"><i className="icon-logoSpark"></i></div>
          </div>

          <div id="pageContainer" className="transition-fade">
            <div className="blocks">
              <section className="contactBlock" data-show-mouse data-primary-background="true" data-scroll-inview>
                <div className="contactContainer">
                  <div className="col contactLeft">
                    <div className="contactLeftContent">
                      <h1 className="contactTitle bigTitle smaller" data-letters data-blur>
                        <span className="noBreakWord">T<i>A</i>LK</span>{' '}
                        <span className="noBreakWord">T<i>O</i></span>{' '}
                        <span className="noBreakWord">US</span>
                      </h1>
                    </div>
                    <div className="contactLeftImage" style={{ margin: "auto" }}>
                      <div className="contactFormWrapper">
                        <h3 className="formTitle normalTitleSerif">SEND US A MESSAGE</h3>
                        <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
                          <div className="formGroup">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="formInput"
                              placeholder=" "
                              required
                            />
                            <label htmlFor="name" className="formLabel">Name</label>
                          </div>

                          <div className="formGroup">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="formInput"
                              placeholder=" "
                              required
                            />
                            <label htmlFor="email" className="formLabel">Email</label>
                          </div>

                          <div className="formGroup">
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              className="formInput"
                              placeholder=" "
                              required
                            />
                            <label htmlFor="subject" className="formLabel">Subject</label>
                          </div>

                          <div className="formGroup">
                            <textarea
                              id="message"
                              name="message"
                              className="formTextarea"
                              rows="4"
                              placeholder=" "
                              required
                            ></textarea>
                            <label htmlFor="message" className="formLabel">Message</label>
                          </div>

                          <button type="submit" className="submitButton">
                            <span className="left">[</span>
                            <span className="innerText">SEND MESSAGE</span>
                            <span className="right">]</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col contactRight">
                    <div className="teamContactAccordion">
                      <div className="contactSection teamContactSection first" data-section="section-1" data-section-slug="main-contact-info">
                        <div
                          className="contactSectionHeader"
                          onClick={() => toggleSection('section-1')}
                          aria-expanded={activeSection === 'section-1'}
                          aria-controls="content-section-1"
                          id="header-section-1"
                        >
                          <span className="contactSectionIcon" aria-hidden="true"></span>
                          <h3 className="contactSectionTitle normalTitleSerif">MAIN CONTACT INFO</h3>
                        </div>
                        <div
                          className={`contactSectionContent ${activeSection === 'section-1' ? 'active' : ''}`}
                          data-content="section-1"
                          id="content-section-1"
                          role="region"
                          aria-labelledby="header-section-1"
                        >
                          <div className="contactSectionInner">
                            <div className="teamGroup">
                            </div>

                            {/* Company Info added below contact persons */}
                            <div className="companyInfoWrapper">
                              <div className="companyDetails">
                                <h4 className="companyName normalTitleSerif">SUGAR MEDIA</h4>
                                <div className="companyAddress">
                                  <p>21, Shyamdham Heights</p>
                                  <p>Near ring road</p>
                                  <p>Surat, Gujarat</p>
                                </div>
                              </div>

                              <div className="socialMediaWrapper">
                                <h5 className="socialMediaTitle smallTitle">FOLLOW US</h5>
                                <div className="socialMediaIcons">
                                  <a rel="noopener noreferrer" className="socialMediaIcon" title="Facebook" aria-label="Facebook">
                                    <svg className="socialMediaLogo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.09 5.66 21.26 10.44 22v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.62.77-1.62 1.55v1.87h2.76l-.44 2.9h-2.32V22C18.34 21.26 22 17.09 22 12.07z" />
                                    </svg>
                                    <span className="srOnly">Facebook</span>
                                  </a>
                                  <a rel="noopener noreferrer" className="socialMediaIcon" title="Instagram" aria-label="Instagram">
                                    <svg className="socialMediaLogo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
                                      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                      <path d="M17.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                    <span className="srOnly">Instagram</span>
                                  </a>
                                  <a rel="noopener noreferrer" className="socialMediaIcon" title="LinkedIn" aria-label="LinkedIn">
                                    <svg className="socialMediaLogo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.59 21 11 21 14.12V21h-4v-6.09c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.57-2.33 3.2V21H9V9z" />
                                    </svg>
                                    <span className="srOnly">LinkedIn</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Video Overlay */}
          <section className="videoOverlay fullscreenVideoOverlay" id="fullscreenVideoPlayer" style={{ display: 'none' }}>
            <div className="videoContainer">
              <div className="videoWrapper" data-index="fullscreen">
                <div className="image">
                  <div className="innerImage">
                    <video className="video-player" playsInline></video>
                  </div>
                  <div className="imageOverlay"></div>
                </div>
              </div>
              <div className="customControls">
                <div className="videoProgressWrapper">
                  <div className="videoProgressBar">
                    <div className="videoProgress"></div>
                    <div className="progressBall"></div>
                  </div>
                  <div className="cols">
                    <div className="col">
                      <div className="videoInfo">
                        <h2 className="videoTitle smallTitle"></h2>
                        <h3 className="videoDirector smallTitle"></h3>
                      </div>
                    </div>
                    <div className="col">
                      <div className="showTime">
                        <div className="time currentTime smallTitle">0:00</div>
                        <div className="time smallTitle">&nbsp;&nbsp;<i className="sparkIcon icon-logoSpark"></i>&nbsp;&nbsp;</div>
                        <div className="time durationTime smallTitle">0:00</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bottomControls">
                        <div className="control playPause pauseIcon buttonLink">
                          <div className="left" aria-hidden="true">[</div>
                          <div className="innerTextWrapper">
                            <div className="innerText">pause</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>pause</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>pause</div>
                          </div>
                          <div className="right" aria-hidden="true">]</div>
                        </div>
                        <div className="control playPause playIcon buttonLink">
                          <div className="left" aria-hidden="true">[</div>
                          <div className="innerTextWrapper">
                            <div className="innerText">play</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>play</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>play</div>
                          </div>
                          <div className="right" aria-hidden="true">]</div>
                        </div>
                        <div className="control setVolume volumeMuteIcon buttonLink">
                          <div className="left" aria-hidden="true">[</div>
                          <div className="innerTextWrapper">
                            <div className="innerText">sound off</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>sound off</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>sound off</div>
                          </div>
                          <div className="right" aria-hidden="true">]</div>
                        </div>
                        <div className="control setVolume volumeUnmuteIcon buttonLink">
                          <div className="left" aria-hidden="true">[</div>
                          <div className="innerTextWrapper">
                            <div className="innerText">sound on</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>sound on</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>sound on</div>
                          </div>
                          <div className="right" aria-hidden="true">]</div>
                        </div>
                        <div className="control exitFullScreenIcon buttonLink">
                          <div className="left" aria-hidden="true">[</div>
                          <div className="innerTextWrapper">
                            <div className="innerText">exit</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>exit</div>
                            <div className="absoluteText" data-aria-hidden="true" data-letters>exit</div>
                          </div>
                          <div className="right" aria-hidden="true">]</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="customVideoCursor">
                  <div className="controlMouse pauseIconMouse">
                    <i className="icon-pause"></i>
                    <div className="controlMouseText text">Pause</div>
                  </div>
                  <div className="controlMouse playIconMouse">
                    <i className="icon-play"></i>
                    <div className="controlMouseText text">Play</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
