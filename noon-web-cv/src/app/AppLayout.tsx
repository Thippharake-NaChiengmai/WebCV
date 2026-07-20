import { Outlet } from 'react-router-dom';
import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';
import Sidebar from '../components/layouts/Sidebar';

export default function AppLayout() {
  return (
    <div className="min-vh-100 bg-light d-flex flex-column">
      <Navbar />
      <div className="row g-0 flex-grow-1">
        <Sidebar />
        <main className="col-12 col-md-9 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
