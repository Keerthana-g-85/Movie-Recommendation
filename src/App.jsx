import { Display} from './components/Display.jsx'
import Cast from './components/Inside.jsx'
import {BrowserRouter,Route,Routes,Link} from 'react-router'
import Choice from './components/choice.jsx'
import Recommandation from './components/Recommandation.jsx'
import { useState,useEffect,createContext,useContext } from 'react';

export const DataContext = createContext('')
export default function App(){

   const [data,setData]=useState([])

   const [choice,setChoice] = useState([])

   

    useEffect(()=>{
        // fetch("https://jsonfakery.com/movies/paginated")
        fetch('https://api.jsonbin.io/v3/b/6a0ff4d3ee5a733b12fdba32', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2a$10$Q.SAPctah9iC0BfADRUtxeDQgmm6T415Ior/q/7l7T04.7jIs3UJS'
                  }
              })
        .then((response)=>{
          if(!response.ok) {
            throw new Error("Unable to fetch data")
          }
          return response.json()})
        .then((data)=>setData(data.record.data)) 
    },[])
  return(
    
    <>
    <DataContext.Provider value={{data , choice , setChoice}}>
    <BrowserRouter>
      <Link to='/'></Link>

      {/* <Link to='/recommand'>Recommand</Link> */}
      <Routes>
        <Route path='/Display' element={<Display />}>Home</Route>
        <Route path='/movies/:id' element={<Cast />}></Route>
        <Route path='/' element={<Choice />}></Route>
        {/* <Route path='/recommand' element={<Recommandation />}></Route> */}
      </Routes>
    </BrowserRouter>
    </DataContext.Provider>
    
    </>
  )
}