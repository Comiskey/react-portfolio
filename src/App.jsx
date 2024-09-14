// App.js
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Leadership } from './components/Leadership/Leadership';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;
