import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FacebookFeed from './components/FacebookFeed';
import Team from './components/Team';
import MyDialog from './components/MyDialog'
import { useState } from 'react';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);


  return (
    <>
      <Nav isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} MyDialog={MyDialog}/>
      <Hero isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} MyDialog={MyDialog}/>
      <About isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} MyDialog={MyDialog}/>
      <Services />
      <Team />
      <Testimonials />
      <FacebookFeed />
      <Contact />
      <Footer />
    </>
  )
}

export default App
