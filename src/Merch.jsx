import data from "./data"
import Card from "./Card"

export default function Merch() {

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                id = {item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
                price={item.price}
            />
        )
    })

    return (
        <>
            <div className="cardsContainer">
                {cards}
            </div>
        </>
    )
}
