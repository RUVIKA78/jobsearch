import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import Value from './components/ValueDiv/Value';
import SearchDiv from './components/searchDiv/searchDiv';
import Job from './components/JobDiv/Job';
import Footer from './components/Footer/Footer';





const App = () => {
  return (
    
     <div className='w-[85%] m-auto bg-wh'>
      <NavBar/>
      <SearchDiv/>
      <Job/>
      <Value/>
      <Footer/>
      
     </div>
    
  )
}

export default App
