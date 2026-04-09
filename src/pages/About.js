import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Footer from './Footer';
import Navbar from '../components/Navbar/Navbar';
import aboutUsImage from '../media/photo/about_us.jpeg';
import bgImage from '../media/photo/bg_image.jpeg';
import teamImage1 from '../media/photo/team1.jpg';
import teamImage2 from '../media/photo/team2.jpg';
import teamImage3 from '../media/photo/team3.jpg';
import Video1 from '../media/video/p1.mp4';
import Cards from './Cards';

const About = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/CustomEase.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js'),

    ]).then(() => {
      console.log('GSAP loaded');
    }).catch(err => console.warn('Failed to load scripts', err));

  }, []);

  return (
    <div className="about-page">
      <Navbar />

      <div className="content withSiteNav">

        {/* Intro Animation */}
        <div className="introAnim">
          <div className="introWrapper">
            <div className="introSparkText introText">
              <svg id="sparkText" viewBox="2.7 5.3 204.73 70.19">
                <g>
                  <path id="S" d="M18.15,5.4c5.2,0,9.03,1.55,11.5,4.66,2.47,3.11,3.7,7.27,3.7,12.5v1.86h-7.21v-2.25c0-3.14-.62-5.55-1.85-7.25-1.23-1.7-3.22-2.55-5.94-2.55-2.73,0-4.71.85-5.95,2.55-1.23,1.7-1.85,4.09-1.85,7.16,0,2.55.57,4.77,1.71,6.67,1.14,1.9,2.55,3.64,4.24,5.25,1.69,1.6,3.52,3.17,5.51,4.71,1.98,1.54,3.82,3.22,5.51,5.05,1.69,1.83,3.1,3.91,4.24,6.23,1.14,2.32,1.71,5.08,1.71,8.28,0,5.23-1.25,9.4-3.75,12.5-2.5,3.1-6.38,4.66-11.65,4.66s-9.13-1.55-11.6-4.66c-2.47-3.1-3.7-7.27-3.7-12.5v-3.92h7.11v4.31c0,3.14.65,5.56,1.95,7.25,1.3,1.7,3.31,2.55,6.04,2.55s4.74-.85,6.04-2.55c1.3-1.7,1.95-4.12,1.95-7.25,0-2.55-.57-4.76-1.71-6.62-1.14-1.86-2.55-3.59-4.24-5.2-1.69-1.6-3.51-3.17-5.46-4.71-1.95-1.53-3.77-3.22-5.46-5.05-1.69-1.83-3.1-3.9-4.24-6.23-1.14-2.32-1.71-5.08-1.71-8.29,0-5.29,1.23-9.48,3.7-12.55,2.47-3.07,6.27-4.61,11.4-4.61Z"></path>
                </g>
                <g>
                  <path id="P" d="M72.04,10.54c-2.4-2.97-6.3-4.46-11.7-4.46h-14.91v68.63h7.61v-27.06h6.72c5.46,0,9.47-1.39,12.04-4.17,2.56-2.78,3.85-6.91,3.85-12.4v-8.24c0-5.22-1.21-9.33-3.61-12.3ZM68.14,31.57c0,3.33-.68,5.7-2.05,7.11-1.36,1.4-3.47,2.1-6.33,2.1h-6.72V13.04h7.3c2.8,0,4.8.78,6,2.35,1.2,1.57,1.8,3.92,1.8,7.06v9.12Z"></path>
                </g>
                <g>
                  <path id="A" d="M104.95,6.08h-11.01l-13.06,68.63h7.02l2.63-13.83h17.25l2.63,13.83h7.6L104.95,6.08ZM91.5,54.31l7.51-39.6,7.7,39.6h-15.21Z"></path>
                </g>
                <g>
                  <path id="R" d="M160.65,70.83c-.13-1.4-.2-2.85-.2-4.36v-10.69c0-3.72-.65-6.81-1.94-9.26-1.31-2.45-3.51-4.13-6.63-5.05,2.92-.91,5.07-2.55,6.43-4.9,1.37-2.35,2.05-5.42,2.05-9.22v-5.58c0-5.1-1.19-8.99-3.56-11.67s-6.25-4.02-11.65-4.02h-15.2v68.63h7.6v-29.32h5.36c3.18,0,5.64.74,7.36,2.21,1.72,1.47,2.58,4.13,2.58,7.99v10.78c0,2.29.1,4.01.29,5.15.2,1.14.52,2.21.98,3.19h7.7c-.65-1.18-1.04-2.47-1.17-3.88ZM150.32,36.52c-1.69,1.27-4.06,1.91-7.12,1.91h-5.65V13.04h7.41c2.86,0,4.89.78,6.09,2.35,1.2,1.57,1.8,3.92,1.8,7.06v6.57c0,3.72-.84,6.22-2.53,7.5Z"></path>
                </g>
                <g>
                  <polygon id="K" points="181.31 39.22 199.44 6.08 207.14 6.08 189.89 37.36 207.73 74.71 199.93 74.71 185.31 44.91 181.31 51.67 181.31 74.71 173.71 74.71 173.71 6.08 181.31 6.08 181.31 39.22"></polygon>
                </g>
              </svg>
            </div>
            <div className="sparkLogoWrapper introText">
              <svg id="sparkLogo" viewBox="0 0 58.9 80.79">
                <path d="M0,50.84h31.35l-6.65,29.96,34.2-48.11H24.7L36.1,0,0,50.84Z"></path>
                <path className="cls-1" d="M0,50.84h31.35l-6.65,29.96,34.2-48.11H24.7L36.1,0,0,50.84Z"></path>
              </svg>
            </div>
            <div className="introRiotText introText">
              <svg id="riotText" viewBox="0 5.3 142.43 70.19">
                <g>
                  <path id="R" d="M30.7,70.83c-.13-1.4-.2-2.85-.2-4.36v-10.68c0-3.73-.65-6.82-1.95-9.27-1.3-2.45-3.51-4.13-6.63-5.05,2.93-.91,5.07-2.55,6.44-4.9,1.36-2.35,2.04-5.42,2.04-9.22v-5.58c0-5.1-1.18-8.99-3.55-11.67-2.38-2.68-6.26-4.02-11.65-4.02H0v68.63h7.6v-29.32h5.36c3.18,0,5.64.74,7.36,2.21,1.72,1.47,2.58,4.13,2.58,7.99v10.78c0,2.29.1,4.01.29,5.15.2,1.15.52,2.21.98,3.19h7.7c-.65-1.18-1.04-2.47-1.17-3.88ZM20.37,36.52c-1.69,1.28-4.07,1.91-7.12,1.91h-5.65V13.04h7.41c2.85,0,4.88.79,6.09,2.35,1.2,1.57,1.8,3.93,1.8,7.06v6.57c0,3.73-.85,6.23-2.53,7.5Z"></path>
                </g>
                <g>
                  <rect id="I" x="43.75" y="6.08" width="7.6" height="68.63"></rect>
                </g>
                <g>
                  <path id="O" d="M91.32,10.06c-2.6-3.1-6.53-4.66-11.8-4.66s-9.18,1.56-11.74,4.66c-2.57,3.11-3.85,7.3-3.85,12.6v35.49c0,5.23,1.28,9.41,3.85,12.55,2.56,3.14,6.48,4.7,11.74,4.7s9.2-1.56,11.8-4.7c2.59-3.14,3.89-7.32,3.89-12.55V22.66c0-5.3-1.3-9.49-3.89-12.6ZM87.61,58.54c0,3.14-.65,5.57-1.95,7.31-1.3,1.73-3.34,2.59-6.14,2.59s-4.76-.86-6.09-2.59c-1.33-1.74-2-4.17-2-7.31V22.27c0-3.14.67-5.57,2-7.31,1.33-1.73,3.36-2.59,6.09-2.59s4.84.86,6.14,2.59c1.3,1.74,1.95,4.17,1.95,7.31v36.27Z"></path>
                </g>
                <g>
                  <polygon id="T" points="136.64 13.04 124.07 13.04 124.07 74.71 116.47 74.71 116.47 13.04 103.9 13.04 103.9 6.08 136.64 6.08 136.64 13.04"></polygon>
                </g>
                <g>
                  <circle id="Dot" cx="138.76" cy="71.21" r="3.5"></circle>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div id="pageContainer" className="transition-fade">
          <div className="blocks">
            {/* About Header Block */}
            <section className="aboutHeaderBlock" data-scroll-inview="" data-show-mouse="" data-mouse-color="white">
              <div className="videoWrapper sparkMask">
                <div className="innerImage">
                  <picture>
                    <source className="lazy lazySrcSet"
                      src={bgImage}
                      // data-srcset="https://www.sparkandriot.com/thumbs/400x300/@0.5x0.5/gfx/about/Altos_Tequila_Olmeca_Still_4_2.png 400w, https://www.sparkandriot.com/thumbs/800x800/@0.5x0.5/gfx/about/Altos_Tequila_Olmeca_Still_4_2.png 800w"
                      sizes="(max-width: 580px) 400px, 800px" />
                    <img className="lazy"
                      src={bgImage}
                      // data-src="https://www.sparkandriot.com/thumbs/800x800/@0.5x0.5/gfx/about/Altos_Tequila_Olmeca_Still_4_2.png"
                      width="800" height="496" alt="" />
                  </picture>
                </div>
              </div>
              <div className="innerWrapper">
                <div className="aboutTitleWrapper left" data-scroll="">
                  <h2 className="aboutTitleLeft bigTitle replaceFont" style={{ color: "#E8601A" }} data-anim-blur="" data-letters="" data-words="">
                    <span><strong>We ARE</strong></span>
                  </h2>
                  <div className="aboutLine"></div>
                  <div className="aboutPictureLeft" data-scroll=""></div>
                </div>
                <div className="aboutTitleWrapper right" data-scroll="">
                  <div className="aboutLine"></div>
                  <h2 className="aboutTitleRight bigTitle replaceFont" data-anim-blur="" data-letters="" data-words="">
                    SUGAR MEDIA
                  </h2>
                  <div className="aboutPictureRight" data-scroll=""></div>
                </div>
              </div>
            </section>

            {/* Impact Block */}
            <section className="impactBlock" data-scroll-inview="">
              <div className="innerWrapper">
                <div className="impactTaglineWrapper">
                  <div className="impactSubTitle subTitle">our mission</div>
                  <div className="impactTagline"></div>
                </div>
                <div className="impactContentWrapper centered">
                  <div className="impactTextWrapper">
                    <div className="impactText normalTitleSans" data-anim-blur-words="" data-words="">
                      <p>At Sugar Media, we craft <strong>compelling advertising that blends creativity, strategy, and visual impact</strong>. We <strong>push creative boundaries, bring bold ideas to life</strong>, and collaborate with <strong>brands and filmmakers</strong> to create campaigns that leave a lasting impression.</p>

                      {/* <p>At Spark &amp; Riot, we push <strong>creative boundaries, champion bold
                        storytelling</strong>, and <strong>empower directors</strong> to build
                        meaningful, lasting careers.&nbsp;</p> */}
                      <p>&nbsp;</p>
                      {/* <p>Blending top-tier American production with a global perspective, we foster
                        talent, maintain <strong>high creative standards,</strong> and give back to the
                        community, shaping the industry for the better, one production at a time.</p> */}
                    </div>
                  </div>
                  <div className="impactVideo fullWidth">
                    <div className="videoWrapper" data-blur-image="">
                      <div className="image">
                        <div className="innerImage">
                          <picture>
                            <source className="lazy lazySrcSet"
                              src={bgImage}
                              // data-srcset="https://www.sparkandriot.com/thumbs/650x450/@0.5x0.5/gfx/about/Altos_Tequila_Olmeca_Still_4_2.png 650w, https://www.sparkandriot.com/thumbs/1100x745/@0.5x0.5/gfx/about/Altos_Tequila_Olmeca_Still_4_2.png 1100w"
                              sizes="(max-width: 580px) 650px, 1100px" />
                            <img className="lazy"
                              src={bgImage}
                              // data-src="https://www.sparkandriot.com/thumbs/1100x745/@0.5x0.5/gfx/about/Altos_Tequila_Olmeca_Still_4_2.png"
                              width="1100" height="682" alt="our mission" />
                          </picture>
                        </div>
                        <div className="imageOverlay"></div>
                        <div className="blur top"></div>
                        <div className="blur bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Image Text Grid Block */}
            <section className="imageTextGridBlock inview" data-scroll-inview="">
              <div className="aboutTextWrapper">
                <div className="aboutTopWrapper">
                  <div className="aboutSubtitle subTitle">about us</div>
                  <div className="aboutTextTop normalTitleSans" data-anim-blur-words="" data-words="">
                    <p>Crafting st<em>o</em>ries <strong>that m<em>o</em>ve brands</strong></p>

                    {/* <p>The studio for&nbsp;<strong>b<em>o</em>ld new voic<em>e</em>s</strong></p> */}
                  </div>
                </div>

                <div className="aboutBottomWrapper">
                  <div className="aboutTextBottomWrapper" data-scroll="" data-scroll-speed="1">
                    <div className="aboutTextBottom">
                      {/* <p>Spark &amp; Riot is a female-founded, creatively-driven, commercial production
                        house and film &amp; television studio. We believe great things happen when
                        talent meets purpose. We take pride in exceptional execution, with our
                        directors&rsquo; creative vision leading every step of the way.&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>With a track record of award-winning work, meaningful collaborations, and a drive
                        to innovate, Spark &amp; Riot is growing with intention in an ever-evolving
                        media landscape. We&rsquo;re not just producing content, we&rsquo;re building a
                        global entertainment brand. Whether it&rsquo;s a commercial or long-form
                        storytelling, our mission is the same: create, collaborate, and leave a lasting
                        impact. One production at a time.</p> */}
                      <p>Sugar Media is a creatively driven advertising and production studio focused on crafting impactful stories for modern brands. We believe great advertising happens when bold ideas meet purposeful execution.</p>
                      <br />
                      <p>Through strong creative vision, meaningful collaborations, and innovative storytelling, we create commercials and branded content that connect with audiences and leave a lasting impact.</p>

                    </div>
                  </div>
                  <div className="aboutImage">
                    <div className="imageWrapper" data-blur-image="">
                      <div className="innerImage">
                        <picture>
                          <source className="lazy lazySrcSet"
                            src={aboutUsImage}
                            // data-srcset="https://www.sparkandriot.com/thumbs/650x450/@0.44x0.41/gfx/Stills/Nalle/Screenshot_2025_07_02_at_11-55-30%E2%80%AFAM.png 650w, https://www.sparkandriot.com/thumbs/1100x1100/@0.44x0.41/gfx/Stills/Nalle/Screenshot_2025_07_02_at_11-55-30%E2%80%AFAM.png 1100w"
                            sizes="(max-width: 580px) 650px, 1100px" />
                          <img className="lazy"
                            // data-src="https://www.sparkandriot.com/thumbs/1100x1100/@0.44x0.41/gfx/Stills/Nalle/Screenshot_2025_07_02_at_11-55-30%E2%80%AFAM.png"
                            src={aboutUsImage}
                            width="1100" height="836" alt="" />
                        </picture>
                      </div>
                      <div className="blur top"></div>
                      <div className="blur bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* Our Services Block */}
            <section className="impactBlock" data-scroll-inview="">
              <div className="innerWrapper">
                <div className="impactTaglineWrapper">
                  <div className="impactSubTitle subTitle">our services</div>
                  <div className="impactTagline"></div>
                </div>
                <Cards />
              </div>
            </section>

            {/* Team Overview Block */}
            <section className="teamOverviewBlock" data-scroll-inview="" data-background-color="dark">
              <div className="teamOverviewHeader">
                <div className="blockTitle">
                  <h2 className="titleText subTitle">our team</h2>
                </div>
                <div className="line" data-line=""></div>
              </div>
              <div className="teamOverviewContainer" data-slides="3">
                <div className="sticky">
                  <div className="cols">
                    <div className="col">
                      <div className="teamHeaderSlider">
                        <div className="slide active">
                          <h2 className="memberName normalTitleSerif primary" data-letters="">
                            <i>A</i>N<i>A</i> DE DIEG<i>O</i>
                          </h2>
                          <h3 className="memberTitle normalTitleSerif">F<i>O</i>UNDER</h3>
                        </div>
                        <div className="slide">
                          <h2 className="memberName normalTitleSerif primary" data-letters="">SUMMER
                            GRIFFITHS</h2>
                          <h3 className="memberTitle normalTitleSerif">EXECUTIVE PR<i>O</i>DUCER</h3>
                        </div>
                        <div className="slide">
                          <h2 className="memberName normalTitleSerif primary" data-letters="">
                            <i>O</i>LIVI<i>A</i> DE L<i>A</i>M<i>A</i>DRID
                          </h2>
                          <h3 className="memberTitle normalTitleSerif">CRE<i>A</i>TIVE
                            C<i>O</i><i>O</i>RDIN<i>A</i>T<i>O</i>R</h3>
                        </div>
                      </div>
                      <div className="personalSlider">
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Spirit animal</span>
                              <span className="personalValue">Golden retriever</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Spirit animal</span>
                              <span className="personalValue">Octopus</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Spirit animal</span>
                              <span className="personalValue">Red panda</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Go-to karaoke</span>
                              <span className="personalValue">"Love Story" - Taylor Swift</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Go-to karaoke</span>
                              <span className="personalValue">"I Wanna Dance With Somebody" - Whitney Houston</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Go-to karaoke</span>
                              <span className="personalValue">"Bohemian Rhapsody" - Queen</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Guilty pleasure</span>
                              <span className="personalValue">Reality TV marathons</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Guilty pleasure</span>
                              <span className="personalValue">Eating dessert for breakfast</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Guilty pleasure</span>
                              <span className="personalValue">Online shopping at 2am</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Dream vacation</span>
                              <span className="personalValue">Skiing in Switzerland</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Dream vacation</span>
                              <span className="personalValue">Beach hopping in Greece</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Dream vacation</span>
                              <span className="personalValue">Safari in Kenya</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Coffee order</span>
                              <span className="personalValue">Vanilla oat milk latte</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Coffee order</span>
                              <span className="personalValue">Caramel frappuccino</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Coffee order</span>
                              <span className="personalValue">Black cold brew</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Hidden talent</span>
                              <span className="personalValue">Can recite the periodic table</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Hidden talent</span>
                              <span className="personalValue">Double-jointed thumbs</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Hidden talent</span>
                              <span className="personalValue">Can lick my elbow</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <div className="personalSlider">
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Favorite film</span>
                              <span className="personalValue">Harold and Maude</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Favorite film</span>
                              <span className="personalValue">You’ve Got Mail</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Favorite film</span>
                              <span className="personalValue">Black Swan</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Best baddie</span>
                              <span className="personalValue">White Chicks</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Best baddie</span>
                              <span className="personalValue">The Disaster Artist</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Best baddie</span>
                              <span className="personalValue">Bridesmaids</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Always listening</span>
                              <span className="personalValue">Jim Croce</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Always listening</span>
                              <span className="personalValue">Fred Again</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Always listening</span>
                              <span className="personalValue">Mazzy Star</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Greatest movie death</span>
                              <span className="personalValue">Vizzini, The Princess Bride</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Greatest movie death</span>
                              <span className="personalValue">Wilson, Castaway</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Greatest movie death</span>
                              <span className="personalValue">O-Ren Ishii</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Secretly bad at</span>
                              <span className="personalValue">Knowing the number of days in a month</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Secretly bad at</span>
                              <span className="personalValue">Staying awake during movies</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Secretly bad at</span>
                              <span className="personalValue">Parallel parking</span>
                            </span>
                          </div>
                        </div>
                        <div className="personalItem">
                          <div className="innerItems">
                            <span className="innerItem active" data-index="1">
                              <span className="personalLabel">Cartoon crush</span>
                              <span className="personalValue">Tintin</span>
                            </span>
                            <span className="innerItem" data-index="2">
                              <span className="personalLabel">Cartoon crush</span>
                              <span className="personalValue">Anastasia</span>
                            </span>
                            <span className="innerItem" data-index="3">
                              <span className="personalLabel">Cartoon crush</span>
                              <span className="personalValue">Lola Bunny</span>
                            </span>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col">
                      <div className="teamImageSlider">
                        <div className="memberImageWrapper">
                          <div className="memberImage">
                            <picture className="teamMemberPhoto">
                              <source className="lazy lazySrcSet"
                                src={teamImage1}
                                // data-srcset="https://www.sparkandriot.com/thumbs/400x500/@0.51x0.29/gfx/Ana_De_Diego.png 400w, https://www.sparkandriot.com/thumbs/700x900/@0.51x0.29/gfx/Ana_De_Diego.png 700w"
                                sizes="(max-width: 580px) 400px, 700px" />
                              <img className="lazy teamMemberPhoto"
                                src={teamImage1}
                                // data-src="https://www.sparkandriot.com/thumbs/700x900/@0.51x0.29/gfx/Ana_De_Diego.png"
                                width="700" height="889" alt="Ana De Diego" />
                            </picture>
                          </div>
                        </div>
                        <div className="memberImageWrapper">
                          <div className="memberImage">
                            <picture className="teamMemberPhoto">
                              <source className="lazy lazySrcSet"
                                src={teamImage2}
                                // data-srcset="https://www.sparkandriot.com/thumbs/400x500/@0.5x0.5/gfx/Headshots/SparkandRiot_Portraits_EmmaBilmes_14.jpg 400w, https://www.sparkandriot.com/thumbs/700x900/@0.5x0.5/gfx/Headshots/SparkandRiot_Portraits_EmmaBilmes_14.jpg 700w"
                                sizes="(max-width: 580px) 400px, 700px" />
                              <img className="lazy teamMemberPhoto"
                                src={teamImage2}
                                // data-src="https://www.sparkandriot.com/thumbs/700x900/@0.5x0.5/gfx/Headshots/SparkandRiot_Portraits_EmmaBilmes_14.jpg"
                                width="700" height="700" alt="Summer Griffiths" />
                            </picture>
                          </div>
                        </div>
                        <div className="memberImageWrapper">
                          <div className="memberImage">
                            <picture className="teamMemberPhoto">
                              <source className="lazy lazySrcSet"
                                src={teamImage3}
                                // data-srcset="https://www.sparkandriot.com/thumbs/400x500/@0.53x0.55/gfx/Headshots/_SparkandRiot_Portraits_EmmaBilmes_1.jpg 400w, https://www.sparkandriot.com/thumbs/700x900/@0.53x0.55/gfx/Headshots/_SparkandRiot_Portraits_EmmaBilmes_1.jpg 700w"
                                sizes="(max-width: 580px) 400px, 700px" />
                              <img className="lazy teamMemberPhoto"
                                src={teamImage3}
                                // data-src="https://www.sparkandriot.com/thumbs/700x900/@0.53x0.55/gfx/Headshots/_SparkandRiot_Portraits_EmmaBilmes_1.jpg"
                                width="700" height="1050" alt="" />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="descriptionSlider">
                        <div className="slide active">
                          <div className="memberDescription">
                            <p>Ana spent 16 years making standout work for brands like Apple, Adobe,
                              and Sony. She&rsquo;s got a sharp eye for fluff and a soft spot for
                              the real stuff.&nbsp;</p>
                            <p>She helps brands cut through the noise by finding their real voice
                              &mdash; not the one chasing trends, but the one that sticks.&nbsp;
                            </p>
                            <p>Honest. Bold. Unforgettable.</p>
                          </div>
                        </div>
                        <div className="slide">
                          <div className="memberDescription">
                            <p>Summer is an Emmy nominated Executive Producer with 10 years of
                              experience across TV, docs, podcasts, and branded content.
                              She&rsquo;s led original storytelling for brands like Snapchat,
                              Google, L&rsquo;Oreal and built her career under industry leaders
                              like Bunim Murray.</p>
                            <p>Summer blends storytelling with impact, pairing brands with talent to
                              create work that&rsquo;s inclusive, intentional, and built for
                              everyone.</p>
                          </div>
                        </div>
                        <div className="slide">
                          <div className="memberDescription">
                            <p>Olivia is a rising creative force with a sharp instinct for
                              storytelling that resonates. Since her early years in film school,
                              she&rsquo;s been immersed in purpose-led content. Olivia brings
                              agility and heart to every project.&nbsp;</p>
                            <p>At Spark &amp; Riot, she bridges creative and logistics, helping
                              campaigns come to life with clarity and impact.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Items */}
              <div className="mobileItems" style={{ display: 'none' }}>
                <div className="mobileItem">
                  <div className="memberName normalTitleSerif primary" data-letters="" aria-hidden="true">
                    <i>A</i>N<i>A</i> DE DIEG<i>O</i>
                  </div>
                  <div className="memberTitle normalTitleSerif" aria-hidden="true">F<i>O</i>UNDER</div>
                  <div className="memberImageWrapper">
                    <div className="memberImage">
                      <picture className="teamMemberPhoto">
                        <source className="lazy lazySrcSet"
                          // data-srcset="https://www.sparkandriot.com/thumbs/400x500/@0.51x0.29/gfx/Ana_De_Diego.png 400w"
                          src={teamImage1}
                          sizes="400px" />
                        <img className="lazy teamMemberPhoto"
                          src={teamImage1}
                          // data-src="https://www.sparkandriot.com/thumbs/400x500/@0.51x0.29/gfx/Ana_De_Diego.png"
                          width="400"
                          height="508" alt="Ana De Diego" />
                      </picture>
                    </div>
                  </div>
                  <div className="memberDescription" aria-hidden="true">
                    <p>Ana spent 16 years making standout work for brands like Apple, Adobe, and Sony.
                      She&rsquo;s got a sharp eye for fluff and a soft spot for the real stuff.&nbsp;</p>
                    <p>She helps brands cut through the noise by finding their real voice &mdash; not the
                      one chasing trends, but the one that sticks.&nbsp;</p>
                    <p>Honest. Bold. Unforgettable.</p>
                  </div>
                  <div className="personalItems">
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Favorite film</span>
                      <span className="personalValue" aria-hidden="true">Harold and Maude</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Best baddie</span>
                      <span className="personalValue" aria-hidden="true">White Chicks</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Always listening</span>
                      <span className="personalValue" aria-hidden="true">Jim Croce</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Greatest movie death</span>
                      <span className="personalValue" aria-hidden="true">Vizzini, The Princess Bride</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Secretly bad at</span>
                      <span className="personalValue" aria-hidden="true">Knowing the number of days in a month</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Cartoon crush</span>
                      <span className="personalValue" aria-hidden="true">Tintin</span>
                    </div>
                  </div>
                </div>
                <div className="mobileItem">
                  <div className="memberName normalTitleSerif primary" data-letters="" aria-hidden="true">
                    SUMMER GRIFFITHS
                  </div>
                  <div className="memberTitle normalTitleSerif" aria-hidden="true">EXECUTIVE PR<i>O</i>DUCER</div>
                  <div className="memberImageWrapper">
                    <div className="memberImage">
                      <picture className="teamMemberPhoto">
                        <source className="lazy lazySrcSet"
                          src={teamImage2}
                          // data-srcset="https://www.sparkandriot.com/thumbs/400x500/@0.5x0.5/gfx/Headshots/SparkandRiot_Portraits_EmmaBilmes_14.jpg 400w"
                          sizes="400px" />
                        <img className="lazy teamMemberPhoto"
                          src={teamImage2}
                          // data-src="https://www.sparkandriot.com/thumbs/400x500/@0.5x0.5/gfx/Headshots/SparkandRiot_Portraits_EmmaBilmes_14.jpg"
                          width="400" height="400" alt="Summer Griffiths" />
                      </picture>
                    </div>
                  </div>
                  <div className="memberDescription" aria-hidden="true">
                    <p>Summer is an Emmy nominated Executive Producer with 10 years of experience across TV,
                      docs, podcasts, and branded content. She&rsquo;s led original storytelling for
                      brands like Snapchat, Google, L&rsquo;Oreal and built her career under industry
                      leaders like Bunim Murray.</p>
                    <p>Summer blends storytelling with impact, pairing brands with talent to create work
                      that&rsquo;s inclusive, intentional, and built for everyone.</p>
                  </div>
                  <div className="personalItems">
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Favorite film</span>
                      <span className="personalValue" aria-hidden="true">You’ve Got Mail</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Best baddie</span>
                      <span className="personalValue" aria-hidden="true">The Disaster Artist</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Always listening</span>
                      <span className="personalValue" aria-hidden="true">Fred Again</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Greatest movie death</span>
                      <span className="personalValue" aria-hidden="true">Wilson, Castaway</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Secretly bad at</span>
                      <span className="personalValue" aria-hidden="true">Staying awake during movies</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Cartoon crush</span>
                      <span className="personalValue" aria-hidden="true">Anastasia</span>
                    </div>
                  </div>
                </div>
                <div className="mobileItem">
                  <div className="memberName normalTitleSerif primary" data-letters="" aria-hidden="true">
                    <i>O</i>LIVI<i>A</i> DE L<i>A</i>M<i>A</i>DRID
                  </div>
                  <div className="memberTitle normalTitleSerif" aria-hidden="true">
                    CRE<i>A</i>TIVE C<i>O</i><i>O</i>RDIN<i>A</i>T<i>O</i>R
                  </div>
                  <div className="memberImageWrapper">
                    <div className="memberImage">
                      <picture className="teamMemberPhoto">
                        <source className="lazy lazySrcSet"
                          src={teamImage3}
                          // data-srcset="https://www.sparkandriot.com/thumbs/400x500/@0.53x0.55/gfx/Headshots/_SparkandRiot_Portraits_EmmaBilmes_1.jpg 400w"
                          sizes="400px" />
                        <img className="lazy teamMemberPhoto"
                          src={teamImage3}
                          // data-src="https://www.sparkandriot.com/thumbs/400x500/@0.53x0.55/gfx/Headshots/_SparkandRiot_Portraits_EmmaBilmes_1.jpg"
                          width="400" height="600" alt="" />
                      </picture>
                    </div>
                  </div>
                  <div className="memberDescription" aria-hidden="true">
                    <p>Olivia is a rising creative force with a sharp instinct for storytelling that
                      resonates. Since her early years in film school, she&rsquo;s been immersed in
                      purpose-led content. Olivia brings agility and heart to every project.&nbsp;</p>
                    <p>At Spark &amp; Riot, she bridges creative and logistics, helping campaigns come to
                      life with clarity and impact.</p>
                  </div>
                  <div className="personalItems">
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Favorite film</span>
                      <span className="personalValue" aria-hidden="true">Black Swan</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Best baddie</span>
                      <span className="personalValue" aria-hidden="true">Bridesmaids</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Always listening</span>
                      <span className="personalValue" aria-hidden="true">Mazzy Star</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Greatest movie death</span>
                      <span className="personalValue" aria-hidden="true">O-Ren Ishii</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Secretly bad at</span>
                      <span className="personalValue" aria-hidden="true">Parallel parking</span>
                    </div>
                    <div className="personalItem">
                      <span className="personalLabel" aria-hidden="true">Cartoon crush</span>
                      <span className="personalValue" aria-hidden="true">Lola Bunny</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line hideMobile" data-line=""></div>
            </section>

            {/* CTA Block */}
            <section className="ctaBlock">
              <div className="innerWrapper">
                <div className="ctaContent">
                  <div className="ctaTitleTop bigTitle replaceFont" data-anim-blur="" data-letters="">
                    <p>Let&rsquo;s</p>
                  </div>
                  <div className="ctaVideoWrapper">
                    <div className="ctaLine"></div>
                    <div className="videoWrapper">
                      <div className="image">
                        <div className="innerImage">
                          <video className="video-player" playsInline muted autoPlay loop preload="metadata"
                            data-video-desktop={Video1}
                            data-video-mobile={Video1}
                            data-autoplay="true" data-loop="true" data-muted="true"
                            data-background="true" data-scroll-video="">
                            <source src={Video1} type="video/mp4" />
                          </video>
                        </div>
                        <div className="ctaButton">
                          <Link className="button" to="/contact" title="contact us">
                            <div className="left" aria-hidden="true">[</div>
                            <div className="innerTextWrapper">
                              <div className="innerText">contact us</div>
                              <div className="absoluteText" data-aria-hidden="true" data-letters="">contact us</div>
                              <div className="absoluteText" data-aria-hidden="true" data-letters="">contact us</div>
                            </div>
                            <div className="right" aria-hidden="true">]</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="ctaLine"></div>
                  </div>
                  <div className="ctaTitleBottom bigTitle replaceFont" data-anim-blur="" data-letters="">
                    <p><strong>Connect</strong></p>
                  </div>
                  <div className="ctaSubtitle" data-words="">It starts with a spark.</div>
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </div>

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
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">pause</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">pause</div>
                        </div>
                        <div className="right" aria-hidden="true">]</div>
                      </div>
                      <div className="control playPause playIcon buttonLink">
                        <div className="left" aria-hidden="true">[</div>
                        <div className="innerTextWrapper">
                          <div className="innerText">play</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">play</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">play</div>
                        </div>
                        <div className="right" aria-hidden="true">]</div>
                      </div>
                      <div className="control setVolume volumeMuteIcon buttonLink">
                        <div className="left" aria-hidden="true">[</div>
                        <div className="innerTextWrapper">
                          <div className="innerText">sound off</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">sound off</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">sound off</div>
                        </div>
                        <div className="right" aria-hidden="true">]</div>
                      </div>
                      <div className="control setVolume volumeUnmuteIcon buttonLink">
                        <div className="left" aria-hidden="true">[</div>
                        <div className="innerTextWrapper">
                          <div className="innerText">sound on</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">sound on</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">sound on</div>
                        </div>
                        <div className="right" aria-hidden="true">]</div>
                      </div>
                      <div className="control exitFullScreenIcon buttonLink">
                        <div className="left" aria-hidden="true">[</div>
                        <div className="innerTextWrapper">
                          <div className="innerText">exit</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">exit</div>
                          <div className="absoluteText" data-aria-hidden="true" data-letters="">exit</div>
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
  );
};

export default About;
