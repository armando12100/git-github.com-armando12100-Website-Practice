// import Footer from "./Footer"
import worker1 from "../images/worker1.jpg"
import worker2 from "../images/worker2.jpg"
import career from "../images/career_main.jpg"

export default function Careers() {
    return (
        <>
            <div className="h1-background-color">
                <h1>Careers</h1>
            </div>
            <div className="career-main-image-container">
                <img src={career} alt="" className="career-main-image"/>
            </div>
            <div className="career-image-text">
                <h2>Voted Top 100 Best Companies To Work For 2023</h2>
            </div>
            <div className="section-container">
                <h1>Become Part of Our Team</h1>
                <p className="paragraph">At 365 Fitness, we’re always looking for enthusiastic, self-motivated, flexible 
                    individuals who share a passion for helping transform our business. As one of the fastest 
                    growing specialty gyms, we’re dedicated to hiring selfless team players from different 
                    backgrounds to influence the growth of our organization. Part of the 24 Hour Fitness Family 
                    of Businesses, 365 Fitness continuously strives to create a family culture for our 
                    Associates – driven by our vision to inspire people through exercise and .</p>
            </div>
            <div className="two-pics-container">
                <div className="worker-image1" >
                    <img src={worker1} alt="" />
                </div>
                <div className="worker-image2">
                    <img src={worker2} alt="" />
                </div>
            </div>
            <div className="section-container">
                <h1>What We Offer</h1>
                <p className="paragraph">It’s important for us to support our passionate teammates with benefits that are as 
                    competitive as they are. Here are just a few ways we provide an environment that is 
                    fulfilling and full of opportunities and rewards.</p>
                <ul className="job-perks">
                    <li className="job-perks-heading">Competetive Pay</li>
                    <li className="job-perks-heading">Work-Life Balance</li>
                    <li className="job-perks-heading">Weekly Pay</li>
                    <li className="job-perks-heading">Paid Tuition Opportunities</li>
                </ul>
            </div>
            <div className="apply-button-container">
            <button className="apply-button">Apply Now</button>
            </div>
            {/* <Footer /> */}

        </>
    )
}