import ShoesData from "./ShoesData"
import Card from "./Card"

export default function Merch() {

    const cards = ShoesData.map(item => {
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
            <h1>Shoes</h1>
            <div className="cardsContainer">
                {cards}
            </div>
        </>
    )
}
