import Home from './pages/home.jsx'
import Jobs from './pages/Jobs'
import Clubs from './pages/Clubs'
import Settings from './pages/Settings'
import Profilenew from './pages/Profilenew'

const routes = [
    { path: '/', element: <Home />},
    { path: 'jobs', element: <Jobs /> },
    { path: 'clubs', element: <Clubs /> },
    { path: 'settings', element: <Settings /> },
    { path: 'profilenew', element: <Profilenew /> },
]

export default routes