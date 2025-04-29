import React from "react";

import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LocationOn, PhoneInTalk } from "@mui/icons-material";

import { Images } from "../../assets/Images";
import colors from "../../styles/colors";

function Footer() {
	const Explore = [
		{
			path: "#about",
			title: "About",
		},
		{
			path: "#resume",
			title: "Resume",
		},
		{
			path: "#portfolio",
			title: "Portfolio",
		},
		{
			path: "#portfolio",
			title: "Skills",
		},
		{
			path: "#Certifications",
			title: "Certifications",
		},
	];

	const Services = [
		{
			title: "Programming",
		},
		{
			title: "Data Science",
		},
		{
			title: "Clustering Methods",
		},
		{
			title: "IDE and tools",
		},
		{
			title: "Data visualization",
		},
		{
			title: "CRM",
		},
	];

	const SocialMedia = [
		{
			path: "https://www.linkedin.com/in/amirmoussous/?locale=en_US",
			icon: faLinkedin,
		},
	];

	return (
		<Box sx={{ backgroundColor: [colors.black] }}>
			<Box
				sx={{
					py: 12,
					borderBottom: `1px solid ${colors.border}`,
				}}
			>
				<Container>
					<Grid container justifyContent="space-between">
						<Grid item size={{ md: 3.5, xs: 12, sm: 6 }} sx={{ mb: { xs: 6, md: 0 } }}>
							<Box>
								<CardMedia
									component="img"
									image={Images.logoWhite}
									sx={{ width: 250, mb: "36px", marginLeft: "-35px"}}
								/>
								<Typography
									component="p"
									sx={{
										pr: { xs: 0, sm: "100px" },
										mb: "30px",
										fontSize: 16,
										fontFamily: "Jost, sans-serif",
										color: [colors.white],
										lineHeight: "1.7rem",
									}}
								>
									A passion for intelligent solutions and a background bridging
									technology and business, I turn data into direction. Let’s
									explore how I can bring insight and innovation to your team.
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: 24,
										fontFamily: "Jost, sans-serif",
										color: [colors.white],
									}}
								>
									Amirmoussous@gmail.com
								</Typography>
							</Box>
						</Grid>
						<Grid item size={{ md: 1.5, xs: 6 }} sx={{ mb: { xs: 6, md: 0 } }}>
							<Box>
								<Typography
									variant="h4"
									sx={{
										fontSize: 21,
										fontFamily: "Jost, sans-serif",
										color: [colors.white],
										mb: "56px",
									}}
								>
									Explore Link
								</Typography>
								{Explore.map((item, index) => (
									<Typography
										component="li"
										sx={{
											color: [colors.white],
											mb: "20px",
											fontSize: "16px",
											display: "block",
										}}
									>
										<a href={item.path}>{item.title}</a>
									</Typography>
								))}
							</Box>
						</Grid>
						<Grid item size={{ md: 1.5, xs: 6 }} sx={{ mb: { xs: 6, md: 0 } }}>
							<Box>
								<Typography
									variant="h4"
									sx={{
										fontSize: 21,
										fontFamily: "Jost, sans-serif",
										color: [colors.white],
										mb: "56px",
									}}
								>
									My Services
								</Typography>
								{Services.map((item, index) => (
									<Typography
										component="li"
										sx={{
											color: [colors.white],
											mb: "20px",
											fontSize: "16px",
											display: "block",
										}}
									>
										<a href="#resume">{item.title}</a>
									</Typography>
								))}
							</Box>
						</Grid>
						<Grid item size={{ md: 3.5, xs: 12, sm: 6 }}>
							<Box>
								<Typography
									variant="h4"
									sx={{
										fontSize: 21,
										fontFamily: "Jost, sans-serif",
										color: [colors.white],
										mb: "56px",
									}}
								>
									Follow me
								</Typography>
								<Box
									sx={{
										mt: "63px",
										mb: "35px",
									}}
								>
									{SocialMedia.map((item, index) => (
										<Typography
											component="li"
											sx={{
												display: "inline-block",
												mr: "20px",
											}}
										>
											<a href={item.path}>
												<Box
													sx={{
														width: "42px",
														height: "40px",
														backgroundColor: colors.primary,
														borderRadius: "6px",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														transition: "all 0.4s",
														borderTop: `3px solid ${colors.primary}`,
														borderRight: `3px solid ${colors.primary}`,
														"&:hover": {
															backgroundColor: colors.white,
														},
														"&:hover .facebook-icon": {
															color: `${colors.primary} !important`,
														},
													}}
												>
													<FontAwesomeIcon
														icon={item.icon}
														className="facebook-icon"
														style={{
															fontSize: "21px",
															color: [colors.white],
															transition: "color 0.3s ease-in-out",
														}}
													/>
												</Box>
											</a>
										</Typography>
									))}
									<Typography
										component="li"
										sx={{
											display: "inline-block",
											mr: "20px",
										}}
									>
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										mb: "20px",
									}}
								>
									<LocationOn
										sx={{
											mr: "10px",
											color: [colors.primary],
										}}
									/>
									<Typography
										component="p"
										sx={{
											fontSize: "16px",
											color: [colors.white],
											fontFamily: "Jost, sans-serif",
										}}
									>
										Philadelphia - USA | Paris - FR
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										mb: "20px",
									}}
								>
									<PhoneInTalk
										sx={{
											mr: "10px",
											color: [colors.primary],
										}}
									/>
									<Box>
										<Typography
											component="p"
											sx={{
												fontSize: "16px",
												color: [colors.white],
												fontFamily: "Jost, sans-serif",
											}}
										>
											FR : +33 6 46 64 03 22
										</Typography>
										<Typography
											component="p"
											sx={{
												fontSize: "16px",
												color: [colors.white],
												fontFamily: "Jost, sans-serif",
											}}
										>
											US : +1 (484) 401-2663
										</Typography>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box
				sx={{
					padding: "35px 0px",
				}}
			>
				<Container>
					<Grid container justifyContent="space-between" alignItems="center">
						<Grid item>
							<Box>
								<Typography
									component="p"
									sx={{
										fontSize: 16,
										fontFamily: "Jost, sans-serif",
										color: [colors.white],
									}}
								>
									All rights reserved © 2025 Amir Moussous
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							size={{ md: 4, xs: 12, sm: 6 }}
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}

export default Footer;
