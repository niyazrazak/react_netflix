import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import "./RowPost.css"
import axios from '../../axios'
import { API_KEY, imageURL } from '../../Constants/Constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlID, setUrlid] = useState("")
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    }).catch(err => {
      alert("Network Error")
    }
    )
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const movieClick = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlid(response.data.results[0])
      }

    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <img onClick={() => movieClick(obj.id)} className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageURL + obj.backdrop_path}`} alt="posters" />
          )
        })
        }
      </div>

      {urlID && <YouTube videoId={urlID.key} opts={opts} />}
    </div>
  )
}

export default RowPost