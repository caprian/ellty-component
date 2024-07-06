import React from "react";
import "./CheckBox.css";

interface CheckboxProps {
	label: string;
	checked: boolean;
	onChange: () => void;
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
	const toggleCheckbox = () => {
		onChange();
	};

	return (
		<div
			className={`checkbox-container ${checked ? "checked" : ""}`}
			onClick={toggleCheckbox}>
			<label className="checkbox-label">{label}</label>
			<div className={`checkbox-icon-container ${checked ? "checked" : ""}`}>
				<div className={`checkmark ${checked ? "checked" : ""}`}>
					<svg
						className="checkmark--svg"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 52 52"
						transform="scale(1.597)">
						<path
							className="checkmark__check"
							fill="none"
							d="M14.1 27.2l7.1 7.2 16.7-16.8"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
