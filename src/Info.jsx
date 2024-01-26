import instagram from "../Icons/instagram.png"
import facebook from "../Icons/facebook.png"
import youtube from "../Icons/youtube.png"
import tiktok from "../Icons/tik-tok.png"
import copyright from "../Icons/copyright.png"

export default function Info() {
    return (
        <>
            <section className="icons">
                <a href="https://www.instagram.com">
                <img src={instagram} alt="" />
                </a>

                <a href="https://www.facebook.com">
                <img src={facebook} alt="" />
                </a>

                <a href="https://twitter.com/Golfipino">
                <img src={youtube} alt="" />
                </a>

                <a href="https://www.tiktok.com">
                <img src={tiktok} alt="" />
                </a>
            </section>

            <section>
                <h3>365 Fitness</h3>
                <h3>123 Fake St, Los Angeles</h3>
            </section>

            <section className="diagnol">
            </section>

            <footer>
                <p>Copyright 2024 <img src={copyright} alt="" /> Armando Sanchez</p>
            </footer>

        </>
    )
}
