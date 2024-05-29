import React from "react";
import { Link } from "react-router-dom";

const NoDemo = () => {
  return (
    <section style={{marginBlockStart:'2rem'}}>
      <div className="container noDemoAvilable">
        <h1>No Demo Found</h1>
        <p>
          if you are seeing this page, it means that the demo is real app and
          contain private information. so we can't show it here.
        </p>

        <Link to='/'>
            <button className="button button--flex" style={{marginBlockStart:'2rem'}}>Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NoDemo;
