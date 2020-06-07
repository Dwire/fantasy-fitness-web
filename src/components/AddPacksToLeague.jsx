import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'

import PackSelection from './PackSelection'

const AddPacksToLeague = ({selectionComplete, selectedPacks, leagueInfo, handleNext, handleBack, allPacks, handlePackSelection}) => {
  
  const displayPacks = (packs, origin) => {
    if (packs){
      return packs.map(pack => <PackSelection pack={pack} handlePackSelection={handlePackSelection} origin={origin}/>)
    }
  }

  const choosePacks = () => {
    return <React.Fragment>
            {!selectionComplete && displayPacks(allPacks, 'main')}
          </React.Fragment>
  }

  const showSelectedPacks = () => {
    return <React.Fragment>
             {/* <h1>All Packs are Selected (you can change them later)</h1> */}
             {!!selectionComplete ? displayPacks(selectedPacks, 'pack-tile-selected') : displayPacks(selectedPacks, 'selected')}
          </React.Fragment>
  }

  return (
    <div className='pack-selection-container'>
      <div className='grid-main-header'>
        {!!selectionComplete ? 
          <h1> All Packs Slected Hit Next to Continue</h1>
          :
          <h1>Choose Pack for Week {selectedPacks.length + 1}</h1>
         }
      </div>
      <div className='grid-selected-header'>
        {!!selectionComplete ? 
          <h1>You Can Edit Later</h1>
          :
          <h1> Packs You have Chosen</h1>
         }
      </div>
      <div className='grid-main'>
        {choosePacks()}
      </div>
      <div className={`grid-selected ${selectionComplete}-body`}>{showSelectedPacks()}
      </div>
      <Button onClick={handleBack} content='Pev' icon='left arrow' labelPosition='left' />
      <Button onClick={handleNext} content='Next' icon='right arrow' labelPosition='right' />
      {/* {selectedPacks.length < leagueInfo.number_of_weeks ? choosePacks() : showSelectedPacks() }
      {displayPacks()}
      <button onClick={handleBack}>BACK</button>
      <button onClick={handleNext}>Next</button>
      <p>Next step see the workouts in the packs</p>
      <p>Next next step be able to modify (add remove) them</p> */}
    </div>
  )
}

const mapStateToProps = state => {
 return {
   allPacks: state.packs.allPacks
 } 
}

export default connect(mapStateToProps, null)(AddPacksToLeague)