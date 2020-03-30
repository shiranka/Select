import React from 'react'

const Countrys = ({countrys, checkCountry}) => {
    const countryList = 
        countrys.map(country =>{
            return (
                <div className="collection-item" key={country.id}>
                <input onChange={()=>{checkCountry(country.id)}} type="checkbox" checked={country.select}></input>
                <span>{country.name}</span>
                {/* <button onClick={() => {deleteTodo(todo.id)}}>x</button> */}
                </div>
            )
        })
            
    return (
        <div className="countrys collection"> 
        {countryList}
        </div>
    
    )
}

export default Countrys