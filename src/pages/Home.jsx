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
