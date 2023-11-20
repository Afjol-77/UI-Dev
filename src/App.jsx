
import './App.css'
import Earnings from './components/Earnings'
import Rewards  from './components/Rewards'
import Scratchers from './components/Scratchers'
import Quiz from './components/Quiz'
import Play from './components/Play'
import MoreRewards from './components/MoreRewards'

function App() {

  return (
    <div>
      <div className='flex gap-5'>
        <div>
        <Scratchers/>
        <Earnings/>
        <Rewards/>
        <Quiz/>
        <MoreRewards/>
        </div>

        <Play/> 
      </div>
    </div>
  )
}

export default App
