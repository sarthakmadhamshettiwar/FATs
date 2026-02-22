import './style.css';
// FAT component => will be rendered inside the carousel when a product is added to the cart

function FatProduct(fatProductInfo){
    const {name, image, price} = fatProductInfo;
    return (
    <div className="fat-card">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>${price}</p>
    </div>
    )
}

export default FatProduct;