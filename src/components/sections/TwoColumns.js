import "./TwoColumns.css"

const TwoColumns = (props) => {
  return (
    <div className="twocolumns_para">
      <div className="col">
        <h4>Talk directly to founders</h4>
        <p>
          Speak directly to founders and hiring managers. No third party
          recruiters allowed.
        </p>
      </div>
      <div className="col">
          <h4>See salary & equity upfront</h4>
          <p>View salary and stock option details before you apply to a job.</p>
      </div>
    </div>
  );
};
export default TwoColumns;
