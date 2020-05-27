import React from 'react'
import {connect} from 'react-redux'

import PackSelection from './PackSelection'

const AddPacksToLeague = ({selectedPacks, handleNext, handleBack, allPacks, handlePackSelection}) => {
  const displayPacks = () => {
    return allPacks.map(pack => <PackSelection pack={pack} handlePackSelection={handlePackSelection} />)
  }

  return (
    <div>
      <h1>Add Pack for Week {selectedPacks.length + 1}</h1>
      {displayPacks()}
      <button onClick={handleBack}>BACK</button>
      <button onClick={handleNext}>Next</button>
      <p>Next step see the workouts in the packs</p>
      <p>Next next step be able to modify (add remove) them</p>
    </div>
  )
}

const mapStateToProps = state => {
 return {
   allPacks: state.packs.allPacks
 } 
}

export default connect(mapStateToProps, null)(AddPacksToLeague)