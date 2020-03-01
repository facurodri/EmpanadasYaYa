import React from 'react';
import Card from './Card';

const Body = () => {
    return (
    <div>
        <img src="./images/empanadas2.jpg" className="img-fluid" alt="Empanadas Main" />
        <h2 className="title">Empanadas</h2>
        <div className="container">
       <Card />
       <Card />
       <Card />
        </div>
        <br/>
        </div>
    );
}
export default Body;
