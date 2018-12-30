import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js'
import CardContent from './CardContent.js'

const CardContainer = props => {
    return (
        <a href="https://www.reactjs.org" target="blank">
            <div className="card-container">
                <CardBanner />
                <CardContent />
            </div>
        </a>
    );
};

export default CardContainer;
