import './SearchMenu.css';
import { Row, Col, Card, Modal, Button, Form} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import SearchIcon from '../../assets/search-menu/search.svg';


const SearchMenu = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Hubs');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.id === "searchHub" ? "Hubs" : "Market");
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search-results/search?query=${searchQuery}&category=${selectedCategory}`);
    };

    const handleEnterSearch = (event) => {
        if (event.keyCode === 13) {
            handleSearchSubmit(event);
        }
    }

    return (
        <div className="search-background">
            <div className='search-container'>
                <img src={SearchIcon} alt="search" className= "search-icon" />
                <Form.Control type="text" placeholder="Search" style={{ border: 'none',width:'66vw',padding:'0px',height:'2em'}} value={searchQuery} onChange={handleSearchChange} onKeyDown={handleEnterSearch} />
            </div>
            <div className='search-selection'>
                <Form.Check className="search-radio hub-radio" type="radio" id="searchHub" label={<>Hubs</>} name="searchSelection" onClick={handleCategoryChange} defaultChecked/>
                <Form.Check className="search-radio" type="radio" id="searchMarket" label={<>Market</>} name="searchSelection" onClick={handleCategoryChange}/>
            </div>
        </div>
    );
}

export default SearchMenu;