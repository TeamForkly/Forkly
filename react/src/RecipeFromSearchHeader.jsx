import React, { PropTypes } from 'react';

const propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const RecipeFromSearchHeader = (props) => {
  return (
    <div className="row">
      <div className="col-lg-3" />
      <div className="col-lg-3">
        <img id="recipe-from-search-img" src={props.photo} alt=""/>
      </div>
      <div className="col-lg-3">
        <h2>{props.name}</h2>
        <button className="btn btn-submit">Save</button>
      </div>
    </div>
  );
};

RecipeFromSearchHeader.propTypes = propTypes;
export default RecipeFromSearchHeader;
