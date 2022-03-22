import Button from '../Added';

export default function MenuItem({ itemId, itemPrice, itemName, itemDescription }) {
    return (
        <div className="menu-item" id={`menu-item-${itemId}`}>
            <span>${itemPrice}</span>
            <h2>{itemName}</h2>
            <p>{itemDescription}</p>
            <Button />
        </div>
    );
}