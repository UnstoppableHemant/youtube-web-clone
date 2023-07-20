import Card from '../../common/components/Card'
import Header from '../../common/components/Header'
import SideNav from '../../common/components/SideNav'

const Home = () => {
  return (
    <div>
    <Header/>
    <div className='grid grid-cols-6'>    
    <div><SideNav/></div>
    <div className='col-span-5'>
      <Card/>
    </div>
    </div>
    </div>
  )
}

export default Home