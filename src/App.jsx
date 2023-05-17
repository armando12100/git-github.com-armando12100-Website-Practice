import Header from "./Header";
import "./styles.css"

export default function App() {


  return (
    <>
      <Header />
      <div className="home-page-container">
        <section className="left">
          <p className="tagline">Best Golfer of The Year</p>
          <p>Golfipino (n): A Filipino who loves to Golf! 🏌🏻🇵🇭⛳️ </p>
          <button className="enroll">Enroll Now!</button>
        </section>
        <section className="right">
          <img className="jeremy" src="../Icons/jeremy.jpg" alt="" />
        </section>
      </div>

      <section className="diagnol">
            </section>

      <footer>
          <p>Copyright 2021 <img src="../Icons/copyright.png" alt="" /> Armando Sanchez</p>
      </footer>

    </>
  )
}
