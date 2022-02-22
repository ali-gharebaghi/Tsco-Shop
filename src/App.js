
import react from "react";
import ProductList from "./Components/ProductList/ProductList"
import "./App.css"
import Navbar from './Components/Nav_bar/Navbar'

class App extends react.Component {

    state = {
        products: [
            { title: 'react.js', price: '99 $', id: 1, quantity: 1 },
            { title: 'Node.js', price: '89 $', id: 2, quantity: 2 },
            { title: 'javascript', price: '79 $', id: 3, quantity: 3 }
        ],
    };

    removeHandler = (id) => {
        // console.log(id)
        const filteredProducts = this.state.products.filter((p) => {
            return p.id !== id
        })
        this.setState({ products: filteredProducts })
    };
    changeHandler = (e, id) => {
        const products = [...this.state.products]
        const selecteditem = products.find((p) => p.id === id)
        selecteditem.title = e.target.value
        this.setState({ products: products })
    }

    incrementHandler = (id) => {
        const products = [...this.state.products]
        const selecedItem = products.find(p => p.id === id)
        selecedItem.quantity++
        this.setState({
            products: products
        })
    }

    decrementHandler = (id) => {
        const products = [...this.state.products]
        const selectedItem = products.find(p => p.id === id)
        if (selectedItem.quantity === 1) {
            const filteredproducts = products.filter((p) => p.id !== id)
            this.setState({ products: filteredproducts })
        } else {
            selectedItem.quantity--
            this.setState({ products: products })
        }
    }

    render() {
        return (
            <div className="container">

                <Navbar totalItem={this.state.products.filter((p) => p.quantity > 0).length} />
                <ProductList
                    products={this.state.products}
                    onRemove={this.removeHandler}
                    onChange={this.changeHandler}
                    onIncrement={this.incrementHandler}
                    onDecrement={this.decrementHandler}
                />
            </div>
        )
    }
}






export default App;