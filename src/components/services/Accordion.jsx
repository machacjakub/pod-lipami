import React, { useId, useState } from 'react';
import './Accordion.css';
import {ChevronRight} from "../icons/ChevronRight.jsx";

export const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const id = useId();
    const buttonId = `${id}-button`;
    const panelId = `${id}-panel`;

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item glass ${isOpen ? 'open' : ''}`}>
            <h2 className="accordion-heading">
                <button
                    type="button"
                    id={buttonId}
                    className="accordion-title"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={toggleAccordion}
                >
                    <span>{title}</span>
                    <span className="accordion-icon" aria-hidden="true">
                        <ChevronRight className="chevron-icon"/>
                    </span>
                </button>
            </h2>
            <div id={panelId} className="accordion-content" role="region" aria-labelledby={buttonId}>
                <div className="accordion-clip">
                    <div className="accordion-inner">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
