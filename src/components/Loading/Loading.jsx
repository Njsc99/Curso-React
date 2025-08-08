import PacmanLoader from "react-spinners/PacmanLoader";
import "./loading.css";


const Loading = () => {
  return (
    <div className="loading">
        <PacmanLoader color="yellow"/>
    </div>
  )
}

export default Loading