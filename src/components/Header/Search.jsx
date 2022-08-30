import React from 'react';
import './Search.css'

function Search({changer, submit, sman}) {

  // Api side

  return (
    <div className='search'>
      <form onSubmit={sman}>
        <input type="search" className='searchbox' onChange={changer} onKeyPress={submit} />
        {/* <i className="fas fa-search fa-2x searchicon"></i> */}
      </form>
    </div>
  )
}

export default Search