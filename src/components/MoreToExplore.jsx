import BornToday from './BornToday'
import TopNews from './TopNews'

const MoreToExplore = () => {
  console.log()
  return (
    <div>
      <h1 className='text-[#E0B416] text-3xl font-extrabold lg:ml-[17%] ml-2'>More to explore</h1>
      <BornToday />
      <TopNews />
    </div>
  )
}
export default MoreToExplore
