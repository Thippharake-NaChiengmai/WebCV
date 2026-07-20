import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useNavigationProgress from '../hooks/useNavigationProgress';
import Activities from '../pages/Activities';
import Details from '../pages/Details';
import Home from '../pages/Home';
import AppLayout from './AppLayout';

export default function App() {
  useNavigationProgress();

  useEffect(() => {
    document.body.classList.add('fade-in');
    return () => document.body.classList.remove('fade-in');
  }, []);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="activities" element={<Activities />} />
        <Route path="details/:projectId" element={<Details />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
