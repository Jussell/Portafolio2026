import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TimelineCV from './components/TimelineCV';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { LangProvider } from './context/LangContext';
import ProjectPage from './pages/ProjectPage';

const Home = () => (
  <>
    <HeroSection />
    <ProjectsSection />
    <TimelineCV />
    <SkillsSection />
    <ContactSection />
  </>
);

function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <LangProvider>
      <div className="bg-white min-h-screen selection:bg-accent/30">
        {!isProjectPage && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
