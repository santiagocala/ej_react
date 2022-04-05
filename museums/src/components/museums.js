import React, { useEffect, useState } from "react";

function Museums() {
    const [museums, setMuseums] = useState([]);
    const url = 'https://back-museums-uniandes.herokuapp.com/api/museums';
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setMuseums(res);
        });
    }, []);

    return (
        <div className="container">
            <div className="row text-center">
                Museums
            </div>
            <hr/>
        </div>
    );
}

export default Museums;
