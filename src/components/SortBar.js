import React from 'react'

const SortBar = (props) => {
  return(  <form onSubmit={props.addSort}>
        <select onChange={props.changeCategory}>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
        </select>
        <input type="submit" value="Add Filter" />
  </form> )
}

export default SortBar