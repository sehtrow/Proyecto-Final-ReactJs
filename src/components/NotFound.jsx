import React from 'react';
import Button from './CommonButton';
import '../assets/styles/components/NotFound.css';

const NotFound = () => (
    <>                
        
        <h1 className="title_notfound">404 Error Page Not Found</h1>        
        <section className="error-container">
            <span className="four"><span className="screen-reader-text">4</span></span>
            <span className="zero"><span className="screen-reader-text">0</span></span>
            <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
            <Button className="more-link" type="back" to="/" /> 
        </div>          
        
    </>
);

export default NotFound;