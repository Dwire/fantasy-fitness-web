import React from 'react'

const AddPlayersToLeague = ({currentPlayer, players, handleBack, handleCurrentPlayerAdd, handleCurrentPlayerInputChange, createLeagueBtn}) => {

// always create 1 more input then there are players 
  const listPlayersPendingAdd = () => {
  return players.map((player, i) => <p>Player {i + 1}: {player}</p>)
  }

  return (
    <div>
      <h1>Add Players</h1>
      <p>can only add players who have an account set up</p>
      <p>You Can always Add Players after the league has been created</p>
        {listPlayersPendingAdd()}
      <form onSubmit={handleCurrentPlayerAdd}>
        <label for='add-player'>Add Player</label>
        <input 
          type="text" 
          id='add-player' 
          placeholder='Enter Username'
          name='currentPlayer' 
          value={currentPlayer} 
          onChange={handleCurrentPlayerInputChange}/>
          <input type="submit" value="+"/>
      </form>
      <br/>
      <br/>.
      <br/>
      <button onClick={handleBack}>BACK</button>
      <button onClick={createLeagueBtn}>Fucking Send It</button>
    </div>
  )
}

export default AddPlayersToLeague