
import Card from "./Card"
import ProteinPowderData from "./ProteinPowderData"

export default function Merch() {

    const cards = ProteinPowderData.map(item => {
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
            <h1>Protein Powder</h1>
            <div className="cardsContainer">
                {cards}
            </div>
        </>
    )
}
