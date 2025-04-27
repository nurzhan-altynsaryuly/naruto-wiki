import './App.css'
import CardList from './components/CardList/CardList';
import CardPage from './pages/CardPage/CardPage';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites/Favourites';
import {useDispatch, useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom';
import { loadFavourite } from './store/favouriteSlice';
import { loadTheme, turnButton } from './store/themeSlice';
import Header from './components/Header/Header';
import { Modal } from './components/Modal/Modal';

export default function App() {

  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [characters, setCharacters] = useState([])
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)
  const pageId = useSelector(state => state.page.pageId)
  const modal = useSelector(state => state.favourites.modal)
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => { location.pathname != '/' ? dispatch(turnButton(true)) : dispatch(turnButton(false)) }, [location])

  useEffect(() => {
    dispatch(loadFavourite())
    dispatch(loadTheme())
  }, [])

  useEffect(()=> {
    async function load() {
      setLoading(true)
      const response = await fetch(`https://dattebayo-api.onrender.com/characters/?page=${pageId}`)
      .then(response => response.json())
      .then(data => data.characters)
      .catch(error => console.log(error))
      setData(response)
      setCharacters(response)
      setLoading(false)
    }
    load()
  }, [pageId])

  useEffect(() => {
    if(!inputValue) return setCharacters(data)
    setCharacters(data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())))
  }, [inputValue])

  return (
    <div className={theme ? 'dark' : 'light'}>
      <div className="theme-block">
        {modal && <Modal />}
        <Header setInputValue={setInputValue} inputValue={inputValue}/>
        {loading ? <p>Loading....</p> : (
        <Routes>
          <Route path='/' element={<CardList data={characters}/>} />
          <Route path='/favourites' element={<Favourites />}/>
          <Route path='/characters/:id' element={<CardPage />}/>
        </Routes>
        )}
      </div>    
    </div>
  )
}
