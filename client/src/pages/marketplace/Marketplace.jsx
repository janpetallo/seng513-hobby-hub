import React from "react";
import { useState } from "react";
import "./Marketplace.scss";
import ItemCard from "../../components/marketplace/itemcard/ItemCard.jsx";

const Marketplace = () => {

    const items = [
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"The Hobbit",
            description: "The Hobbit",
            image:
                [
                    "https://resizing.flixster.com/fHUZr99k4HWii_jJwo4cA4v0Bb8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8992211_p_v8_bh.jpg",
                    "https://m.media-amazon.com/images/I/71S7Z+YhJFL._AC_UF1000,1000_QL80_.jpg"
                ],
            price: 100,
            condition:"New",
            tag:"Electronics",
            location:"Location 1"
        },
        {
            username: "user2",
            email:"user1@email.com",
            phone:1234567890,
            title:"Gyarados",
            description: "Gyarados",
            image:[
                "https://m.media-amazon.com/images/I/51CXJ8Rl7UL._AC_SL1500_.jpg"
            ],
            price: 3.50,
            condition:"New",
            tag:"Pokemon",
            location:"Location 1"
        },
        {
            username: "user3",
            email:"user1@email.com",
            phone:1234567890,
            title:"Mushroom of the Woods",
            description: "Mushroom of the Woods",
            image: ["https://www.nrafamily.org/media/rfziyd0g/mushroom-foraging-lede.jpg"],
            price: 3.50,
            condition:"New",
            tag:"Mushroom Hunters",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"Fishing Rod",
            description: "Fishing Rod",
            image:["https://www.discoverboating.com/sites/default/files/how-to-fish-for-beginners.jpg"],
            price: 25.50,
            condition:"New",
            tag:"Fishing",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"Baseball Gloves",
            description: "Baseball Gloves",
            image:["https://sportsreplay.ca/cdn/shop/products/Wilson-A700-Baseball-Glove-Wilson-Sports-Replay-Sports-Excellence_940x.jpg?v=1682004023"],
            price: 15.50,
            condition:"New",
            tag:"Baseball",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"The Hobbit",
            description: "The Hobbit",
            image:
                [
                    "https://resizing.flixster.com/fHUZr99k4HWii_jJwo4cA4v0Bb8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8992211_p_v8_bh.jpg",
                    "https://m.media-amazon.com/images/I/71S7Z+YhJFL._AC_UF1000,1000_QL80_.jpg"
                ],
            price: 100,
            condition:"New",
            tag:"Electronics",
            location:"Location 1"
        },
        {
            username: "user2",
            email:"user1@email.com",
            phone:1234567890,
            title:"Gyarados",
            description: "Gyarados",
            image:[
                "https://crystal-cdn4.crystalcommerce.com/photos/6772128/430px-GyaradosPok%C3%A9monGO22.jpg"
            ],
            price: 3.50,
            condition:"New",
            tag:"Pokemon",
            location:"Location 1"
        },
        {
            username: "user3",
            email:"user1@email.com",
            phone:1234567890,
            title:"Mushroom of the Woods",
            description: "Mushroom of the Woods",
            image: ["https://www.nrafamily.org/media/rfziyd0g/mushroom-foraging-lede.jpg"],
            price: 3.50,
            condition:"New",
            tag:"Mushroom Hunters",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"Fishing Rod",
            description: "Fishing Rod",
            image:["https://www.discoverboating.com/sites/default/files/how-to-fish-for-beginners.jpg"],
            price: 25.50,
            condition:"New",
            tag:"Fishing",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"Baseball Gloves",
            description: "Baseball Gloves",
            image:["https://sportsreplay.ca/cdn/shop/products/Wilson-A700-Baseball-Glove-Wilson-Sports-Replay-Sports-Excellence_940x.jpg?v=1682004023"],
            price: 15.50,
            condition:"New",
            tag:"Baseball",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"The Hobbit",
            description: "The Hobbit",
            image:
                [
                    "https://resizing.flixster.com/fHUZr99k4HWii_jJwo4cA4v0Bb8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8992211_p_v8_bh.jpg",
                    "https://m.media-amazon.com/images/I/71S7Z+YhJFL._AC_UF1000,1000_QL80_.jpg"
                ],
            price: 100,
            condition:"New",
            tag:"Electronics",
            location:"Location 1"
        },
        {
            username: "user2",
            email:"user1@email.com",
            phone:1234567890,
            title:"Gyarados",
            description: "Gyarados",
            image:[
                "https://crystal-cdn4.crystalcommerce.com/photos/6772128/430px-GyaradosPok%C3%A9monGO22.jpg"
            ],
            price: 3.50,
            condition:"New",
            tag:"Pokemon",
            location:"Location 1"
        },
        {
            username: "user3",
            email:"user1@email.com",
            phone:1234567890,
            title:"Mushroom of the Woods",
            description: "Mushroom of the Woods",
            image: ["https://www.nrafamily.org/media/rfziyd0g/mushroom-foraging-lede.jpg"],
            price: 3.50,
            condition:"New",
            tag:"Mushroom Hunters",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"Fishing Rod",
            description: "Fishing Rod",
            image:["https://www.discoverboating.com/sites/default/files/how-to-fish-for-beginners.jpg"],
            price: 25.50,
            condition:"New",
            tag:"Fishing",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            title:"Baseball Gloves",
            description: "Baseball Gloves",
            image:["https://sportsreplay.ca/cdn/shop/products/Wilson-A700-Baseball-Glove-Wilson-Sports-Replay-Sports-Excellence_940x.jpg?v=1682004023"],
            price: 15.50,
            condition:"New",
            tag:"Baseball",
            location:"Location 1"
        }
    ]

    return(
        <>
            <div className="marketplace-wrapper">
                {/* Map over the data array */}
                {items.map(item => (
                    // Render the ItemComponent for each item in the array
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
export default Marketplace