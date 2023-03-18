import React from 'react';

const BtnDelete = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-danger">
      Delete
    </button>
  );
};

const BtnEdit = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-success">
      Edit
    </button>
  );
};

export { BtnDelete, BtnEdit };
