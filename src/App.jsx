import { useState } from 'react'
import Navigation from './components/Navigation'
import PersonalInfo from './components/PersonalInfo'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Finish from './components/Finish'
import Thanks from './components/Thanks'
function App() {

  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  

  const HandleNext = (e) => {
    setPage(page => page + 1)
    e.preventDefault()
  }
  const HandlePrev = (e) => {
    setPage(page => page - 1)
    e.preventDefault()
  }


  const PageDisplays = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} HandleNext={HandleNext} />
    } else if (page === 1) {
      return <Plan page={page} setPage={setPage} HandleNext={HandleNext} HandlePrev={HandlePrev} />
    } else if (page === 2) {
      return <AddOns page={page} setPage={setPage} HandleNext={HandleNext} HandlePrev={HandlePrev} />
    } else if (page === 3) {
      return <Finish page={page} setPage={setPage} HandleNext={HandleNext} HandlePrev={HandlePrev} />
    } else {
      return <Thanks />
    }
  }

  return (
    <>
      <Navigation PageDisplays={PageDisplays} page={page} />
    </>
  )
}

export default App
