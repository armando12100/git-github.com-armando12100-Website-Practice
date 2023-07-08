import { Link } from "react-router-dom"
import CategoryData from "./CategoryData";
import CategoryCards from "./CategoryCards";
import Footer from "./footer";

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
        <img className="homeImage" src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/10/09/5bbcc17874365f2e50d745f4_Long-Drive-Champion-Maurice-Allen-impact.jpg.rend.hgtvcom.966.544.suffix/1573249639048.jpeg" alt="" />
        <div className="homeImageText">
          <h3 className="imageText">Jeremy Munoz Official Golf Lessons</h3>
          <h1 className="imageText">Learn To Golf Like A Pro</h1>
          <p className="imageText">Golf The Golfipino Way With The Best Gear</p>
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
        <h3>Jeremy&#39;s Pro Trainers Will Help You Get Results Fast</h3>
      </div>
      <div className="referencesContainer">
        <div className="referencesCard">
          <img src="../images/tiger.jpg" alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Tiger Woods -</h1>
        </div>
        <div className="referencesCard">
        <img src="../images/rory.jpg" alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Rory Mcllroy -</h1>
        </div>
        <div className="referencesCard">
        <img src="../images/mickelsonwwoods.jpg" alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Phil Mickelson -</h1>
        </div>
        <div className="referencesCard">
        <img src="../images/scotty.jpg" alt="" />
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto possimus 
            laudantium culpa inventore assumenda? Dolorum mollitia quos consectetur quam.&rdquo;</p>
            <h1 className="referenceName">- Scottie Scheffler -</h1>
        </div>
      </div>

      <div className="fathers-day">
        <div className="left-half">
          <img src="../images/father1.jpg" alt="pic1" />
        </div>
          <div className="right-half">
            <img className="right" src="../images/father2.jpg" alt="pic2" />
          </div>
        </div>

        <Footer />
        </>
    )
}