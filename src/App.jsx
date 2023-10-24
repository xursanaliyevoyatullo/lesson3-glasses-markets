import Navbar from './components/Navbar'
import ShopProducts from './components/ShopProducts'

import { useSelector, useDispatch } from 'react-redux'
import { updateTotal } from './redux/features/ShopSLice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const shop= useSelector((state) => state.shop)

  useEffect(() => {
    dispatch(updateTotal())
  }, [shop, dispatch])

  return (
    <div>
      <Navbar />
      <ShopProducts />
    </div>
  )
}

export default App