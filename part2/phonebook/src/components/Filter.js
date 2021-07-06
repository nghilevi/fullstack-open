import React, { useState } from 'react'

const Filter = ({handleFilter}) => {

    return (
        <div>
          filter shown with: <input onChange={handleFilter} />
        </div>
    )

}

export default Filter