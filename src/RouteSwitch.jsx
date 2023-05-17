import App from "./App";
import Games from "./Games";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingCart from "./ShoppingCart";


export default function RouteSwitch() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}  />
            <Route path="/games" element={<Games />}  />
            <Route path="/shoppingcart" element= {<ShoppingCart />} />
        </Routes>
    </BrowserRouter>
    )
}
