import React from 'react'

const FilterFooter = () => {
  return (
    <div className='FilterFooter'>
        <div>
          2 items
        </div>
        <div>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default FilterFooter