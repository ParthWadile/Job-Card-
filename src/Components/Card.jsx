import { Bookmark } from "lucide-react";

const Card = (props) => {

    // console.log(props);
    
  return (
      <div className="card">
        <div className="top">
          <img src={props.logo} />
          <button>
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company} <span>{props.postdate}</span>
          </h3>

          <h2>{props.post}</h2>

          <div>
            <h4>{props.tag}</h4>
            <h4>{props.tagg}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>${props.paay}/hr</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
