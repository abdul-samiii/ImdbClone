import RedirectWithoutLogin from '../AuthRedirection/RedirectWithoutLogin'
import {
  Explore,
  Featured,
  Footer,
  MoreToExplore,
  Nav,
  Sidebar,
  Slider,
  WhatToWatch,
} from '../components'

const Home = () => {
  console.log()
  return (
    <div className=''>
      <RedirectWithoutLogin />
      <Nav />
      <div className='lg:flex '>
        <Slider />
        <Sidebar />
      </div>
      <Featured />
      <WhatToWatch />
      <Explore />
      <MoreToExplore />
      <Footer />
    </div>
  )
}
export default Home
