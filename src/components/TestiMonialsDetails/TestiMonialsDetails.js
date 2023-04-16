import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
            <img className="hello" src={img} alt="event"/>
        </div>
    );
};

export default TestiMonialsDetails;