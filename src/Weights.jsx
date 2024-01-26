import WeightsData from "./WeightsData"
import Card from "./Card"

export default function Merch() {

    const cards = WeightsData.map(item => {
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
            <h1>Weights</h1>
            <div className="cardsContainer">
                {cards}
            </div>
        </>
    )
}
