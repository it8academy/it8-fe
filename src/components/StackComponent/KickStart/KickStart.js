import classes from "./KickStart.module.css"
import { Link } from "react-router-dom"

const KickStart = () => {
  return (
    <div className={classes.Kick}>
    <div className={classes.KickStart}>
        <h1>Quit Delaying , kickstart your tech journey now</h1>
        <Link to="/signup"><button>Enrol Now</button></Link>
    </div>
    <hr></hr>
    </div>
  )
}

export default KickStart