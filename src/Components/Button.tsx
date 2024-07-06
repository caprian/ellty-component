import React from "react";
import "./Button.css";

interface ButtonProps {
	label: string;
}

export function Button({ label }: ButtonProps) {
	return (
		<div className="button-container">
			<button className="button">
				<span className="button-label">{label}</span>
			</button>
		</div>
	);
}
