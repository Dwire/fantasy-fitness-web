import React from 'react'

const PackSelection = ({pack, handlePackSelection, origin}) => {
  return (
    <div className={`pack-tile ${origin}`}>
      <h1>{pack.attributes.name}</h1>
      <p>{pack.attributes.description}</p>
      <img src={pack.attributes.image_url} alt="wo pack"/>
      <button onClick={() => handlePackSelection(pack)} >+</button>
    </div>
  )
}


export default PackSelection
