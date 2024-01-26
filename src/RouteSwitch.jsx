import App from "./App";
import Merch from "./Merch";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Info from "./Info";
import Contact from "./Contact";
import Careers from "./Careers";
import SignIn from "./SignIn";
import ProteinPowder from "./ProteinPowder"
import Weights from "./Weights"
import Apparel from "./Apparel"
import Shoes from "./Shoes"
import Gear from "./Gear"
import Cart from "./Cart"
import Profile from "./Profile"
import { CartProvider } from "./CartContext";
import Header from "./Header";


export default function RouteSwitch() {
    return (
    <CartProvider>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />}  />
                <Route path="/merch" element={<Merch />}  />
                <Route path="/info" element= {<Info />} />
                <Route path="/contact" element= {<Contact />} />
                <Route path="/careers" element= {<Careers />} />
                <Route path="/signIn" element= {<SignIn />} />
                <Route path="/proteinpowder" element= {<ProteinPowder />} />
                <Route path="/weights" element= {<Weights />} />
                <Route path="/apparel" element= {<Apparel />} />
                <Route path="/shoes" element= {<Shoes />} />
                <Route path="/gear" element= {<Gear />} />
                <Route path="/cart" element= {<Cart />} />
                <Route path="/profile" element= {<Profile />} />
            </Routes>
        </BrowserRouter>
    </CartProvider>
    )
}
