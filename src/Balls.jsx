import data from "./data";
import Card from "./Card";

export default function Merch() {

    const cards = data.map(item => {
        if (item.tags.includes("balls")) {
            return (
                <Card
                    key={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    price={item.price}
                />
            )
        }
    })

    return (
        <>
            <h1>Balls</h1>
            <div className="cardsContainer">
                {cards}
            </div>
        </>
    )
}