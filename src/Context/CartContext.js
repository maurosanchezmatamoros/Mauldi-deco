import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }
    
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => total += prod.price * prod.quantity)
        return total
    }

    const addQuantity = (id) => {
        const product = cart.find(prod => prod.id == id)
        product.quantity += 1
        const products = cart.filter(prod => prod.id !== id)
        setCart([...products, product])
    }

    const subtractQuantity = (id) => {
        const product = cart.find(prod => prod.id == id)
        product.quantity -= 1
        const products = cart.filter(prod => prod.id !== id)
        setCart([...products, product])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            getTotal,
            addQuantity,
            subtractQuantity,
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext