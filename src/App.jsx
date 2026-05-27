import { BrowserRouter,Route,Routes,Link } from 'react-router';
import { useState,useEffect,createContext,useContext,lazy,Suspense } from 'react';


import  Display  from './components/Display.jsx';
import Choice from './components/choice.jsx';
import Recommandation from './components/Recommandation.jsx';
import Watchlist from './components/wantTowatch.jsx';
import Login from './components/login.jsx';


import { GoogleOAuthProvider } from '@react-oauth/google';

const Cast = lazy(() => import('./components/Inside.jsx'));

export const DataContext = createContext('');

const clientId = '686895826552-7gn0edjffijutht6hnkquhp47cnhbe1j.apps.googleusercontent.com';


export default function App() {

    const [data,setData] = useState([]);
    const [choice,setChoice] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to fetch data');
                }
                return response.json();})
            .then((data) => setData(data.data));
    },[]);

    return (

    <>
        <GoogleOAuthProvider clientId={clientId}>
            <DataContext.Provider value={{ data , choice , setChoice , watchlist, setWatchlist }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/display' element={<Display />}></Route>
                        <Route path='/cast/:id' element={
                        <Suspense fallback={<h2>Loading...</h2>}>
                            <Cast />
                        </Suspense>}>
                        </Route>
                        <Route path='/' element={<Choice />}></Route>
                        <Route path='/watchlist' element={<Watchlist />}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                    </Routes>
                </BrowserRouter>
            </DataContext.Provider>
        </GoogleOAuthProvider>

    </>);
}
