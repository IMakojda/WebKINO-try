import { img_300 } from "config/config";
import { unavailable } from "config/config";
import "./SingleCardContent.css"

const SingleCardContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {

  return (
    <li className="media">
      <span className="badge" style={{ backgroundColor: vote_average > 6 ? "#05a500" : "#e93e47"}}>{vote_average}</span>
        <img className="poster" src={poster ?`${img_300}/${poster}` : unavailable} alt={title}/>
          <b className="title">{title}</b>
            <span className="type_date">
              {media_type==="tv" ?  "TV Series" : "Movie"}
                <span className="type_date">{date.slice(0,4)}</span>
            </span>
    </li>
  )
}

export default SingleCardContent;
