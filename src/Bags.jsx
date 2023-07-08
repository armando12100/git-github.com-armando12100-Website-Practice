import data from "./data";
import Card from "./Card";

export default function Merch() {

    const cards = data.map(item => {
        if (item.tags.includes("bag")) {
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
            <h1>Bags</h1>
            <div className="cardsContainer">
                {cards}
            </div>
        </>
    )
}