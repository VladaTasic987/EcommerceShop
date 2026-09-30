import { useContext } from "react"
import { CartContext } from "../Context"

export default function Cart () {

    const {visible} = useContext(CartContext);

    

    return (

        <>
        
            <div className="cart_container" 
            style={{ display: visible }}>

                

            </div>

        </>

    )

}