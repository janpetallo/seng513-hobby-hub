import React, {useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import "./PostToggle.scss"
import {InputGroup} from "react-bootstrap";
import newRequest from "../../utilities/newRequest.js";

const PostToggle = ({onHubSelect}) => {

    const [searchResult, setSearchResult] = useState('');

    const [selectedItem, setSelectedItem] = useState('');

    const [hubs, setHubs] = useState([]);

    // get all the hubs when this component launches
    useEffect(() => {
        // Fetch hubs data when component mounts
        fetchHubs();
    }, []);

    // function to get all the hubs from the back end
    const fetchHubs = async () => {
        try {
            // Fetch hubs from your API or database
            const response = await newRequest.get("/hubs/getAllHubs");
            if (response.status !== 200) {
                throw new Error("Failed to fetch all hubs");
            }
            const data = await response.data;


            // Extract titles of the hubs and set them to the state
            const hubNames = data.map(hub => hub.hubName);
            setHubs(hubNames); // Set the fetched hub titles to the state
        } catch (error) {
            console.error('Error fetching hubs:', error);
        }
    };


    // Take database and lower case it so that any typing is case-insensitive
    const filteredHubs = hubs.filter(hub =>
        hub.toLowerCase().includes(searchResult.toLowerCase())
    );

    const handleHubClick = (hub) => {
        setSelectedItem(hub);
        setSearchResult(''); // Clear the filter input when an item is selected
        onHubSelect(hub); // Lift the state up to the parent component
    };

    return (
        <Dropdown className="post-toggle">
            {/*style={{ whiteSpace: 'normal' }}*/}
            <Dropdown.Toggle variant="HHPurple">
                {selectedItem ? `Posting to Hub: ${selectedItem}` : 'Pick A Hub'}
            </Dropdown.Toggle>

            <Dropdown.Menu variant="HHPurple">

                {/* Searchbar value is the search result, onChange we set the searchResult*/}
                <InputGroup className="post-search-wrapper">
                    <Form.Control
                        autoFocus
                        className="mx-2 my-2"
                        placeholder="Type to filter..."
                        onChange={(e) => setSearchResult(e.target.value)}
                        value={searchResult}
                    />
                </InputGroup>

                {filteredHubs.length > 0 ? (
                    filteredHubs.map((Hub, index) => (
                        <Dropdown.Item key={index} eventKey={index} onClick={() => handleHubClick(Hub)}>{Hub}</Dropdown.Item>
                    ))
                ) : (
                    <Dropdown.ItemText>No results found...</Dropdown.ItemText>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default PostToggle;
