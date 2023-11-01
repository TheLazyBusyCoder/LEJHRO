import ListItem from "./ListItem";

function ListBox({ heading, desc, children }) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div className="text-center mb-4">
            <h2>{heading}</h2>
          </div>
          {desc && (
            <div className="additional-text p-4 rounded shadow">
              <p>{desc}</p>
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}

export default ListBox;
