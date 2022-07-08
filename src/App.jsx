import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/main.scss'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Firstcontainer from './Components/Firstcontainer'
import Secondcontainer from './Components/Secondcontainer'
import Thirdcontainer from './Components/Thirdcontainer'
import Fourthcontainer from './Components/Fourthcontainer'
import Sixthcontainer from './Components/Sixthcontainer'
import Seventhcontainer from './Components/Seventhcontainer'
import Last from './Components/Last'
import Formcontainer from './Components/Formconainer'
import Slide from './Components/Fifthcontainer'
import Footercontainer from './Components/Footercontainer'
import '@fortawesome/fontawesome-free/css/all.css'
import './styles/index.scss'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Firstcontainer />
      <Secondcontainer />
      <Thirdcontainer />
      <Fourthcontainer />
      <Slide />
      <Sixthcontainer />
      <Seventhcontainer />
      <Last />
      <Formcontainer />
      <Footercontainer />
    </div>
  )
}

const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
})

export default App
