import React, { useEffect, useState } from 'react'
import NewSongForm from './NewSongForm';

const SongList = () => {

    const [Songs, setSongs] = useState([
        {title: 'Almost home',id:1 },
        {title: 'Glass animals',id:2 },
        {title: 'Black hearted',id:3 },

    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        // create new array
        setSongs([...Songs, {title, id:4}])
    }

    useEffect(() => {
        console.log('useEffect hook ran', Songs); 
    },[Songs])
    useEffect(() => {
        console.log('useEffect hook ran', age); 
    },[age])
  return (
    <div className='song-list'>
        <ul>
            {
            Songs.map(song => {
                return(
                <li key={song.id}>
                        {song.title}
                </li>)
            })
            }
        </ul>
        <NewSongForm addSong={addSong} />
        <button onClick={() => setAge (age+ 1 )}> ADD 1 TO AGE{age}</button>
        {/* <button onClick={addSong}>Add a Song</button> */}
        </div>
  )
}

export default SongList;