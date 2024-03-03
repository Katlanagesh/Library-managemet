import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section>
      <div className="container dashboard p-0 ">
        <div className="row">
          
          <h4>Library management is a sub-discipline of institutional management that focuses on specific issues faced by libraries and library management professionals. 
            Library management encompasses normal managerial tasks, as well as intellectual freedom and fundraising responsibilities
            </h4>
            
          <div className="d-flex align-items-center justify-content-center">
            <Link
              to="/AddBook"
              className="sf-button me-5 d-flex justify-content-center align-items-center"
            >
              ADD BOOKS
            </Link>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
