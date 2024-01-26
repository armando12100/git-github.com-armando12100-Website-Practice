import copyright from "../Icons/copyright.png"

export default function Footer() {
    return (
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
        <p>Copyright 2021 <img src={copyright} alt="" /> Armando Sanchez</p>
        </div>
    
      </footer>

    )
}