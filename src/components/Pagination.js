import React from 'react'

const Pagination = ({ perPage, totalPokemons, paginate, color}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPokemons / perPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className="d-flex justify-content-center ">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key = {number} className="page-item">
                        <a onClick={() =>paginate(number)} href="##" className="btn mx-1 " style={{background:`${color}`}}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
