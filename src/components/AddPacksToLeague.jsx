import React from 'react'
import {connect} from 'react-redux'

import PackSelection from './PackSelection'

const AddPacksToLeague = ({selectedPacks, leagueInfo, handleNext, handleBack, allPacks, handlePackSelection}) => {
  
  const displayPacks = packs => {
    if (packs){
      return packs.map(pack => <PackSelection pack={pack} handlePackSelection={handlePackSelection} />)
    }
  }

  const choosePacks = () => {
    return <div>
            <h1>Add Pack for Week {selectedPacks.length + 1}</h1>
            {displayPacks(allPacks)}
          </div>
  }

  const showSelectedPacks = () => {
    return <div>
             <h1>All Packs are Selected (you can change them later)</h1>
             {displayPacks(selectedPacks)}
          </div>
  }

  return (
    <div>
      {selectedPacks.length < leagueInfo.number_of_weeks ? choosePacks() : showSelectedPacks() }
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