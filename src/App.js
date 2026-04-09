import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Directors from './pages/Directors';
import './App.css';

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const triggerTemplateInit = () => {
      try {
        if (window.ScrollTrigger && typeof window.ScrollTrigger.getAll === 'function') {
          window.ScrollTrigger.getAll().forEach((t) => t.kill());
        }
      } catch {}

      try {
        const $ = window.jQuery || window.$;
        if ($) $(document).trigger('initPage');
      } catch {}

      try {
        if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') {
          window.ScrollTrigger.refresh();
        }
      } catch {}

      try {
        if (window.scroller && typeof window.scroller.resize === 'function') {
          window.scroller.resize();
        }
      } catch {}
    };

    const unlockScroll = () => {
      const html = document.documentElement;
      const body = document.body;

      html.classList.remove('stopScroll', 'fade', 'overflow', 'fadeOut', 'noTransition', 'noPointers', 'is-changing');
      body.classList.remove('overflow', 'fadeOut', 'noTransition');

      html.style.overflow = '';
      html.style.height = '';
      body.style.overflow = '';
      body.style.height = '';
      body.style.position = '';
      body.style.top = '';

      try {
        if (window.scroller && typeof window.scroller.start === 'function') {
          window.scroller.start();
        }
      } catch {}
    };

    unlockScroll();

    let observer = null;
    const setupInviewObserver = () => {
      if (observer) observer.disconnect();

      const targets = Array.from(document.querySelectorAll('[data-scroll-inview]'));
      if (targets.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('inview');
              observer?.unobserve(entry.target);
            }
          });
        },
        { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
      );

      targets.forEach((el) => observer.observe(el));
    };

    const t = setTimeout(() => {
      setupInviewObserver();
      triggerTemplateInit();
    }, 0);

    window.addEventListener('resize', unlockScroll);
    window.addEventListener('orientationchange', unlockScroll);
    window.addEventListener('pageshow', unlockScroll);
    return () => {
      clearTimeout(t);
      if (observer) observer.disconnect();
      window.removeEventListener('resize', unlockScroll);
      window.removeEventListener('orientationchange', unlockScroll);
      window.removeEventListener('pageshow', unlockScroll);
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-works" element={<Works />} />
      </Routes>
    </Router>
  );
}

export default App;
