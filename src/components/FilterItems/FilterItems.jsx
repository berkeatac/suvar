import React from "react";

import FilterItem from "../FilterItem/FilterItem";

const FilterItems = ({ grades, handleGradeChange }) => {
  return (
    <>
      <FilterItem
        color={"green"}
        handleGradeChange={handleGradeChange}
        selected={grades.green}
      />
      <FilterItem
        color={"byellow"}
        handleGradeChange={handleGradeChange}
        selected={grades.byellow}
      />
      <FilterItem
        color={"blue"}
        handleGradeChange={handleGradeChange}
        selected={grades.blue}
      />
      <FilterItem
        color={"yellow"}
        handleGradeChange={handleGradeChange}
        selected={grades.yellow}
      />
      <FilterItem
        color={"orange"}
        handleGradeChange={handleGradeChange}
        selected={grades.orange}
      />
      <FilterItem
        color={"pink"}
        handleGradeChange={handleGradeChange}
        selected={grades.pink}
      />
    </>
  );
};

export default FilterItems;
