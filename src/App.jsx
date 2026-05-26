import { Display} from './components/Display.jsx'
import Cast from './components/Inside.jsx'
import {BrowserRouter,Route,Routes,Link} from 'react-router'
import Choice from './components/choice.jsx'
import Recommandation from './components/Recommandation.jsx'
import Watchlist from './components/wantTowatch.jsx'

import { useState,useEffect,createContext,useContext } from 'react';
// const Cast = lazy(() => import('./components/Inside.jsx'));
export const DataContext = createContext('')
export default function App(){

   const [data,setData]=useState([])

   const [choice,setChoice] = useState([])
   const [watchlist, setWatchlist] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/data")
        // fetch('https://api.jsonbin.io/v3/b/6a0ff4d3ee5a733b12fdba32', {
        // method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'X-Master-Key': '$2a$10$Q.SAPctah9iC0BfADRUtxeDQgmm6T415Ior/q/7l7T04.7jIs3UJS'
        //           }
        //       })
        .then((response)=>{
          if(!response.ok) {
            throw new Error("Unable to fetch data")
          }
          return response.json()})
        .then((data)=>setData(data.data)) 
    },[])
  return(
    
    <>
    <DataContext.Provider value={{data , choice , setChoice , watchlist, setWatchlist}}>
    <BrowserRouter>
      <Link to='/'></Link>

      {/* <Link to='/recommand'>Recommand</Link> */}
      <Routes>
        <Route path='/display' element={<Display />}></Route>
        {/* <Route path='/cast/:id' element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <Cast />
          </Suspense>
        }></Route> */}
        <Route path='/' element={<Choice />}></Route>
        <Route path='/cast/:id' element={<Cast />}></Route>
        <Route path='/watchlist' element={<Watchlist />}></Route>

        {/* <Route path='/recommand' element={<Recommandation />}></Route> */}
      </Routes>
    </BrowserRouter>
    </DataContext.Provider>
    
    </>
  )
}