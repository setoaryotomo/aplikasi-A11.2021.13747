import React from 'react';
import { connect } from 'react-redux';
import { setName, setNim } from '../store/actions';
import DisplayInfo from '../components/DisplayInfo';

const Profile = ({ name, nim, setName, setNim }) => {
  return (
    <div>
      <h2>Profile</h2>
      <DisplayInfo name={name} nim={nim} />
      <div className="container mt-3">
        <div className="form-group">
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="nim">NIM:</label>
          <input
            type="text"
            className="form-control"
            id="nim"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  nim: state.nim
});

const mapDispatchToProps = {
  setName,
  setNim
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
