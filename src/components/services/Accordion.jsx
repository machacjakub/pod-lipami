import React, { useState } from 'react';
import './Accordion.css';
import {ChevronRight} from "../icons/ChevronRight.jsx";

export const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button className="accordion-title" onClick={toggleAccordion}>
                <ChevronRight className={`chevron-icon ${isOpen ? 'rotate' : ''}`}/>
                <span>{title}</span>
            </button>
            <div
                className="accordion-content"
                style={{
                    maxHeight: isOpen ? '10000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease',
                }}
            >
                <div className="accordion-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};