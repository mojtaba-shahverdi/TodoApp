import React, { useState } from 'react'
import './FilterFooter.scss'

const FilterFooter = ({ tasks, updateFilter }) => {
  const [filter, setFilter] = useState('all')

  const handleFilter = (filterName) => {
    setFilter(filterName)
    updateFilter(filterName)
  }

  return (
    <div className='FilterFooter'>
      <div className='FilterFooter__countItems'>
        {tasks.length} Items
      </div>
      <div className='FilterFooter__Filters'>
        <ul>
          <li>
            <button 
            onClick={() => handleFilter('all')}
            className={filter === 'all' ? 'active' : ''}
            >
              All
            </button>
          </li>
          <li>
            <button 
            onClick={() => handleFilter('active')}
            className={filter === 'active' ? 'active' : ''}
            >
              Active
            </button>
          </li>
          <li>
            <button 
            onClick={() => handleFilter('completed')} 
            className={filter === 'completed' ? 'active' : ''}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterFooter