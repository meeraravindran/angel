import "./TwoColumns.css"

const TwoColumns = (props) => {
  return (
    <div className="twocolumns_para">
      <div className="col">
        <h4>{props.h1}</h4>
        <p>
          {props.c1}
        </p>
      </div>
      <div className="col">
          <h4>{props.h2}</h4>
          <p>{props.c2}</p>
      </div>
    </div>
  );
};
export default TwoColumns;
