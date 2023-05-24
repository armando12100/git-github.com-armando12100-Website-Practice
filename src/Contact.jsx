import Header from "./Header"


export default function Contact() {
    return (
        <>
            <Header />
            <h1 className="bold">Contact Us</h1>
            <div className="contact-section">
                <div>
                    <h2>Questions Or Concerns?</h2>
                    <p><span className="bold">Contact us at:</span> 909-123-4567</p>
                </div>
                <div>
                    <h2>Customer Service Hours</h2>
                    <p><span className="bold">M-F:</span> 9:00AM - 5:00PM ET</p>
                    <p><span className="bold">Weekends:</span> 10:00AM - 5:00PM ET</p>
                </div>
            <div>
                <h2>Email</h2>
                <p><span className="bold">Email us at:</span> jeremybearemy@gmail.com</p>
                <p><span className="bold">Note:</span> Email responses will take longer to respond to</p>
            </div>
            </div>
            <footer>
        <div className="services">

          <div className="footerSection"> 
          <h2>Customer Service</h2>
          <ul className="footerList">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping Information</li>
            <li>Return Information</li>
            </ul>
          </div>

          <div className="footerSection">
            <h2>Company Information</h2>
            <ul className="footerList">
              <li>
                About Us
              </li>
              <li>
                Careers
              </li>
              <li>
                Terms of Use
              </li>
              <li>
                Retail Locations
              </li>
            </ul>
          </div>
          
          <div className="footerSection">
            <h2>Become A Member</h2>
            <ul className="footerList">
              <li>
                Sign Up
              </li>
              <li>
                Terms & Conditions
              </li>
              <li>
                Club Perks
              </li>
              <li>
                Manage My Account
              </li>
            </ul>
          </div>

        </div>

        <div className="copyright">
        <p>Copyright 2021 <img src="../Icons/copyright.png" alt="" /> Armando Sanchez</p>
        </div>
    
      </footer>
        </>
    )
}