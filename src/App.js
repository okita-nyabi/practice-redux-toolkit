import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
