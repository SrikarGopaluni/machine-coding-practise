import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const OTP_DIGIT_COUNT = 6;

const OtpInput = () => {
	const [numbers, setNumbers] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

	const refs = useRef([]);

	useEffect(() => {
		refs.current[0]?.focus();
	}, []);

	const handleChange = (value, index) => {
		setNumbers((prev) => {
			const newArray = [...prev];
			newArray[index] = value.at(-1);
			return newArray;
		});
		if (value && index < OTP_DIGIT_COUNT - 1) {
			refs.current[index + 1].focus();
		}
	};

	const handleKeyDown = (e, index) => {
		if (!e.target.value && e.key === "Backspace") {
			if (index !== 0) {
				refs.current[index - 1]?.focus();
			}
		}
	};

	return (
		<div>
			<h4>Validate OTP</h4>

			{numbers.map((num, index) => {
				return (
					<input
						key={index}
						type="text"
						value={num}
						className="otp-input"
						ref={(input) => (refs.current[index] = input)}
						onChange={(e) => handleChange(e.target.value, index)}
						onKeyDown={(e) => handleKeyDown(e, index)}
					/>
				);
			})}
		</div>
	);
};

export default OtpInput;
