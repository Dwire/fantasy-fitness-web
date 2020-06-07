import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const AddLeague = ({handleNext, league, handleLeageInputChange}) => {
  return (
    <div class="form-container">
      <Form>
        <Form.Input 
        className='form-input'
        label='League Name' 
        placeholder='League Name'
        onChange={handleLeageInputChange}
        name='name' />
        < Form.Group widths='equal' className='form-input'>
          <Form.Input 
            label='Image url'
            placeholder='Image url'
            name='img_url'
            onChange={handleLeageInputChange} />
          <Form.Input 
            label='League Motto' 
            placeholder='League Motto'
            onChange={handleLeageInputChange}
            name='motto' />
        </ Form.Group>
        <Form.Group widths='equal' className='form-input'>
          <Form.Input 
          fluid 
          type='number' 
          label='# of Teams' 
          placeholder='# of Teams' 
          name='number_of_teams'
          onChange={handleLeageInputChange} />
          <Form.Input 
          fluid 
          type='number' 
          label='# of Players' 
          placeholder='# of Players' 
          name='number_of_players'
          onChange={handleLeageInputChange}/>
          <Form.Input 
          fluid 
          type='number' 
          label='# of Weeks' 
          placeholder='# of Weeks'
          name='number_of_weeks' 
          onChange={handleLeageInputChange} />
        </Form.Group>
        <Form.Input 
            className='form-input'
            type='datetime-local'
            label='Start Date'
            placeholder='Start Date'
            name='start_date'
            onChange={handleLeageInputChange} />
      </Form>
      <Button onClick={handleNext} content='Next' icon='right arrow' labelPosition='right' className='form-input' />
    </div>
  )
}

export default AddLeague
