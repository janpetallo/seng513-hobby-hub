import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./ConditionToggle.scss"
import Conditions from "../../utilities/Conditions.js";
const ConditionToggle = ({setSelectedConditionO}) => {

    const [selectedCondition, setSelectedCondition] = useState('');

    const handleClick = (condition) => {
        setSelectedCondition(condition);
        setSelectedConditionO(condition)
    };

    return (
        <Dropdown className="condition-toggle">
            <Dropdown.Toggle variant="HHPurple">
                {selectedCondition ? `${selectedCondition}` : 'Item Condition'}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100" variant="HHPurple">
                {Conditions.map((condition, index) => (
                    <Dropdown.Item key={index} eventKey={index} onClick={() => handleClick(condition)}>
                        {condition}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ConditionToggle;
