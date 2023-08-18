/* eslint-disable react/prop-types */
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product, handleFromCart }) => {
    const { id, name, quantity, img, price } = product;
    return (
        <div className="review-item">
            <img src={img} alt="" />
            <div className="review-details">
                <p className="product-title">{name}</p>
                <p>Price: <span className="orange-text">{price}</span></p>
                <p>Order Quantity: {quantity}</p>
            </div>
            <button onClick={() => handleFromCart(id)} className="btn-delete"><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;

// module 55-5