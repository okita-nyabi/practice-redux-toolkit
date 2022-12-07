import React from 'react';
import { PlusIcon, MinusIcon } from '../HeroIcons';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/CartSlice';

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt='' />
      <div>
        <h4>{title}</h4>
        <h4>{price}円</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => dispatch(decrease(id))}>
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
