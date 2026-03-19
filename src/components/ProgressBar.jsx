import { useState } from "react";

function ProgressBar() {
	const [progress, setProgress] = useState(0);

	const increase = () => {
		setProgress((prev) => {
			if (prev === 100) return prev;
			return prev + 10;
		});
	};

	const decrease = () => {
		setProgress((prev) => {
			if (prev === 0) return prev;
			return prev - 10;
		});
	};

	return (
		<div>
			{/* Implement the ProgressBar component logic here */}

			<div
				style={{
					width: "400px",
					textAlign: "center",
					border: "1px solid black",
					borderRadius: "5px",
					backgroundColor: "#e5e5e5",
				}}
			>
				<div
					id="testBgColor"
					style={{
						width: `${progress}%`,
						backgroundColor:
							progress < 40 ? "red" : progress < 80 ? "orange" : "green",
					}}
				>
					{progress}%
				</div>
			</div>

			<div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
				<button onClick={decrease}>-10%</button>
				<button onClick={increase}>+10%</button>
			</div>
		</div>
	);
}

export default ProgressBar;
