import React from 'react'
//import {useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import {createAnecdote } from '../reducers/anecdoteReducer'
//import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

  //const dispatch = useDispatch()

  const addAnocdote = async (event) => {
    
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //const newAnecdote = await anecdoteService.createNew(content)
    //dispatch(createAnecdote(content))
    props.createAnecdote(content)

  }
  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnocdote}>
            <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
        </form>
    </div>
  )

}
 

//export default AnecdoteForm
export default connect (
  null,
  {createAnecdote}
)(AnecdoteForm)