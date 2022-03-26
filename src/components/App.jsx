import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ComposeForm from './ComposeForm'
import Timeline from './Timeline'
import { FaTwitter } from 'react-icons/fa'
import './App.css'
// json tweets
import initialTweets from '../tweets.json'

// store current user name
const CURRENT_USER = 'alvian'

// first react component (using functional component)
function App() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    setTweets(initialTweets)
  }, [])

  // handler when we post a new tweet
  const handlePostTweet = (content) => {
    const newTweet = {
      content,
      id: nanoid(),
      created_on: Date(Date.now()),
      user: CURRENT_USER,
      comments_count: 0,
      retweets_counts: 0,
      favorites_counts: 0,
    }
    setTweets([...tweets, newTweet])
  }
  return (
    <div className='app'>
      <FaTwitter className='app-logo' size='2em' />
      <ComposeForm onSubmit={handlePostTweet} />
      <div className='separator'></div>
      <Timeline tweet={tweets} />

    </div>
  )
}

export default App