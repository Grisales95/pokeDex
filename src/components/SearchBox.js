import React from 'react'

const SearchBox = () => {
  return (
    <div className="">
      <form>
          <input type="text" className="mb-2 form-control"/>
        <div>
          <button className="btn btn-outline-success">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBox
