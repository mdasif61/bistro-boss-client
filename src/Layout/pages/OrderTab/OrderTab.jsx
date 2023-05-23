import React from 'react';
import FoodCart from '../Shared/FoodCart/FoodCart';

const OrderTab = ({item}) => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                item.map(item=><FoodCart
                key={item._id}
                item={item}
                ></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;