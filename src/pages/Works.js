import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/Works.css';
import '../styles/About.css';
import Navbar from '../components/Navbar/Navbar';
import bgImage from '../media/photo/bg_image.jpeg';
import Video1 from '../media/video/p1.mp4';
import Video2 from '../media/video/p2.mp4';
import Thumbnail1 from '../media/video/thumbnail/p1.png';
import Thumbnail2 from '../media/video/thumbnail/p2.png';

const Works = () => {
  const [loader, setLoader] = useState(true)
  const videoRefs = useRef([]);
  const overlayRef = useRef(null);
  const overlayVideoRef = useRef(null);

  const worksData = useMemo(() => ([
    {
      title: 'Nokia Lumia 5.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video1,
      thumbnail: Thumbnail1,
      isFull: true
    },
    {
      title: 'Nokia Lumia 7.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video2,
      thumbnail: Thumbnail2,
      isFull: false
    },
    {
      title: 'Nokia Lumia 5.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video1,
      thumbnail: Thumbnail1,
      isFull: false
    },
    {
      title: 'Nokia Lumia 7.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video2,
      thumbnail: Thumbnail2,
      isFull: false
    },
    {
      title: 'Nokia Lumia 5.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video1,
      thumbnail: Thumbnail1,
      isFull: false
    },
    {
      title: 'Nokia Lumia 7.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video2,
      thumbnail: Thumbnail2,
      isFull: true
    },
    {
      title: 'Nokia Lumia 5.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video1,
      thumbnail: Thumbnail1,
      isFull: false
    },
    {
      title: 'Nokia Lumia 7.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video2,
      thumbnail: Thumbnail2,
      isFull: false
    },
    {
      title: 'Nokia Lumia 5.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video1,
      thumbnail: Thumbnail1,
      isFull: false
    },
    {
      title: 'Nokia Lumia 7.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video2,
      thumbnail: Thumbnail2,
      isFull: false
    },
    {
      title: 'Nokia Lumia 5.1',
      brand: 'Nokia',
      director: "Mobile Phone's Future",
      video: Video1,
      thumbnail: Thumbnail1,
      isFull: true
    }
  ]), []);

  useEffect(() => {
    document.documentElement.classList.remove('stopScroll', 'overflow', 'fadeOut');
    document.body.style.overflow = '';
  }, []);

  const closeOverlay = () => {
    const overlay = overlayRef.current;
    const overlayVideo = overlayVideoRef.current;
    if (!overlay || !overlayVideo) return;

    overlay.classList.remove('open');
    overlayVideo.pause();
    overlayVideo.removeAttribute('src');
    overlayVideo.load();
  };

  const openOverlay = (src) => {
    const overlay = overlayRef.current;
    const overlayVideo = overlayVideoRef.current;
    if (!overlay || !overlayVideo || !src) return;

    overlayVideo.src = src;
    overlay.classList.add('open');
    overlayVideo.play().catch(() => { });
  };

  const handleMouseEnter = (index) => {
    const wrapper = videoRefs.current[index];
    const video = wrapper?.querySelector?.('video');
    const src = worksData[index]?.video;
    if (!wrapper || !video || !src) return;

    if (!video.getAttribute('src')) {
      video.setAttribute('src', src);
      video.load();
    }
    wrapper.classList.add('is-playing');
    video.play().catch(() => { });
  };

  const handleMouseLeave = (index) => {
    const wrapper = videoRefs.current[index];
    const video = wrapper?.querySelector?.('video');
    if (!wrapper || !video) return;

    wrapper.classList.remove('is-playing');
    video.pause();
    if (video.getAttribute('src')) {
      video.removeAttribute('src');
      video.load();
    }
  };

  useEffect(() => {
    const overlay = overlayRef.current;

    const handleOverlayClick = (e) => {
      if (e.target === overlay) closeOverlay();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeOverlay();
    };

    overlay?.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      overlay?.removeEventListener('click', handleOverlayClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BoltLogo = () => (
    <svg className="video__logo" viewBox="0 0 131.4 101" xmlns="http://www.w3.org/2000/svg">
      <path className="st0" d="M94.4,26.6c-2-2-4.7-3.2-7.6-3.2h-42.1c-3,0-5.7,1.2-7.6,3.2-2,2-3.2,4.7-3.2,7.6v32.5c0,3,1.2,5.7,3.2,7.6,2,2,4.7,3.2,7.6,3.2h42.1c3,0,5.7-1.2,7.6-3.2,2-2,3.2-4.7,3.2-7.6v-32.5c0-3-1.2-5.7-3.2-7.6ZM74.9,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM44.4,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM46.5,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5ZM54.6,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM56.6,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5ZM65.7,62.8c-.4,0-1.7-5.9-2.2-6.9-2-3.7-6.7-4-10.2-5.2,3.4-1.2,7.5-1.4,9.7-4.6,1.7-2.4,1.4-5.3,2.7-7.8,1.2,3.2,1.3,7.4,4.4,9.6,2.3,1.7,4.6,1.6,7.1,2.3.4.1.8.1.9.7-2.8.9-6.3,1.1-8.5,3.2-2.4,2.2-2.6,5.9-3.8,8.8h-.1ZM76.9,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5ZM85,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM87,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5Z"></path>
    </svg>
  );

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
      <Navbar />

      <main className="page-wrap withSiteNav" style={{ background: "#0a0a0a" }}>
        <section className="category__container">
          <section className="aboutHeaderBlock" data-scroll-inview="" data-show-mouse="" data-mouse-color="white">
            <div className="videoWrapper sparkMask">
              <div className="innerImage">
                <picture>
                  <source className="lazy lazySrcSet"
                    src={bgImage}
                    sizes="(max-width: 580px) 400px, 800px" />
                  <img className="lazy"
                    src={bgImage}
                    width="800" height="496" alt="" />
                </picture>
              </div>
            </div>
            <div className="innerWrapper">
              <div className="aboutTitleWrapper left" data-scroll="">
                <h2 className="aboutTitleLeft bigTitle replaceFont" style={{ color: "#E8601A" }} data-anim-blur="" data-letters="" data-words="">
                  <span><strong>OUR</strong></span>
                </h2>
                <div className="aboutLine"></div>
                <div className="aboutPictureLeft" data-scroll=""></div>
              </div>
              <div className="aboutTitleWrapper right" data-scroll="">
                <div className="aboutLine"></div>
                <h2 className="aboutTitleRight bigTitle replaceFont workTitle" data-anim-blur="" data-letters="" data-words="">
                  <span>Works</span>
                </h2>
                <div className="aboutPictureRight" data-scroll=""></div>
              </div>
            </div>
          </section>

          <section className="category__gallery" style={{ margin: 0 }}>
            {worksData.map((work, index) => (
              <div
                key={index}
                ref={el => videoRefs.current[index] = el}
                className={`grid__item__wrapper ${work.isFull ? 'full' : 'double'}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onDoubleClick={(e) => {
                  e.preventDefault();
                  openOverlay(work.video);
                }}
              >
                <div className="grid__item__video__wrapper">
                  <video
                    className="grid__item__video"
                    muted
                    loop
                    playsInline
                    preload="none"
                  ></video>
                  <img
                    className="grid__item__video__poster"
                    src={work.thumbnail}
                    alt={work.title}
                  />
                  <div className={`grid__item__text__wrapper ${work.isFull ? 'full' : 'double'}`}>
                    <div className="grid__item__text__title__wrapper">
                      <h3>{work.title}</h3>
                      <p>{work.brand}</p>
                    </div>
                    <div className="grid__item__text__category__wrapper">
                      <BoltLogo />
                      <p className="grid__item__text__category__text">{work.director}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div className="category__top">
            <div
              className="top__wrapper"
              role="button"
              onClick={scrollToTop}
              aria-label="Go to top"
            >
              <p className="top__text">Go to top</p>
            </div>
          </div>
        </section>
      </main>

      <div id="video-overlay" ref={overlayRef}>
        <button className="close-btn" type="button" aria-label="Close" onClick={closeOverlay}>&times;</button>
        <video id="overlay-video" ref={overlayVideoRef} controls playsInline></video>
      </div>
    </>
  );
};

export default Works;
