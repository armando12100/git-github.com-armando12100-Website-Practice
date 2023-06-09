import Header from "./Header"
import Footer from "./footer"

export default function SignIn() {
    return (
        <>
            <Header />
            <form action="">
                <div className="form-header">
                    <img src="../Icons/profilepic.png" alt="" className="sign-up-profile-pic"/>
                    <h1>Create Account <span className="small">* Required</span></h1>
                </div>
                <div className="form-container">
                    <div className="labels">
                        <label htmlFor="firstname">First Name *</label>
                        <label htmlFor="lastname">Last Name *</label>
                        <label htmlFor="email">Email *</label>
                        <label htmlFor="confirmemail">Confirm Email *</label>
                        <label htmlFor="number">Phone Number *</label>
                        <label htmlFor="password">Password*</label>
                        <label htmlFor="confirmpassword">Confirm Password *</label>
                    </div>
                    <div className="forms">
                    <input type="text" name="firstname" id="firstname" placeholder="Enter First Name"/>
                    <input type="text" name="lastname" id="lastname" placeholder="Enter Last Name"/>
                    <input type="email" name="email" id="email" placeholder="Enter Email"/>
                    <input type="email" name="confirmemail" id="confirmemail" placeholder="Confirm Email"/>
                    <input type="number" name="number" id="number" placeholder="Enter Phone Number"/>
                    <input type="password" name="password" id="password" placeholder="Enter Password"/>
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="sign-up-button-container">
                <button className="sign-up-button">Submit</button>
                </div>
            </form>

            <Footer />
        </>
    )
}