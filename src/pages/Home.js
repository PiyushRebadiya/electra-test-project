import React, { useEffect, useRef, useState } from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar/Navbar';
import Video1 from '../media/video/p1.mp4';
import Video2 from '../media/video/p2.mp4';
import loaderImage from '../media/gif/loader.gif';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loader, setLoader] = useState(true);
  const [progressReady, setProgressReady] = useState(false);

  const timerRef = useRef(null);
  const progressRaf1Ref = useRef(null);
  const progressRaf2Ref = useRef(null);
  const activeVideoRef = useRef(null);

  const INTERVAL = 6000;

  const slides = [
    { video: Video1 },
    { video: Video2 },
    { video: Video1 },
    { video: Video2 },
    { video: Video1 },
    { video: Video2 },
    { video: Video1 },
    { video: Video2 },
  ];

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loader) return;

    setProgressReady(false);
    progressRaf1Ref.current = requestAnimationFrame(() => {
      progressRaf2Ref.current = requestAnimationFrame(() => {
        setProgressReady(true);
      });
    });

    return () => {
      if (progressRaf1Ref.current) cancelAnimationFrame(progressRaf1Ref.current);
      if (progressRaf2Ref.current) cancelAnimationFrame(progressRaf2Ref.current);
    };
  }, [currentSlide, loader]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoader(false), 2800);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (loader) return;
    const videoEl = activeVideoRef.current;
    if (!videoEl) return;

    // Autoplay can be blocked in some browsers; best-effort only.
    const maybePromise = videoEl.play();
    if (maybePromise && typeof maybePromise.catch === 'function') {
      maybePromise.catch(() => {});
    }
  }, [currentSlide, loader]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
  };

  const goToSlide = (index, userClick = false) => {
    if (index === currentSlide && !userClick) return;

    const overlay = document.getElementById('transition-overlay');
    overlay?.classList.add('flash');
    setTimeout(() => overlay?.classList.remove('flash'), 400);

    setCurrentSlide(index);
    startTimer();
  };

  const handlePrevSlide = () => {
    const nextIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(nextIndex, true);
  };

  const handleNextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex, true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevSlide();
    if (e.key === 'ArrowRight') handleNextSlide();
  };

  const openVideoInNewTab = (index) => {
    const videoSrc = slides[index]?.video;
    if (!videoSrc) return;

    const win = window.open('', '_blank');
    if (!win) return;

    win.document.write(`
      <html>
        <body style="margin:0;background:black;display:flex;justify-content:center;align-items:center;height:100vh;">
          <video src="${videoSrc}" controls autoplay style="width:100%;height:100%;object-fit:contain;"></video>
        </body>
      </html>
    `);
    win.document.close();
  };

  if (loader) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <img src={loaderImage} alt="loader" style={{ width: '17rem', height: '10rem' }} />
      </div>
    );
  }

  return (
    <div className="home-page withSiteNav">
      <div id="transition-overlay"></div>

      <div id="video-container">
        <div className="video-slide active" onDoubleClick={() => openVideoInNewTab(currentSlide)}>
          <video
            key={currentSlide}
            ref={activeVideoRef}
            src={slides[currentSlide].video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>

      <Navbar />

      <div
        className="slide-controls"
        role="group"
        aria-label="Video slider controls"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* <button className="slide-arrow" type="button" onClick={handlePrevSlide} aria-label="Previous video">
          ‹
        </button> */}

        <div className="slide-lines" aria-label="Video list">
          {slides.map((_, index) => (
           <>
           <div onClick={() => goToSlide(index, true)}>
            <button
              key={index}
              type="button"
              className={`slide-line ${
                index === currentSlide ? `active ${progressReady ? 'progress-active' : ''}` : ''
              }`}
              aria-label={`Go to video ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              // onClick={() => goToSlide(index, true)}
            />
            </div>
           </>
          ))}
        </div>

        {/* <button className="slide-arrow" type="button" onClick={handleNextSlide} aria-label="Next video">
          ›
        </button> */}
      </div>

      <div id="logo">SUGAR MEDIA</div>
    </div>
  );
};

export default Home;
