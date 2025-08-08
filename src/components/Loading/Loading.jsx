import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.css";


const Loading = () => {
  return (
    <div className="loading">
        <PacmanLoader color="yellow"/>
    </div>
  )
}

export default Loading