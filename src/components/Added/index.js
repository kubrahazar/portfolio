import React, { useState } from 'react';

export default function Button() {
    let [text, changeText] = useState("Add to Cart", 0);

    return (
        <>
            <button onClick={() => { changeText("You added this to your Cart!"); }}>{text}</button>
        </>
    );
}