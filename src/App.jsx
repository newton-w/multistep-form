import { useEffect, useState, useRef } from 'react'
import Navigation from './components/Navigation'
import PersonalInfo from './components/PersonalInfo'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Finish from './components/Finish'
import Thanks from './components/Thanks'

import { FormContext } from './context/FormContext'
function App() {

  const [page, setPage] = useState(2)
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
      return <PersonalInfo />
    } else if (page === 1) {
      return <Plan />
    } else if (page === 2) {
      return <AddOns />
    } else if (page === 3) {
      return <Finish />
    } else {
      return <Thanks />
    }
  }

  // Plan
  const [subscription, setSubscription] = useState({
    arcade: true,
    advance: false,
    pro: false
  })


  const selectArcade = () => {
    setSubscription({
      arcade: true,
      advance: false,
      pro: false
    })
  }
  const selectAdvance = () => {
    setSubscription({
      arcade: false,
      advance: true,
      pro: false
    })
  }
  const selectPro = () => {
    setSubscription({
      arcade: false,
      advance: false,
      pro: true
    })
  }

  // Styles when you click subscription cards
  const ArcadeStyle = {
    borderColor: subscription.arcade ? 'hsl(243, 100%, 62%)' : 'hsl(231, 11%, 63%, 50%)',
    background: subscription.arcade ? 'hsl(206, 94%, 87%)' : 'white',
  }
  const AdvanceStyle = {
    borderColor: subscription.advance ? 'hsl(243, 100%, 62%)' : 'hsl(231, 11%, 63%, 50%)',
    background: subscription.advance ? 'hsl(206, 94%, 87%)' : 'white',
  }
  const ProStyle = {
    borderColor: subscription.pro ? 'hsl(243, 100%, 62%)' : 'hsl(231, 11%, 63%, 50%)',
    background: subscription.pro ? 'hsl(206, 94%, 87%)' : 'white',
  }

  const [monthly, setMonthly] = useState({
    arcade: 9,
    advance: 12,
    pro: 15
  })
  const [istoggled, setIsToggle] = useState(false)
  const [period, setPeriod] = useState("mo")

  const Toggle = () => {
    setPeriod(period === "mo" ? "yr" : "mo");
    setIsToggle(!istoggled)

    setMonthly({
      arcade: period === "mo" ? monthly.arcade * 10 : monthly.arcade / 10,
      advance: period === "mo" ? monthly.advance * 10 : monthly.advance / 10,
      pro: period === "mo" ? monthly.pro * 10 : monthly.pro / 10
    });
    setAddons({
      online: period === "mo" ? addons.online * 10 : addons.online / 10,
      storage: period === "mo" ? addons.storage * 10 : addons.storage / 10,
      customize: period === "mo" ? addons.customize * 10 : addons.customize / 10,
    })


  }
  // gets value or amount of selected card/subscription card(price)
  const [selected, setSelected] = useState()

  useEffect(() => {

    if (!subscription.arcade && !subscription.pro) {
      setSelected(monthly.advance)
    } else if (!subscription.advance && !subscription.pro) {
      setSelected(monthly.arcade)
    }
    else if (!subscription.arcade && !subscription.advance) {
      setSelected(monthly.pro)
    } else {
      setSelected(null)
    }

  }, [Toggle])

  // Plan

  const CheckBoxRef1 = useRef(null)
  const CheckBoxRef2 = useRef(null)
  const CheckBoxRef3 = useRef(null)

  
  const [onlinechecked, setOnlinechecked] = useState(false)
  const [storagechecked, setStoragechecked] = useState(false)
  const [customizechecked, setCustomize] = useState(false)

  const HandleCheckBox1 = () => {
    CheckBoxRef1.current.click()
    setOnlinechecked(!onlinechecked)
    

  }
  const HandleCheckBox2 = () => {
    CheckBoxRef2.current.click()
    setStoragechecked(!storagechecked)
  }
  const HandleCheckBox3 = () => {
    CheckBoxRef3.current.click()
    setCustomize(!customizechecked)

  }

  const [addons, setAddons] = useState({
    online: 1,
    storage: 2,
    customize: 2
  })


  return (

    <FormContext.Provider value={{
      formData, setFormData, HandleNext,
      HandlePrev, selectAdvance, selectPro, selectArcade, ArcadeStyle,
      ProStyle, AdvanceStyle, period, monthly, Toggle, istoggled, selected,
      addons, HandleCheckBox1, HandleCheckBox2, HandleCheckBox3,
      CheckBoxRef1, CheckBoxRef2, CheckBoxRef3, onlinechecked,storagechecked,customizechecked
    }}>


      <Navigation PageDisplays={PageDisplays} page={page} />
    </FormContext.Provider>

  )
}

export default App
