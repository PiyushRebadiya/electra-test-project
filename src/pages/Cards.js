import React from "react";
import "../styles/cards.css";
import cs1Image from "../media/photo/cs1.webp";
import cs2Image from "../media/photo/cs2.webp";
import cs3Image from "../media/photo/cs3.webp";

const cardsData = [
    {
        id: 1,
        image: cs1Image,
        title: "Commercials",
        desc: "Korte reclamevideo's die een product of dienst helder in beeld brengen, geschikt voor online en tv-campagnes."
    },
    {
        id: 2,
        image: cs2Image,
        title: "Bedrijfsfilms",
        desc: "Een duidelijke video over wie jullie zijn, wat jullie doen en waar jullie voor staan – handig voor klanten, nieuwe medewerkers of investeerders."
    },
    {
        id: 3,
        image: cs3Image,
        title: "Social Video's",
        desc: "Bewegend beeld voor op social media, afgestemd op snelle communicatie met je doelgroep, bijvoorbeeld bij een actie of aankondiging."
    },
    {
        id: 1,
        image: cs1Image,
        title: "Commercials",
        desc: "Korte reclamevideo's die een product of dienst helder in beeld brengen, geschikt voor online en tv-campagnes."
    },
    {
        id: 2,
        image: cs2Image,
        title: "Bedrijfsfilms",
        desc: "Een duidelijke video over wie jullie zijn, wat jullie doen en waar jullie voor staan – handig voor klanten, nieuwe medewerkers of investeerders."
    },
    {
        id: 3,
        image: cs3Image,
        title: "Social Video's",
        desc: "Bewegend beeld voor op social media, afgestemd op snelle communicatie met je doelgroep, bijvoorbeeld bij een actie of aankondiging."
    }
];

const Cards = () => {
    // Function to determine container class based on number of items
    const getContainerClass = () => {
        const itemCount = cardsData.length;
        if (itemCount === 1) return "cards-container single-item";
        if (itemCount === 2) return "cards-container two-items";
        return "cards-container multiple-items";
    };

    return (
        <div className={getContainerClass()} style={{ marginTop: "2rem" }}>
            {cardsData.map((card) => (
                <div className="card" key={card.id}>
                    <div className="card-inner">
                        <div className="card-image">
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;