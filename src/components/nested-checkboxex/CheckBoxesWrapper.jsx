import React, { useState } from "react";
import CheckBoxes from "./CheckBoxes";
import { treeData } from "./data";

const CheckBoxesWrapper = () => {
	const [checked, setChecked] = useState({});
	return (
		<div>
			<CheckBoxes data={treeData} checked={checked} setChecked={setChecked} />
		</div>
	);
};

export default CheckBoxesWrapper;
