import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='nav'>
            <Link to='/'>
                <h2> Home </h2>
            </Link>

            <Link to='/Resume'>
                <h2>Resume</h2>
            </Link>

            <Link to='/Projects'>
                <h2>Projects</h2>
            </Link>


        </div>
    )
}