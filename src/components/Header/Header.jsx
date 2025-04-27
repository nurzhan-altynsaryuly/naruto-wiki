
import { useDispatch, useSelector } from "react-redux"
import { changeTheme } from '../../store/themeSlice';
import { changePage } from '../../store/pageSlice';
import { Link } from "react-router";

import styles from './Header.module.css'


export default function Header({setInputValue, inputValue}) {
    
    const dispatch = useDispatch()
    const pageId = useSelector(state => state.page.pageId)
    const theme = useSelector(state => state.theme.theme)
    const disButton = useSelector(state => state.theme.disButton)
    const favouritesCount = useSelector(state => state.favourites.favourites.length)

    function pageChanging(page) {
        if(page == "prev") dispatch(changePage('prev'))
        else dispatch(changePage('next'))
    }

    return (
        <div className={styles['header']}>
            <div className={styles['buttons']}>
                <button disabled={disButton || pageId === 1} onClick={() => pageChanging('prev')}>Previous</button>
                <button disabled={disButton} onClick={() => pageChanging('next')}>Next</button>  
            </div>
            <div className={styles['theme-buttons']}>
                <div onClick={() => dispatch(changeTheme(false))} className={theme ? 'light-mode' : 'active light-mode'}></div>
                <div onClick={() => dispatch(changeTheme(true))} className={theme ? 'active dark-mode' : 'dark-mode'}></div>  
            </div>
            <div className={styles['right-side']}>
                <input disabled={disButton} type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search character'></input>
                <div className="favourite-block">
                    <p>{favouritesCount}</p>
                    <Link to='/favourites'><div className='favourites'></div></Link>
                </div>
            </div>
        </div>
    )
}