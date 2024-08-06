import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Leadership } from './components/Leadership/Leadership';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';

function App() {
  return <div className={styles.App}> 
    <Navbar />
    <Hero />
    <Education/>
    <Experience />
    <Projects />
    <Leadership />
    <Contact /> {/* Always leave this module at the end */}
  </div>
}

export default App;
