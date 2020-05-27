import React from 'react'

const AddLeague = ({handleNext, league, handleLeageInputChange}) => {
  return (
    <div>
      <h1>Add League</h1>
      <form>
        <label htmlFor="laeagueName">League Name</label>
        <input onChange={handleLeageInputChange} type="text" name="name" id="leagueName" value={league.name} />

        <label htmlFor="laeagueMotto">League Motto</label>
        <input onChange={handleLeageInputChange} type="text" name="motto" id="leagueMotto" value={league.motto} />

        <label htmlFor="laeagueImage">Image Url</label>
        <input onChange={handleLeageInputChange} type="text" name="image_url" id="leagueImage" value={league.image_url} />

        <label htmlFor="numberOfTeams">How Many Teams</label>
        <input onChange={handleLeageInputChange} type="number" name="number_of_teams" id="numberOfTeams" value={league.number_of_teams} />

        <label htmlFor="numberOfPlayers">How Many Players</label>
        <input onChange={handleLeageInputChange} type="number" name="number_of_players" id="numberOfPlayers" value={league.number_of_players} />

        <label htmlFor="startDate">Select Start Date</label>
        <input onChange={handleLeageInputChange} type="datetime-local" name="start_date" id="startDate" value={league.start_date} />

        <label htmlFor="numberOfWeeks">How Many Weeks</label>
        <input onChange={handleLeageInputChange} type="number" name="number_of_weeks" id="numberOfWeeks" value={league.number_of_weeks} />
      </form>
      <button onClick={handleNext}>NEXT</button>
    </div>
  )
}

export default AddLeague