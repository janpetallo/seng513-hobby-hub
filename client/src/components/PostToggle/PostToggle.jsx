import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import "./PostToggle.scss"

const PostToggle = () => {

    const [searchResult, setSearchResult] = useState('');

    const [selectedItem, setSelectedItem] = useState('');

    const hubs = ['Bimmers', 'Hololive', 'MushroomHunters', 'Speedrunners'];

    // Take database and lower case it so that any typing is case-insensitive
    const filteredHubs = hubs.filter(hub =>
        hub.toLowerCase().includes(searchResult.toLowerCase())
    );

    const handleHubClick = (hub) => {
        setSelectedItem(hub);
        setSearchResult(''); // Clear the filter input when an item is selected
    };

    return (
        <Dropdown className="post-toggle">
            {/*style={{ whiteSpace: 'normal' }}*/}
            <Dropdown.Toggle variant="HHPurple">
                {selectedItem ? `Posting to Hub: ${selectedItem}` : 'Pick A Hub'}
            </Dropdown.Toggle>

            <Dropdown.Menu variant="HHPurple">

                {/* Searchbar value is the search result, onChange we set the searchResult*/}
                <Form.Control
                    autoFocus
                    className="mx-2 my-2"
                    placeholder="Type to filter..."
                    onChange={(e) => setSearchResult(e.target.value)}
                    value={searchResult}
                />

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
