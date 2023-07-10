import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav/Nav'
import Homee from './Homee'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Nav/>}>
            <Route index element={<Homee/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}


export default App