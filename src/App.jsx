import { useState } from 'react'
import './App.css'
import WelcomeSection from './pages/WelcomeSection'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='bg-negro'>
            {/* Welcome Section */}
            <WelcomeSection />
        </div>
    )
}
export default App

