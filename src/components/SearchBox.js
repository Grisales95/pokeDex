import React from 'react'

const SearchBox = () => {
  return (
    <div className="container-search card p-3 text-start">
         <form>
            <label for="name" className="my-2">Search by Pokemon Name</label>
            <input type="text" className="mb-2 form-control" id="name" placeholder="Pokemon Name..."/>
          <div>
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
        <form>
            <label for="type" className="my-2">Search by Pokemon Type</label>
            <select type="text" className="mb-2 form-control" id="type">
              <option>Fire</option>
            </select>
          <div>
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
    </div>
  )
}

export default SearchBox
