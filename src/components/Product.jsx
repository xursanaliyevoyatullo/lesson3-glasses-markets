import { useDispatch } from "react-redux"
import { incrementAmount, decrementAmount, removeItem } from "../redux/features/ShopSLice"

function Product({ name, price, image, amount }) {
    const dispatch = useDispatch()
    return (
        <div className="flex justify-between items-center mb-7">
            <img src={image} alt={name + 'galsses'} className="w-40" />
            <div className="w-1/3">
                <p className="font-medium">{name}</p>
                <p>${price}</p>
                <button onClick={() => dispatch(removeItem({ name }))} className="btn btn-outline btn-sm btn-warning">remove</button>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold mb-2">Amount</p>
                <div className="flex gap-1 items-center">
                    <button
                        onClick={() => {
                            if (amount === 1) {
                                dispatch(removeItem({name}))
                                return
                            }
                            dispatch(decrementAmount({ name }))
                        }}
                        className="btn btn-sm">
                        -
                    </button>
                    <span className="text-xl font-medium">{amount}</span>
                    <button
                        onClick={() => dispatch(incrementAmount({ name }))}
                        className="btn btn-sm">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product