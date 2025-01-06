import React, { useState } from 'react';
import './Accordion.css';

export const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={toggleAccordion}>
                {title}
            </button>
            <div
                className="accordion-content"
                style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                }}
            >
                <div className="accordion-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};