

import { Component } from "react/cjs/react.production.min";

import Product from "../products";

class ProductList extends Component {



renderProducts = () => {

    const {onChange, onRemove, onIncrement, onDecrement, products } = this.props
    if (products.length === 0) {
        return <div> There Is No Product To Show</div>
    }
    else {
        return <div>
            {products.map((product, index) => {
                return <Product
                    productt={product}
                    
                    key={index}
                    // value={product.title}
                    onChange={(e) => onChange(e, product.id)}
                    onDelete={() => onRemove(product.id)}
                    onIncrement={() => onIncrement(product.id)}
                    onDecrement={() => onDecrement(product.id)}
                />
            })}
        </div>
    }
}
render() {
    return (
        this.renderProducts()
    )
};
}

export default ProductList;