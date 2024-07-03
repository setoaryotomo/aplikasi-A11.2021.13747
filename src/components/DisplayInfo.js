import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayInfo = ({ name, nim }) => {
  return (
    <div className="container mt-5">
      <h1 className="display-4">{name}</h1>
      <p className="lead">NIM: {nim}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  nim: state.nim
});

export default connect(mapStateToProps)(DisplayInfo);
