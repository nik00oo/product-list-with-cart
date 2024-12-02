import empty_cart from './assets/illustration-empty-cart.svg'
import classes from './modules/App.module.css'
import waffle from './assets/image-waffle-desktop.jpg'
import creme_brulee from './assets/image-creme-brulee-desktop.jpg'
import add_to_cart from './assets/icon-add-to-cart.svg'
import macron from './assets/image-macaron-desktop.jpg'
import Tiramisu from './assets/image-tiramisu-desktop.jpg'
import Baklava from './assets/image-baklava-desktop.jpg'
import Lemon_pie from './assets/image-meringue-desktop.jpg'
import Red_cake from './assets/image-cake-desktop.jpg'
import brownie from './assets/image-brownie-desktop.jpg'
import Panna_cotta from './assets/image-panna-cotta-desktop.jpg'
import order_confirmed from './assets/icon-order-confirmed.svg'
import {useState} from "react";

const App = () => {
    const [desertData, setDesertData] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCounter, setCartCounter] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [inputBtn1, setInputBtn1] = useState(false)
    const [inputBtn2, setInputBtn2] = useState(false)
    const [inputBtn3, setInputBtn3] = useState(false)
    const [inputBtn4, setInputBtn4] = useState(false)
    const [inputBtn5, setInputBtn5] = useState(false)
    const [inputBtn6, setInputBtn6] = useState(false)
    const [inputBtn7, setInputBtn7] = useState(false)
    const [inputBtn8, setInputBtn8] = useState(false)
    const [inputBtn9, setInputBtn9] = useState(false)
    const [reset, setReset] = useState(false)


    // const [totalOrderPrice, setTotalOrderPrice] = useState(0);
    // const [orderConfirmed, setOrderConfirmed] = useState(false);


    const products = [
        {
            id: 1,
            name: 'Waffle with Berries',
            price: 6.50,

        },

        {
            id: 2,
            name: 'Vanila Bean Crḕme Brülḕe',
            price: 7.00,

        },

        {
            id: 3,
            name: 'Macron mix of five',
            price: 7.00,

        },

        {
            id: 4,
            name: 'Classic Tiramisu',
            price: 7.00,

        },

        {
            id: 5,
            name: 'Pistachio Baklava',
            price: 7.00,

        },

        {
            id: 6,
            name: 'Lemon Meringue Pie',
            price: 7.00,

        },

        {
            id: 7,
            name: 'Red Velvet Cake',
            price: 7.00,

        },

        {
            id: 8,
            name: 'Salted caramel Brownie',
            price: 7.00,

        },

        {
            id: 9,
            name: 'Vanilla Panna Cotta',
            price: 7.00,

        },




    ]
    const addClickHandler1 = () =>{
        setCartItems([...cartItems, desertData ])
        setCartCounter(cartCounter +1)
        setInputBtn1(!inputBtn1)
    }


    const addInputHandler1 = (e) => {
        setCartCounter(cartCounter +1)
        setDesertData(e.target.value)
        setCartItems([...cartItems, desertData ])
    }

    const addClickHandler2 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn2(!inputBtn2)

    }
    const addClickHandler3 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn3(!inputBtn3)

    }
    const addClickHandler4 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn4(!inputBtn4)

    }
    const addClickHandler5 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn5(!inputBtn5)

    }
    const addClickHandler6 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn6(!inputBtn6)

    }
    const addClickHandler7 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn7(!inputBtn7)

    }
    const addClickHandler8 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn8(!inputBtn8)

    }
    const addClickHandler9 = (e) =>{
        setCartItems([...cartItems, setDesertData ])
        setCartCounter(cartCounter +1)
        setInputBtn9(!inputBtn9)

    }
    const modalChangeHandler = ()=>{
    setShowModal(!showModal)
    }



 return(
     <>
         <div className={classes["product-list-wrapper"]}>
             <div className={classes["product-list"]}>
                 <h1>Deserts</h1>
                 <div className={classes["wrap"]}>



                 <div className={classes["waffle-wrapper"]}>
                     <img className={classes["img-size"]} src={waffle}/><br/>
                     {! inputBtn1  ? (<button className={classes["add-list-btn"]} id={1} onClick={addClickHandler1} ><img src={add_to_cart}/> Add to your cart</button>):<div><input onChange={addInputHandler1}  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>Waffle</p>
                     <h3>Waffle with Berries</h3>
                     <p className={classes["price-tag"]}>$6.50</p>
                 </div>


                 <div className={"creme-brulee"}>
                     <img className={classes["img-size"]} src={creme_brulee}/><br/>
                     {!inputBtn2  ? (<button className={classes["add-list-btn"]} id={2} onClick={addClickHandler2} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>Crḕme brülḕe</p>
                     <h3>Vanila Bean Crḕme Brülḕe</h3>
                     <p className={classes["price-tag"]}>$7.00</p>
                 </div>

                 <div className={classes["macron-wrapper"]}>
                     <img className={classes["img-size"]} src={macron}/><br/>
                     {!inputBtn3  ? (<button className={classes["add-list-btn"]} id={3} onClick={addClickHandler3} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>Macron</p>
                     <h3>Macron mix of five</h3>
                     <p className={classes["price-tag"]}>$8</p>
                 </div>


</div>
                 <div className={classes["wrap"]}>
                 <div className={"Tiramisu"}>
                     <img className={classes["img-size"]} src={Tiramisu}/><br/>
                     {!inputBtn4  ? (<button className={classes["add-list-btn"]} id={4} onClick={addClickHandler4} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>Tiramisu</p>
                     <h3>Classic Tiramisu</h3>
                     <p className={classes["price-tag"]}>$5.50</p>
                 </div>

                 <div className={"Baklava"}>
                     <img className={classes["img-size"]} src={Baklava}/><br/>
                     {!inputBtn5  ? (<button className={classes["add-list-btn"]} id={5} onClick={addClickHandler5} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>Baklava</p>
                     <h3>Pistachio Baklava</h3>
                     <p className={classes["price-tag"]}>$4.00</p>
                 </div>

                 <div className={"Lemon-Meringue-Pie"}>
                     <img className={classes["img-size"]} src={Lemon_pie}/><br/>
                     {!inputBtn6  ? (<button className={classes["add-list-btn"]} id={6} onClick={addClickHandler6} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>Pie</p>
                     <h3>Lemon Meringue Pie</h3>
                     <p className={classes["price-tag"]}>$5.00</p>
                 </div>
</div>
                 <div className={classes["wrap"]}>
                 <div className={"Red-cake"}>
                     <img className={classes["img-size"]} src={Red_cake}/><br/>
                     {!inputBtn7  ? (<button className={classes["add-list-btn"]} id={7} onClick={addClickHandler7} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>Cake</p>
                     <h3>Red Velvet Cake</h3>
                     <p className={classes["price-tag"]}>$4.50</p>
                 </div>

                 <div className={"brownie"}>
                     <img className={classes["img-size"]} src={brownie}/><br/>
                     {!inputBtn8  ? (<button className={classes["add-list-btn"]} id={8} onClick={addClickHandler8} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} placeholder={1} type={"number"} min={1}/></div>}
                     <p className={classes["desert-names"]}>brownie</p>
                     <h3>Salted caramel Brownie</h3>
                     <p className={classes["price-tag"]}>$5.50</p>
                 </div>

                 <div className={"Lemon-Meringue-Pie"}>
                     <img className={classes["img-size"]} src={Panna_cotta}/><br/>
                     {!inputBtn9  ? (<button className={classes["add-list-btn"]} id={9} onClick={addClickHandler9} ><img src={add_to_cart}/> Add to your cart</button>):<div><input  className={classes["btn-input"]} type={"number"} placeholder={1} min={1}/></div>}
                     <p className={classes["desert-names"]}>Panna Cotta</p>
                     <h3>Vanilla Panna Cotta</h3>
                     <p className={classes["price-tag"]}>$6.50</p>
                 </div>
                 </div>
             </div>
             {showModal ? <div className={classes ["modal"]}>
                 <img className={classes["confirmed-img"]} src={order_confirmed}/>
                 <h1 className={classes["confirmed-h1"]}>Order Confirmed</h1>
                 <p className={classes["confirmed-p"]}>we hope you enjoy our food!</p>
                 <ul className={classes["confirmed-ul"]}>
                  <li></li>
                 </ul>
                 <p className={classes["confirmed-p"]}>Order Total</p>
                 <h1></h1>
                 <button className={classes["neworderbtn"]}>Start New Order</button>
             </div>: console.log("the modal is not visible")
             }

             {cartCounter === 0 ?<div className={"cart"}>
                 <h1 className={classes["cart-text-1"]}>Your Cart({cartCounter})</h1>
                 <img className={classes["empty_cart"]} src={empty_cart}/>
                 <p className={classes["cart-text-2"]}><b>Your Added items will appear here</b></p>
             </div>: <div>
                 <h1 className={classes["cart-text-1"]}>Your Cart({cartCounter})</h1>
                 <ul>
                     {cartItems.map((item, index) =>(<li key={index}>{item.name} </li>))}
                 </ul>
                 <button className={classes["finish-order-btn"]} onClick={modalChangeHandler}>Confirm order</button>
             </div>



             }


         </div>
     </>
 )
};

export default App
