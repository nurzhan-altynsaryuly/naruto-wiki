import {useSelector, useDispatch} from 'react-redux'
import { CardInfo } from '../../components/CardInfo/CardInfo'
import { removeFavourite } from '../../store/favouriteSlice'
import {Link} from 'react-router-dom'
import styles from './Favourites.module.css'

export default function Favourites() {
    const favourites = useSelector(state => state.favourites.favourites)
    const dispatch = useDispatch()
    function deleteFavourite(id, name, img) {
        const data = {
            id,
            name,
            img
        }
        dispatch(removeFavourite(data))
    }
    return (
        <>
            <div className="link">
                <Link to='/'>Назад</Link>
            </div>
            {favourites.length === 0 ? <p>No one</p> : favourites.map(item => (
                <div key={item.id}>
                    <CardInfo data={item} />
                    <div className={styles['delete-btn']} onClick={() => deleteFavourite(item.id, item.name, item.images[0])}>Delete from favourites</div>
                </div>
            ))}
        </>
    )
}





