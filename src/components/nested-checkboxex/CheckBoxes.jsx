import { treeData } from "./data";

const CheckBoxes = ({ data, checked, setChecked }) => {
	const handleChange = (isChecked, node) => {
		setChecked((prev) => {
			const newState = { ...prev, [node.id]: isChecked };

			const updateChildren = (node) => {
				node.children.forEach((child) => {
					newState[child.id] = isChecked;
					if (child.children.length > 0) {
						updateChildren(child);
					}
				});
			};

			if (node.children.length > 0) {
				updateChildren(node);
			}

			const verifyChecked = (node) => {
				if (!node.children || node.children.length === 0)
					return newState[node.id] || false;

				// forEach guarantees every child is visited (no short-circuit)
				let allChecked = true;
				node.children.forEach((child) => {
					const childChecked = verifyChecked(child);
					if (!childChecked) allChecked = false;
				});

				newState[node.id] = allChecked;

				return allChecked;
			};

			treeData.forEach((node) => verifyChecked(node));

			return newState;
		});
	};

	return (
		<div
			style={{
				marginLeft: "1rem",
			}}
		>
			{data.map((node) => {
				return (
					<div key={node.id}>
						<input
							type="checkbox"
							checked={checked[node.id] || false}
							onChange={(e) => handleChange(e.target.checked, node)}
						/>
						<span>{node.label}</span>
						{node.children.length > 0 ? (
							<CheckBoxes
								data={node.children}
								checked={checked}
								setChecked={setChecked}
							/>
						) : null}
					</div>
				);
			})}
		</div>
	);
};

export default CheckBoxes;
