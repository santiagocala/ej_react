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

    function renderMuseums(pMuseums){
        for(let i = 0; i < pMuseums.length; i++){
            
        }
    }

    return (
        <div className="container">
            <div className="row text-center">
                Museums
            </div>
            <hr/>
            <div className='container'>
                

            </div>
        </div>
    );
}

export default Museums;
