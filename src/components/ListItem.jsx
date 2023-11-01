import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function ListItem({ heading, para }) {
  const [show, setShow] = useState(false);
  return (
    <div className="additional-text my-2 p-4 pb-3 rounded shadow border-bottom border-success border-3">
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative" style={{ cursor: "pointer" }} onClick={() => setShow((e) => !e)}>
            <span className="position-absolute top-0 end-0">{!show ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>

            <h5>{heading}</h5>
          </div>
          <div className={`col ${show ? "show" : "hidden"} pt-3`}>
            <p>{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
