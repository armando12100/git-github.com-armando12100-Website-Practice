import Header from "./Header"
import data from "./data"
import Card from "./Card"


export default function Games() {

    const cards = data.map(item => {
        console.log(item)
        return (
            <Card 
                key={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
                price={item.price}
            />
        )
    })

    return (
        <>
            <Header />
            <div className="cardsContainer">
                {cards}
            </div>
        </>
    )
}
