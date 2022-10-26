import { Route, Routes } from 'react-router-dom'
import Resume from './Resume'
import Projects from './Projects'
import Home from './Home'

export default function Main () {
    const userName = 'JordanWolter'
    return (
        <div className='main'>
            <Routes>
                <Route exact path='/' element={<Home userName={userName}/>}/>
                <Route exact path='Projects' element={<Projects/>}/>
                <Route exact path='Resume' element={<Resume/>}/>

            </Routes>


        </div>
    )
}