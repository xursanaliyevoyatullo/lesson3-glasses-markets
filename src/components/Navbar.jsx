import { useSelector } from "react-redux/es/hooks/useSelector"

function Navbar() {
    const {amount} = useSelector((state) => state.shop)
    return (
        <>
            <div className="max-w-3xl mx-auto px-5 py-5 flex justify-between">
                <h1 className="font-medium text-2xl">Home</h1>
                <div className="flex">
                    <span className="block mr-1">Shop</span>
                    <span className="badge badge-warning badge-sm">{amount}</span>
                </div>
            </div>
            <h2 className="text-4xl mt-10 text-center font-semibold">Redux Store</h2>
        </>
    )
}

export default Navbar