import React, {createContext, useContext, useState, useEffect} from 'react'
import { json } from 'react-router-dom'
import {ProductsContext} from '../../App'




export const CartContext = createContext({
    items: [],
    cartSlider: false,
    wishitems: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    handleCart: () => {},
    closeCart: () => {},
    openCart: () => {},
    addToWishList: () => {},
    getWishQuantity: () => {},
    deleteFromWish: () => {},
})


const cartitemsLocal = JSON.parse(localStorage.getItem("cart")) // "[]11" 
const wishlistitemsLocal = JSON.parse(localStorage.getItem("wish")) 

function CartFunctionality({children}) {


    const [cartProducts, setCartProducts] = useState(cartitemsLocal)
    const [cartSlider, setCart] = useState(false)
    const [wishlist, setwishList] = useState(wishlistitemsLocal)

    const productscontext = useContext(ProductsContext)

    

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cartProducts))
        localStorage.setItem("wish", JSON.stringify(wishlist))

            

    }, [cartProducts, wishlist])
    

    const handleCart = () => setCart(!cartSlider)

    const closeCart = () => setCart(false)

    const openCart = () => setCart(true)

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

    function getWishQuantity(id) {
        
        const quantity = wishlist.find(product => product.id === id)?.quantity

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

    function getTotalCost() {

        let totalcost = 0

        cartProducts ? cartProducts.map(cartitem => {
            totalcost += (cartitem.price * cartitem.quantity)
        })
        :
        null

        return totalcost
    }
    


    function deleteFromCart(id){

        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })                                              
        )
        
    }

    function addToWishList(id)  {

        const quantity = getWishQuantity(id);
        const fullitem = productscontext.filter(item => item.id == id)

        if (quantity == 0) {
        setwishList(
                [
                    ...wishlist,
                    {
                        id: id,
                        name: fullitem[0].name,
                        price: fullitem[0].price,
                        brand: fullitem[0].brand,
                        img: fullitem[0].prod_img,
                        quantity: 1,
                    }
                ]
            )
        }else{
            setwishList(wishlist)
        }
    }

    function deleteFromWish(id){

        // const wish = JSON.parse(localStorage.getItem('wish'))
        // const filtered = items.filter(item => item.id != id)  
        //  maybe this instead next time hm

        setwishList(
            wishlist =>
            wishlist.filter(currentwishitem=> {
                return currentwishitem.id != id;
            })                                              
        )
        
    }


    const contextValue = {
        items: cartProducts,
        cartSlider: cartSlider,
        wishitems: wishlist,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        handleCart,
        openCart,
        closeCart,
        getWishQuantity,
        addToWishList,
        deleteFromWish,
    }   

 
return (

    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
        )
}


export default CartFunctionality




    
 