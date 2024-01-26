import { Link } from "react-router-dom"
import CategoryData from "./CategoryData";
import CategoryCards from "./CategoryCards";
import Footer from "./Footer";
import maletrainer1 from "../images/maletrainer1.png"
import maletrainer2 from "../images/maletrainer2.jpg"
import femaletrainer1 from "../images/femaletrainer1.jpg"
import femaletrainer2 from "../images/femaletrainer2.jpeg"
import footer1 from "../images/workingoutfooter1.jpg"
import footer2 from "../images/workingoutfooter2.jpg"
import heroPic from "../images/MainPicture.jpg"

export default function HomePage() {
    const categoryCards = CategoryData.map(item => {
        return (
            <CategoryCards 
                key={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
                price={item.price}
                link={item.link}
            />
        )
    })
    return (
        <>
        <div className="homeImageContainer">
        <img className="homeImage" src={heroPic} alt="" />
        <div className="homeImageText">
          <h3 className="imageText">Personal Trainers Are Available!</h3>
          <h1 className="imageText">Learn To Lift Like A Pro</h1>
          <p className="imageText">Shop 365 With The Best Gear</p>
          <button>
            <Link to="/merch" className="link">Shop Now</Link>
          </button>
        </div>
      </div>
      <div>
        <Link to="/merch" className="giantButton">
        <button className="hiddenTextButton">Shop Now</button>
        </Link>
      </div>
      <div className="category">
        {categoryCards}
      </div>
      <div className="testimonial">
        <h1>From Beginner To Pro:</h1>
        <h3>365 Pro Fitness Training Will Help You Get Results Fast</h3>
      </div>
      <div className="referencesContainer">
        <div className="referencesCard">
          <img src={maletrainer1} alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Paul Andrews -</h1>
        </div>
        <div className="referencesCard">
        <img src={femaletrainer1} alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Rosa Lopez -</h1>
        </div>
        <div className="referencesCard">
        <img src={femaletrainer2} alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Kelsey Wheeler -</h1>
        </div>
        <div className="referencesCard">
        <img src={maletrainer2} alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Scottie Schefftlen -</h1>
        </div>
      </div>

      <div className="fathers-day">
        <div className="left-half">
          <img src={footer1} alt="pic1" />
        </div>
          <div className="right-half">
            <img className="right" src={footer2} alt="pic2" />
          </div>
        </div>

        <Footer />
        </>
    )
}