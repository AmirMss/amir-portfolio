import React, { useState } from "react";
import {
	Box,
	Container,
	Grid,
	CardMedia,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Menu icon for mobile
import { Images } from "../../assets/Images";
import colors from "../../styles/colors";
import { Close } from "@mui/icons-material";

function Header() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const Navigation = [
		{ path: "#home", label: "Home" },
		{ path: "#about", label: "About" },
		{ path: "#resume", label: "Resume" },
		{ path: "#portfolio", label: "Portfolio" },
	];

	const toggleDrawer = (open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setDrawerOpen(open);
	};

	return (
		<Box
			sx={{
				padding: { xs: "16px 0px", md: "6px 0px" },
				backgroundColor: colors.white,
			}}
		>
			<Container>
				<Grid container justifyContent="space-between" alignItems="center">
					{/* Logo */}
					<Grid item>
						<CardMedia component="img" image={Images.logo} sx={{ width: 150 }} />
					</Grid>

					{/* Desktop Navigation */}
					<Grid
						item
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
						}}
					>
						{Navigation.map((item, index) => (
							<Typography
								key={index}
								component="li"
								sx={{
									listStyle: "none",
									display: "inline-block",
									padding: "30px 16px",
									fontSize: 16,
									color: colors.text,
								}}
							>
								<a
									href={item.path}
									style={{ textDecoration: "none", color: "inherit" }}
								>
									{item.label}
								</a>
							</Typography>
						))}
					</Grid>

					<Grid item>
						<Typography
							component="li"
							sx={{
								listStyle: "none",
								padding: "30px 16px",
								display: { xs: "none", md: "flex" },
								fontSize: 16,
								fontWeight: 700,
							}}
						>
							<a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
								Contact Me
							</a>
						</Typography>
					</Grid>

					{/* Mobile Menu Icon */}
					<Grid
						item
						sx={{
							display: { md: "none", xs: "block" },
						}}
					>
						<IconButton onClick={toggleDrawer(true)}>
							{drawerOpen ? <Close /> : <MenuIcon />}
						</IconButton>
					</Grid>
				</Grid>

				{/* Drawer for Mobile */}
				<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
					<Box
						sx={{ width: 250 }}
						role="presentation"
						onClick={toggleDrawer(false)}
						onKeyDown={toggleDrawer(false)}
					>
						<List>
							{Navigation.map((item, index) => (
								<ListItem button key={index} component="a" href={item.path}>
									<ListItemText primary={item.label} />
								</ListItem>
							))}
							<ListItem button component="a" href="#contact">
								<ListItemText primary="Contact Us" />
							</ListItem>
						</List>
					</Box>
				</Drawer>
			</Container>
		</Box>
	);
}

export default Header;
