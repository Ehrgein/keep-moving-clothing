import React, {createContext, useContext, useState, useEffect} from 'react'
import { json } from 'react-router-dom'
import {ProductsContext} from '../../App'




export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
})


const cartitemsLocal = JSON.parse(localStorage.getItem("cart")) // "[]" 


function CartFunctionality({children}) {


    const [cartProducts, setCartProducts] = useState(cartitemsLocal)

    const productscontext = useContext(ProductsContext)


    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cartProducts))
        
    }, [cartProducts])
    






    function getProductData(id) {
        let productData = productscontext.find(product => product.id === id) 
        if (productData == undefined){
            console.log("Product data does not exist for ID" +id)
            return undefined
        }
        return productData
    }
    


    function getProductQuantity(id) {
        
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }
        
        
        return quantity
    }




    function addOneToCart(id) { // 61 

        const quantity = getProductQuantity(id);
        const fullitem = productscontext.filter(item => item.id == id)

              

        

        if(quantity === 0) {    
           
            
            setCartProducts(
                [
                    ...cartProducts,
                    {

                        id: id,
                        name: fullitem[0].name,
                        price: fullitem[0].price,
                        img: fullitem[0].prod_img,
                        brand: fullitem[0].brand,
                        quantity: 1,
                        

                    }
                ]
            ) 
        } else {           
            setCartProducts(
                cartProducts.map(
                    product =>
                    
                    product.id === id
                      ? {...product, quantity: product.quantity + 1}  
                    : product                                    

                )          
            )
        }
    }
    
    function removeOneFromCart(id) {

        const quantity = getProductQuantity(id);

        if(quantity == 1){
            deleteFromCart(id);
        } else{
            setCartProducts(
                    cartProducts.map(
                        product =>
                        product.id === id                               
                        ? {...product, quantity: product.quantity -1}  
                        : product                                       
                    )    
            )
        }
    }


    


    function deleteFromCart(id){

        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })                                              
        )
        
    }


    function getTotalCost() {

        let totalCost = 0;
        cartProducts.map( cartItem => {
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        })

        return totalCost
    } 

    

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

 
return (

    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
        )
}


export default CartFunctionality