import { HashRouter as Router } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Skills, Projects } from "./components";

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
