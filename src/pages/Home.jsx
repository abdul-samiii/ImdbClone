import {
  CommingSoon,
  Explore,
  Featured,
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
      <CommingSoon />
    </div>
  )
}
export default Home
