import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './header/Header'
import ContactUs from './pages/ContactUs'
import Sponsors from './pages/Sponsors'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import EventInformation from './pages/EventInformation'
import Rules from './pages/Rules'
import AllInfo from './pages/AllInfo'
import AllInscriptions from './pages/AllInscriptions'
import Inscriptions from './pages/Inscriptions'
import AllLiga from './components/Liga/AllLiga'
import GaleryLiga from './components/Liga/GaleryLiga'
import CalendaryLiga from './components/Liga/CalendaryLiga'
import ResultsLiga from './components/Liga/ResultsLiga'
import BoardLiga from './components/Liga/BoardLiga'
import AllTorneo from './components/Torneo.jsx/AllTorneo'
import GaleryTorneo from './components/Torneo.jsx/GaleryTorneo'
import BoardTorneo from './components/Torneo.jsx/BoardTorneo'
import CalendaryTorneo from './components/Torneo.jsx/CalendaryTorneo'
import ResultsTorneo from './components/Torneo.jsx/ResultsTorneo'
import AllAmerican from './components/Americano/AllAmerican'
import GaleryAmerican from './components/Americano/GaleryAmerican'
import BoardAmerican from './components/Americano/BoardAmerican'
import CalendaryAmerican from './components/Americano/CalendaryAmerican'
import ResultsAmerican from './components/Americano/ResultsAmerican'
import { useEffect } from 'react'


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <div className='app__conatiner'>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/liga'>
          <Route path='allLigas' element={<AllLiga />} />
          <Route path='galeryLiga' element={<GaleryLiga />} />
          <Route path='boardLiga' element={<BoardLiga />} />
          <Route path='calendaryLiga' element={<CalendaryLiga />} />
          <Route path='resultsLiga' element={<ResultsLiga />} />
        </Route>
        <Route path='/torneo'>
          <Route path='allTorneos' element={<AllTorneo />} />
          <Route path='galeryTorneo' element={<GaleryTorneo />} />
          <Route path='boardTorneo' element={<BoardTorneo />} />
          <Route path='calendaryTorneo' element={<CalendaryTorneo />} />
          <Route path='resultsTorneo' element={<ResultsTorneo />} />
        </Route>
        <Route path='/americano'>
          <Route path='allAmericanos' element={<AllAmerican />} />
          <Route path='galeryAmericano' element={<GaleryAmerican />} />
          <Route path='boardAmericano' element={<BoardAmerican />} />
          <Route path='calendaryAmericano' element={<CalendaryAmerican />} />
          <Route path='resultsAmericano' element={<ResultsAmerican />} />
        </Route>
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/allInscriptions' element={<AllInscriptions />} />
        <Route path='/inscription/:id' element={<Inscriptions />} />
        <Route path='/eventInformation/:id' element={<EventInformation />} />
        <Route path='/rulesEvent/:id' element={<Rules />} />

      </Routes>
      <AllInfo />
    </div>
  )
}

export default App
