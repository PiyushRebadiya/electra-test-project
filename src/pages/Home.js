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

  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_VIEW = 4;

  const timerRef = useRef(null);
  const progressRaf1Ref = useRef(null);
  const progressRaf2Ref = useRef(null);

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

  const projects = [
    { title: 'Nokia Lumia 5.1', sub: 'Nokia 1', subSecondary: "Mobile Phone's Future" },
    { title: 'Nokia Lumia 7.1', sub: 'Nokia 2', subSecondary: 'Mobile Phone’s Future' },
    { title: 'Nokia Lumia 5.1', sub: 'Nokia 3', subSecondary: "Mobile Phone's Future" },
    { title: 'Nokia Lumia 7.1', sub: 'Nokia 4', subSecondary: 'Mobile Phone’s Future' },
    { title: 'Nokia Lumia 5.1', sub: 'Nokia 5', subSecondary: "Mobile Phone's Future" },
    { title: 'Nokia Lumia 7.1', sub: 'Nokia 6', subSecondary: 'Mobile Phone’s Future' },
    { title: 'Nokia Lumia 5.1', sub: 'Nokia 7', subSecondary: "Mobile Phone's Future" },
    { title: 'Nokia Lumia 7.1', sub: 'Nokia 8', subSecondary: 'Mobile Phone’s Future' }
  ];

  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_VIEW);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
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
    setTimeout(() => setLoader(false), 2800);
  }, []);

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

const handleNext = () => {
  const newIndex = startIndex + ITEMS_PER_VIEW;

  if (newIndex < projects.length) {
    setStartIndex(newIndex);

    setProgressReady(false); // 🔥 RESET

    setCurrentSlide(newIndex);

    setTimeout(() => {
      setProgressReady(true);
    }, 50);

    startTimer();
  }
};

const handlePrev = () => {
  const newIndex = startIndex - ITEMS_PER_VIEW;

  if (newIndex >= 0) {
    setStartIndex(newIndex);

    setProgressReady(false); // 🔥 RESET

    setCurrentSlide(newIndex);

    setTimeout(() => {
      setProgressReady(true);
    }, 50);

    startTimer();
  }
};

  const openVideoInNewTab = (index) => {
    const videoSrc = slides[index].video;
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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%'
      }}>
        <img src={loaderImage} alt="loader" style={{ width: '17rem', height: '10rem' }} />
      </div>
    );
  }

  return (
    <div className="home-page withSiteNav">
      <div id="transition-overlay"></div>

      <div id="video-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`video-slide ${index === currentSlide ? 'active' : ''}`}
            onDoubleClick={() => openVideoInNewTab(index)}
          >
            <video src={slide.video} autoPlay muted loop playsInline />
          </div>
        ))}
      </div>

      <Navbar />

      <div id="project-strip">

        <div
          className="arrow left"
          onClick={handlePrev}
          style={{ opacity: startIndex === 0 ? 0.3 : 1 }}
        >
          ◀
        </div>

        {visibleProjects.map((project, index) => {
          const actualIndex = startIndex + index;

          return (
            <div
              key={actualIndex}
              className={`project-item ${
                actualIndex === currentSlide
                  ? `active ${progressReady ? 'progress-active' : ''}`
                  : ''
              }`}
              onClick={() => goToSlide(actualIndex, true)}
              onDoubleClick={() => openVideoInNewTab(actualIndex)}
            >
              <div className="project-title">
                {project.title}
                <span className="plus-icon">+</span>
              </div>
              <div className="project-sub">
                {project.sub}<br />
                <span className="project-sub-secondary">
                  {project.subSecondary}
                </span>
              </div>
            </div>
          );
        })}

        <div
          className="arrow right"
          onClick={handleNext}
          style={{
            opacity:
              startIndex + ITEMS_PER_VIEW >= projects.length ? 0.3 : 1
          }}
        >
          ▶
        </div>

      </div>

      <div id="logo">SUGAR MEDIA</div>
    </div>
  );
};

export default Home;