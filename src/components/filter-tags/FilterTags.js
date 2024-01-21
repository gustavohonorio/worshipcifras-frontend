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
    return (
        <div style={styles.FilterTags}>
            <Tags>
                <p>Todas</p>
            </Tags>
            <Tags>
                <p>Novidades</p>
            </Tags>
            <Tags>
                <p>Em alta</p>
            </Tags>
        </div>
    );
};

export default FilterTags;