import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transaction processing. Last payment may not included </p>
      </div>
    </div>
  )
}

export default Featured