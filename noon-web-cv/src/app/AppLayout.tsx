import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';
import Sidebar from '../components/layouts/Sidebar';

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }
    const frameId = requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(frameId);
  }, [location.hash, location.pathname, location.search]);

  return (
    <div className="min-vh-100 bg-light d-flex flex-column">
      <a className="skip-link" href="#main-content">Skip to Main Content</a>
      <Navbar />
      <div className="row g-0 flex-grow-1">
        <Sidebar />
        <main id="main-content" tabIndex={-1} className="col-12 col-md-9 p-4">
          <Suspense fallback={<div className="text-center py-5" role="status"><span className="spinner-border text-primary" aria-hidden="true" /><span className="visually-hidden">Loading page…</span></div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}
