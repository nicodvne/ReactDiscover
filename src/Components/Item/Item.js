import './Item.css'
import imgItem from '../../assets/imgItem.jpg'

function Item (props) {
    return (
        <div>
            <h2 className="title-item">Hello depuis Item</h2>
            <img 
                src={imgItem} alt="une image random"
            />
        </div>
    )
}

export default Item