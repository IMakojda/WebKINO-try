import { img_300 } from "config/config";
import { unavailable } from "config/config";
import "./SingleCardContent.css"
import ModalCard from "components/Modal/Modal";

const SingleCardContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {

  return (
    <ModalCard media_type={media_type} id={id}>
      <li className="media">
        <span className="badge" style={{ backgroundColor: vote_average > 6 ? "#05a500" : "#e93e47"}}>{vote_average}</span>
          <img className="poster" src={poster ?`${img_300}/${poster}` : unavailable} alt={title}/>
            <b className="title">{title}</b>
              <span className="type_date">
                {media_type==="tv" ?  "TV Series" : "Movie"}
                  <span className="type_date">{date.slice(0,4)}</span>
              </span>
      </li>
    </ModalCard>
  )
}

export default SingleCardContent;
