import './SearchMenu.css';
import { Row, Col, Card, Modal, Button, Form} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import SearchIcon from '../../assets/search-menu/search.svg';


const SearchMenu = () => {

    return (
        <div className="search-background">
            <div className='search-container'>
                <img src={SearchIcon} alt="search" className= "search-icon" />
                <Form.Control type="text" placeholder="Search" style={{ border: 'none',width:'66vw',padding:'0px',height:'2em'}}></Form.Control>
            </div>
            <div className='search-selection'>
                <Form.Check className="search-radio hub-radio" type="radio" id="searchHub" label={<>Hubs</>} name="searchSelection" />
                <Form.Check className="search-radio" type="radio" id="searchMarket" label={<>Market</>} name="searchSelection" />
            </div>
        </div>
    );
}

export default SearchMenu;