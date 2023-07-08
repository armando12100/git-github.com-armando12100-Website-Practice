import Footer from "./Footer"

export default function Careers() {
    return (
        <>
            <div className="h1-background-color">
                <h1>Careers</h1>
            </div>
            <div className="career-main-image-container">
                <img src="../images/career_main.jpg" alt="" className="career-main-image"/>
            </div>
            <div className="career-image-text">
                <h2>Voted Top 100 Best Companies To Work For 2023</h2>
            </div>
            <div className="section-container">
                <h1>Become Part of Our Birdie Team</h1>
                <p className="paragraph">At Golfipino, we’re always looking for enthusiastic, self-motivated, flexible 
                    individuals who share a passion for helping transform our business. As one of the fastest 
                    growing specialty retailers, we’re dedicated to hiring selfless team players from different 
                    backgrounds to influence the growth of our organization. Part of the Jeremy Munoz Family 
                    of Businesses, Golfipino continuously strives to create a family culture for our 
                    Associates – driven by our vision to inspire people through golf and tennis.</p>
            </div>
            <div className="two-pics-container">
                <div>
                    <img src="../images/golf-instructor.jpeg" alt="" />
                </div>
                <div>
                    <img src="../images/golf-worker.jpeg" alt="" />
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
            <Footer />

        </>
    )
}