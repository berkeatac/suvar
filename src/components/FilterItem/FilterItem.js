import React from "react";
import "./FilterItem.css";
import colors from "../../constants/colors";

const FilterItem = (props) => {
  return (
    <div
      className="filter-item"
      style={{
        borderColor: colors[`g_${props.color}`],
        backgroundColor: colors[`g_${props.color}`],
        opacity: `${props.selected ? 1 : 0.4}`,
      }}
      onClick={() => props.handleGradeChange(props.color)}
    >
      {/* <h3>{props.color}</h3> */}
    </div>
  );
};

export default FilterItem;
