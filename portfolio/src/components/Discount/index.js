import React, { useState } from 'react';

export default function Discount() {
    let [itemPrice,] = useState(itemPrice);

    return (
        <>
            <button onClick={() => { itemPrice(itemPrice - 5); }}>Click here for 5$ off!</button>
        </>
    );
}