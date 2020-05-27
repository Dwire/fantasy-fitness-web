import React from 'react'

const AddPacksToLeague = ({handleNext, handleBack}) => {
  return (
    <div>
      <h1>Add Packs</h1>
      <button onClick={handleBack}>BACK</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}


export default AddPacksToLeague