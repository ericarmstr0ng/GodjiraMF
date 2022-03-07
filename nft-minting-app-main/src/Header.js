import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import opensea from "./icons/opensea.svg";
import twitter from "./icons/twitter.svg";

export default function Header() {
	return (
		<AppBar elevation={0} style={{ background: "#212529" }} position="static">
			<Toolbar>
				{/*Inside the IconButton, we 
           can render various icons*/}
				{/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

					<MenuIcon />
				</IconButton> */}
				{/* The Typography component applies 
           default font weights and sizes */}
				<Typography mx={4} variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<img mr={10} src={require("./icons/GMFBanner.jpeg").default}></img>
				</Typography>
				<Typography mx={8} align="right" variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<a href="https://twitter.com/" rel="noreferrer">
						<img src={require("./icons/twitter.svg").default}></img>
					</a>
					<a
						style={{ marginLeft: ".8rem" }}
						href="https://testnets.opensea.io/collection/godjira-mfers-nft"
						rel="noreferrer"
					>
						<img src={require("./icons/opensea.svg").default}></img>
					</a>
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
