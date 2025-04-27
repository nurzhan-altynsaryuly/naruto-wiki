
import {Link} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'

import { addFavourite } from '../../store/favouriteSlice'

import styles from './CardItem.module.css'


export default function CardItem({data}) {

    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites.favourites)
    const status = favourites.find(item => item.id == data.id)
    
    return (
    <>
        <div className='card-block'>
            <Link to={`/characters/${data.id}`} state={data}>
                <div className={styles['card']}>
                    <p>{data.name}</p>
                    <img src={data.images[0]} alt={data.name} width='100%' height='150px'></img>
                </div>
            </Link>
            <button disabled={status} className='add-btn' onClick={() => dispatch(addFavourite(data))}>Add to favourites</button>
            {status && <div className="favourite-icon"></div>}
        </div>
    </>
    )
}





