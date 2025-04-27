
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { CardInfo } from "../../components/CardInfo/CardInfo"
import { useDispatch, useSelector } from "react-redux"
import { addFavourite } from "../../store/favouriteSlice"

export default function CardPage() {
    const dispatch = useDispatch()
    const data = useLocation().state
    const favourites = useSelector(state => state.favourites.favourites)
    
    return (
        <div className="card-page">
            <div className="link">
                <Link to='/'>Назад</Link>
            </div>
            <div className="card-page">
                <CardInfo data={data} />
                <button disabled={favourites.find(item => item.id == data.id)} className="add-btn" onClick={() => dispatch(addFavourite(data))}>Add to favourites</button>
            </div>
        </div>
    )
}





