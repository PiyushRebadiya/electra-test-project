import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function normalizePath(pathname) {
  if (!pathname) return '/';
  if (pathname === '/our-works') return '/works';
  return pathname;
}

const Navbar = () => {
  const location = useLocation();
  const activePath = useMemo(() => normalizePath(location.pathname), [location.pathname]);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const rootRef = useRef(null);
  const navRef = useRef(null);
  const rafRef = useRef(0);

  const closeMobile = () => setIsMobileOpen(false);
  const toggleMobile = () => setIsMobileOpen((v) => !v);

  useEffect(() => {
    closeMobile();
  }, [activePath]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!isMobileOpen) return;
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(e.target)) closeMobile();
    };

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [isMobileOpen]);

  useEffect(() => {
    const updateSpaceVar = () => {
      const navEl = navRef.current;
      if (!navEl) return;
      const rect = navEl.getBoundingClientRect();
      const space = Math.max(0, Math.ceil(rect.bottom + 14));

      const root = document.documentElement;
      const prev = Number.parseInt(root.style.getPropertyValue('--siteNavSpace') || '0', 10);
      if (Number.isFinite(prev) && Math.abs(prev - space) <= 1) return;
      root.style.setProperty('--siteNavSpace', `${space}px`);
    };

    const scheduleUpdate = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        updateSpaceVar();
      });
    };

    scheduleUpdate();

    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('orientationchange', scheduleUpdate);
    return () => {
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('orientationchange', scheduleUpdate);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const scheduleUpdate = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const navEl = navRef.current;
        if (!navEl) return;
        const rect = navEl.getBoundingClientRect();
        const space = Math.max(0, Math.ceil(rect.bottom + 14));
        document.documentElement.style.setProperty('--siteNavSpace', `${space}px`);
      });
    };

    scheduleUpdate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activePath, isMobileOpen]);

  const linkClass = (to, extra = '') => {
    const normalized = normalizePath(to);
    const isActive = normalized === activePath;
    return `siteNav-link ${isActive ? 'active' : ''}${extra ? ` ${extra}` : ''}`;
  };

  return (
    <div className="siteNavWrap" ref={rootRef}>
      <nav className="siteNav" aria-label="Primary navigation" ref={navRef}>
        <div className="siteNavInner">
          <div className="siteNavDesktop">
            <div className="siteNavLeft">
              <Link to="/" className={linkClass('/')}>Home</Link>
              <a href="/about" className={linkClass('/about')}>About</a>
            </div>
            <div>
              <a href="/" className="siteNavBrand" aria-label="SUGAR MEDIA home">
                SUGAR MEDIA
              </a>
            </div>
            <div className="siteNavRight">
              <a href="/our-works" className={linkClass('/works')}>Works</a>
              <a href="/contact" className={linkClass('/contact')}>Contact</a>
            </div>
          </div>

          <div className="siteNavMobile">
            <a className="siteNavBrand" href="/" aria-label="SUGAR MEDIA home">
              SUGAR MEDIA
            </a>
            <button
              className={`siteNavToggle ${isMobileOpen ? 'open' : ''}`}
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isMobileOpen}
              onClick={toggleMobile}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className={`siteNavMenu ${isMobileOpen ? 'open' : ''}`} role="menu">
            <a role="menuitem" href="/" className={linkClass('/')} onClick={closeMobile}>Home</a>
            <a role="menuitem" href="/about" className={linkClass('/about')} onClick={closeMobile}>About</a>
            <a role="menuitem" href="/our-works" className={linkClass('/works')} onClick={closeMobile}>Works</a>
            <a role="menuitem" href="/contact" className={linkClass('/contact')} onClick={closeMobile}>Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
