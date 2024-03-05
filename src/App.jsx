
import Home from './Home/home'
import { Route, Routes } from 'react-router-dom'
import Competition from './Comptetitions/Competition'
import NotFound from './NotFound/NotFound'
import CompetitionDetails from './CompetitionDetails/CompetitionDetails'
import AddCompetition from './AddCompetition/AddCompetition'


function App() {
  

  return (
    <>
   <Routes>
   <Route path="/" element={<Home/>} />
    <Route path="/competition" element={<Competition/>} />
    <Route path="/Addcompetition" element={<AddCompetition/>} />
    <Route path="/competitionDetail/:id" element={<CompetitionDetails/>} />
    <Route path="*" element={<NotFound/>} />
   </Routes>
    </>
  )
}

export default App
