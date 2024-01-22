import React from "react";
import Tags from "./Tags";

const styles = {
  FilterTags: {
    display: "flex",
    marginLeft: "15px",
    marginTop: "15px",
  },
};

const FilterTags = (props) => {
  const { tags } = props;

  return (
    <div style={styles.FilterTags}>
      {tags.map((tag, index) => (
        <Tags key={index}>
          <p>{tag}</p>
        </Tags>
      ))}
    </div>
  );
};

export default FilterTags;
