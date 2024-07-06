import React, { useEffect, useState } from "react";
import { Checkbox } from "./CheckBox";
import { Button } from "./Button";
import "./MainComponent.css";

export function MainComponent() {
	const [allPagesChecked, setAllPagesChecked] = useState(false);
	const [page1Checked, setPage1Checked] = useState(false);
	const [page2Checked, setPage2Checked] = useState(false);
	const [page3Checked, setPage3Checked] = useState(false);
	const [page4Checked, setPage4Checked] = useState(false);

	const handleAllPagesChange = () => {
		const newCheckedState = !allPagesChecked;
		setAllPagesChecked(newCheckedState);
		setPage1Checked(newCheckedState);
		setPage2Checked(newCheckedState);
		setPage3Checked(newCheckedState);
		setPage4Checked(newCheckedState);
	};

	useEffect(() => {
		const allPagesAreChecked =
			page1Checked && page2Checked && page3Checked && page4Checked;
		if (allPagesAreChecked) {
			setAllPagesChecked(true);
		} else {
			setAllPagesChecked(false);
		}
	}, [page1Checked, page2Checked, page3Checked, page4Checked]);

	return (
		<div className="main-container">
			<Checkbox
				label="All pages"
				checked={allPagesChecked}
				onChange={handleAllPagesChange}
			/>

			<div className="border-container">
				<span className="page-borders"></span>
			</div>
			<div className="all-checkboxes-container">
				<Checkbox
					label="Page 1"
					checked={page1Checked}
					onChange={() => setPage1Checked(!page1Checked)}
				/>
				<Checkbox
					label="Page 2"
					checked={page2Checked}
					onChange={() => setPage2Checked(!page2Checked)}
				/>
				<Checkbox
					label="Page 3"
					checked={page3Checked}
					onChange={() => setPage3Checked(!page3Checked)}
				/>
				<Checkbox
					label="Page 4"
					checked={page4Checked}
					onChange={() => setPage4Checked(!page4Checked)}
				/>
			</div>

			<div className="border-container">
				<span className="page-borders"></span>
			</div>
			<Button label="Done" />
		</div>
	);
}
