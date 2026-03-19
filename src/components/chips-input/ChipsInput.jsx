import React, { useState } from "react";
import "./styles.css";
function ChipsInput() {
	const [text, setText] = useState("");
	const [elements, setElements] = useState([]);

	return (
		<div className="main-container">
			<h2>Chips Input</h2>
			<input
				type="text"
				placeholder="Type a chip and press tag"
				className="input"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter" && text.trim()) {
						setElements((prev) => [...prev, text.trim()]);
						setText("");
					}
				}}
			/>
			{elements.length > 0 ? (
				<div className="chips-container">
					{elements.map((chip, index) => (
						<div className="chip" key={index}>
							<p>{chip}</p>
							<button
								onClick={() => {
									setElements((prev) =>
										prev.filter((_, indexTemp) => indexTemp !== index),
									);
								}}
							>
								X
							</button>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}

export default ChipsInput;
