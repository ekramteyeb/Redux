import React from 'react'
//import {useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  //const dispatch = useDispatch()

  /* const filter = useSelector(state => state.filter)
  const regEx = new RegExp(filter, 'gi')
  
  const anecdotes = useSelector(state => state.anecdotes)

    .filter(anecdote =>  anecdote.content.match(regEx))
    .sort((a,b) => {
      if(a.votes > b.votes) return -1
      if(a.votes < b.votes) return 1
        return 0
    }) */
 
  return (
    <div>
    
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes} :  
            <button onClick={ () => {

               props.vote(anecdote.id)
               props.setNotification(`You voted, '${anecdote.content}'`, 3)
            }
            }>vote</button>
            </div>
        </div>
      )}
    </div>
)
}
const mapStateToProps = (state) => {
  
  const filter =  state.filter
  const regEx = new RegExp(filter, 'gi')
  
  const anecdotes = state.anecdotes

    .filter(anecdote =>  anecdote.content.match(regEx))
    .sort((a,b) => {
      if(a.votes > b.votes) return -1
      if(a.votes < b.votes) return 1
        return 0
    })
    return {anecdotes}
}
const mapDispatchToProps = {
  vote,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes