interface Quantity {
    quantity: number;
    setQuantity: Function;
}

const ButtonPlus = ({ quantity, setQuantity } : Quantity) => (
    <div>
        <span style={{fontSize: '14px'}}>Quantidade passagens</span>
        <div>
            <button 
                onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
                style={{ height: '20px', marginRight: '8px'}}
            >
                -
            </button>
            <span>{quantity}</span>
            <button 
                onClick={() =>setQuantity(quantity + 1)}
                style={{ height: '20px', marginLeft: '8px'}}
            >
                +
            </button>
        </div>
    </div>   
);

export default ButtonPlus;