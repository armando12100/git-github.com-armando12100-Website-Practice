import App from "./App";
import Merch from "./Merch";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Info from "./Info";
import Contact from "./Contact";
import Careers from "./Careers";
import SignIn from "./SignIn";


export default function RouteSwitch() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}  />
            <Route path="/merch" element={<Merch />}  />
            <Route path="/info" element= {<Info />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/careers" element= {<Careers />} />
            <Route path="/signIn" element= {<SignIn />} />
        </Routes>
    </BrowserRouter>
    )
}
