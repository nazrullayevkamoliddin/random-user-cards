import { Link } from "react-router-dom";

function Home({ data, setUser }) {
  return (
    <>
      <div className="head">
        <h2>Users List</h2>
      </div>
      <div className="items">
        {data.map((item, index) => (
          <Link
            to="/user"
            className="item"
            key={index}
            onClick={() => setUser(item)}
          >
            <div className="img">
              <img src={item?.picture?.medium} alt={item?.picture?.medium} />
            </div>
            <div className="col1">
              <p>
                <b>{item.name.first + " " + item.name.last}</b>{" "}
                <span className="title">
                  / {item.location.country + " " + item.location.state}
                </span>
              </p>
            </div>
            <div className="col2">
              <p>{item.gender}</p>
            </div>
            <div className="col3">
              <p>{item.email}</p>
            </div>
            <div className="col4">
              <p>{item.phone}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
