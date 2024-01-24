import "./index.css";
// import Shampo1 from "../../assets/img1.jpg";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={require("../../assets/" + props.imgName)}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">{props.productPrice} $</p>
        <a href="#" className="btn btn-danger">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
