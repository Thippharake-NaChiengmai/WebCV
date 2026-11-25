import Portfolio from '../components/Portfolio';
import Achievements from '../components/Achievements';

export default function Activities() {
  return (
    <div className="container-fluid">
      <div className="page-heading mb-4"><p className="section-eyebrow mb-2">Selected Work</p><h1 className="h2 fw-bold mb-2">Projects &amp; Awards</h1><p className="text-secondary mb-0">Explore software projects, technical work, and achievements.</p></div>
      <Achievements />
      <Portfolio />
    </div>
  );
}
