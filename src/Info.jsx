import Header from "./Header"


export default function Info() {
    return (
        <>
            <Header />
            <section className="icons">
                <a href="https://www.instagram.com/golfipino/">
                <img src="../Icons/instagram.png" alt="" />
                </a>
                <a href="https://www.facebook.com/Alphamod">
                <img src="../Icons/facebook.png" alt="" />
                </a>
                <img src="../Icons/youtube.png" alt="" />
                <a href="https://twitter.com/Golfipino">
                <img src="../Icons/twitter.png" alt="" />
                </a>
                <a href="https://www.tiktok.com/@golfipino">
                <img src="../Icons/tik-tok.png" alt="" />
                </a>
            </section>

            <section>
                <h3>Golfipino</h3>
                <h3>123 Fake St, Los Angeles</h3>
            </section>

            <section className="diagnol">
            </section>

            <footer>
                <p>Copyright 2021 <img src="../Icons/copyright.png" alt="" /> Armando Sanchez</p>
            </footer>

        </>
    )
}
