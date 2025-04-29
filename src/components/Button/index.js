import React from "react";
import { Button } from "@mui/material";
import colors from "../../styles/colors";

function CustomButton({ label, onClick, type }) {
	return (
		<Button
			variant="contained"
			onClick={onClick}
			type={type}
			sx={{
				mt: 4,
				backgroundColor: colors.primary,
				color: "#fff",
				fontSize: 18,
				fontWeight: 500,
				padding: "10px 32px",
				borderRadius: 2,
				textTransform: "none",
				boxShadow: "0 4px 20px rgba(25, 118, 210, 0.2)",
				"&:hover": {
					backgroundColor: colors.primaryLight,
				},
			}}
		>
			{label}
		</Button>
	);
}

export default CustomButton;
