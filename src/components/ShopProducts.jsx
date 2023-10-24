import { useSelector } from "react-redux"
import Product from "./Product"

function ShopProducts() {
    const { products, total } = useSelector((state) => state.shop)
    return (
        <div>
            <div>
                <div className="mt-10 max-w-3xl mx-auto">
                    {products.map((product) => {
                        const { name, price, image, amount } = product
                        return (
                            <Product
                                key={name}
                                name={name}
                                price={price}
                                image={image}
                                amount={amount}
                            />
                        );
                    })}
                </div>
                <div className="max-w-2xl flex justify-between mx-auto py-3 mb-3">
                    <h1 className="text-2xl">Total</h1>
                    <h1 className="text-2xl">${total.toFixed(2)}</h1>
                </div>
            </div>
        </div>
    )
}

export default ShopProducts