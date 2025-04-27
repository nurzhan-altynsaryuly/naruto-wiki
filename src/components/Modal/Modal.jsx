
import { useSelector, useDispatch } from "react-redux"
import { modalClose } from "../../store/favouriteSlice"

export function Modal() {
    const info = useSelector(state => state.favourites.info)
    const dispatch = useDispatch()
    return (
        <div className='modal'>
            <div className='modal-content'>
                <p>{info.info}</p>
                <img src={info.img} width='200px'></img>
                <div className="add-btn" onClick={() => dispatch(modalClose())}>Close</div>
            </div>
        </div>
    )
}