import React from "react";

import FilterItem from "../FilterItem/FilterItem";

const FilterItems = ({ grades, handleGradeChange }) => {
  return Object.keys(grades).map((grade) => (
    <FilterItem
      color={grade}
      handleGradeChange={handleGradeChange}
      selected={grades[grade]}
    />
  ));
};

export default FilterItems;
