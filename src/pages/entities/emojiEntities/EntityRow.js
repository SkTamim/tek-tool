import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import toast from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `1px solid #eee`,
	},
	text: {
		padding: ".8rem",
		textAlign: "center",
		color: theme.palette.secondary.dark,
		transition: ".1s",
		"&:first-child": {
			fontWeight: "bold",
			fontSize: "1.8rem",

			position: "sticky",
			left: 0,
			backgroundColor: "#ddf4ff",
			zIndex: "2",
		},
		"&:hover": {
			boxShadow: "rgb(0 0 0 / 20%) 0px 2px 4px 0px inset",
			cursor: "pointer",
		},
		"&:last-child": {
			boxShadow: "none",
			cursor: "auto",
			maxWidth: "250px",
			textTransform: "capitalize",
		},
	},
}));

const EntityRow = (props) => {
	const { emoji, html, unicode, shortname, name } = props.data;
	const classes = useStyles();

	const notify = () => {
		toast.success("Copied Successfully");
	};

	const copyTextHandler = (copyData) => {
		navigator.clipboard.writeText(copyData);
		notify();
	};

	return (
		<>
			<tr className={classes.root}>
				<td onClick={() => copyTextHandler(emoji)} className={classes.text}>
					{emoji}
				</td>
				<td onClick={() => copyTextHandler(html)} className={classes.text}>
					{html}
				</td>
				<td onClick={() => copyTextHandler(unicode)} className={classes.text}>
					{unicode}
				</td>
				<td className={classes.text}>{name}</td>
			</tr>
		</>
	);
};

export default EntityRow;
