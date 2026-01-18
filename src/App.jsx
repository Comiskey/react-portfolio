// App.js
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Leadership } from './components/Leadership/Leadership';
import { Contact } from './components/Contact/Contact';
import { ProjectDetail } from './components/ProjectDetail/ProjectDetail';
import { About } from './components/About/About';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <section>
                <Hero />
              </section>
              <div className={styles.content}>
                <section>
                  <Projects />
                </section>
                <section>
                  <Education />
                </section>
                <section>
                  <Experience />
                </section>
                <section>
                  <Leadership />
                </section>
                <section>
                  <Contact />
                </section>
              </div>
            </>
          } />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
