import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

export default function Notfound(props) {

    return(
        <>
       <svg xmlns="http://www.w3.org/2000/svg" width="380" height="500" viewBox="0 0 837 1045"><g fill="none"><path d="M353 9L626.7 170 626.7 487 353 642 79.3 487 79.3 170 353 9Z" style={{stroke:"#007FB2"}}/><path d="M78.5 529L147 569.2 147 648.3 78.5 687 10 648.3 10 569.2 78.5 529Z" style={{stroke:"#EF4A5B"}}/><path d="M773 186L827 217.5 827 279.6 773 310 719 279.6 719 217.5 773 186Z" style={{strke:"#795D9C"}}/><path d="M639 529L773 607.8 773 763.1 639 839 505 763.1 505 607.8 639 529Z" style={{stroke:"#F2773F"}}/><path d="M281 801L383 861 383 979.2 281 1037 179 979.2 179 861 281 801Z" style={{stroke:"#36B455"}}/></g></svg>
        <div className="message-box">
            <h1>404</h1>
            <p>Az oldal nem található, vagy hibás a kapcsolat</p>
            <div>
                <Link to="/reload">
                    <span class="nbtn btn">Főoldalra</span>
                </Link>            
            </div>
        </div>
        </>        
    );
}