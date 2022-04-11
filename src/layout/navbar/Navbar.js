import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Container,
	IconButton,
	SwipeableDrawer,
	Toolbar,
} from "@mui/material";
import HideAppBar from "./HideOnScroll";
import { DesktopPages, MobilePages } from "./NavPages";
import Logo from "./Logo";

const Navbar = () => {
	// Drawer State & Function
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setIsDrawerOpen(open);
	};
	return (
		<>
			<HideAppBar>
				<Toolbar component='nav'>
					<Container disableGutters maxWidth='xl' sx={{ display: "flex" }}>
						<Logo
							sx={{
								mr: 2,
								ml: 2,
								display: { xs: "none", md: "flex" },
								alignItems: "center",
							}}
						/>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size='large'
								aria-label='open drawer'
								edge='start'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								color='inherit'
								onClick={toggleDrawer(true)}
							>
								<MenuIcon sx={{ fontSize: "2.2rem" }} />
							</IconButton>
						</Box>

						<Logo
							sx={{
								display: { xs: "flex", md: "none" },
								justifyContent: "flex-end",
								alignItems: "center",
								fontSize: "1.7rem",
							}}
						/>

						<DesktopPages />
					</Container>
				</Toolbar>
			</HideAppBar>

			{/* Drawer  */}
			<SwipeableDrawer
				anchor='left'
				open={isDrawerOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<Box
					role='presentation'
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
					sx={{ px: 2 }}
				>
					<MobilePages />
				</Box>
			</SwipeableDrawer>
		</>
	);
};

export default Navbar;
