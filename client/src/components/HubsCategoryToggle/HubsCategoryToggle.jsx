import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import "./HubsCategoryToggle.scss"
import {InputGroup} from "react-bootstrap";
import hubCategories from "../../utilities/HubCategories.js";

const HubsCategoryToggle = ({onCategorySelect}) => {

    const [searchResult, setSearchResult] = useState('');

    const [selectedItem, setSelectedItem] = useState('');

    // Take database and lower case it so that any typing is case-insensitive
    const filteredCategories = hubCategories.filter(category =>
        category.toLowerCase().includes(searchResult.toLowerCase())
    );

    const handleHubClick = (category) => {
        setSelectedItem(category);
        setSearchResult(''); // Clear the filter input when an item is selected
        onCategorySelect(category); // call back function with the selected category
    };

    return (
        <Dropdown className="category-toggle">
            {/*style={{ whiteSpace: 'normal' }}*/}
            <Dropdown.Toggle variant="HHPurple">
                {selectedItem ? `${selectedItem}` : 'Pick A Category'}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100" variant="HHPurple">

                {/* Searchbar value is the search result, onChange we set the searchResult*/}
                <InputGroup className="category-search-wrapper bg-HHPurple-subtle">
                    <Form.Control
                        autoFocus
                        className="mx-2 my-2"
                        placeholder="Type to filter..."
                        onChange={(e) => setSearchResult(e.target.value)}
                        value={searchResult}
                    />
                </InputGroup>

                {filteredCategories.length > 0 ? (
                    filteredCategories.map((Category, index) => (
                        <Dropdown.Item key={index} eventKey={index} onClick={() => handleHubClick(Category)}>{Category}</Dropdown.Item>
                    ))
                ) : (
                    <Dropdown.ItemText>No results found...</Dropdown.ItemText>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default HubsCategoryToggle;
