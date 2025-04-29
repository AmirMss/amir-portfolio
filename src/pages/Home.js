import React, { Fragment, useState } from "react";
import { Box, Container, Grid, CardMedia, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { Images } from "../assets/Images";
import colors from "../styles/colors";
import CustomButton from "../components/Button";
import { Circle, Close, Email, LinkedIn, LocationOn, PhoneInTalk } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleItemClick = (item) => {
		setSelectedItem(item);
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
		setSelectedItem(null);
	};

	const About = [
		{
			content:
				"As a Computer Science Engineer by training, I completed a dual degree program in Engineering and Management (MBA). With expertise in Artificial Intelligence, Data Science, and Cloud technologies.",
		},
		{
			content:
				"I am constantly keeping up with the latest technological advancements. I strive to apply this knowledge to solve real-world problems and bring value to businesses.",
		},
		{
			content:
				"My background in Software Engineering enables me to develop robust and efficient solutions, while my Business education provides me with a holistic and strategic perspective.",
		},
		{
			content:
				"I am open to collaboration opportunities to leverage the potential of these exciting domains and contribute to project success.",
		},
	];

	const portfolio = [
		{
			img: Images.portfolio1,
			title: "Graphic Design",
			description: "Lorem ipsum dolor sit amet...",
			images: [Images.portfolio1, Images.portfolio2, Images.portfolio3],
		},
		{
			img: Images.portfolio2,
			title: "Graphic Design",
			description: "Lorem ipsum dolor sit amet...",
			images: [Images.portfolio1, Images.portfolio2, Images.portfolio3],
		},
		{
			img: Images.portfolio3,
			title: "Graphic Design",
			description: "Lorem ipsum dolor sit amet...",
			images: [Images.portfolio1, Images.portfolio2, Images.portfolio3],
		},
		{
			img: Images.portfolio4,
			title: "Graphic Design",
			description: "Lorem ipsum dolor sit amet...",
			images: [Images.portfolio1, Images.portfolio2, Images.portfolio3],
		},
		{
			img: Images.portfolio5,
			title: "Graphic Design",
			description: "Lorem ipsum dolor sit amet...",
			images: [Images.portfolio1, Images.portfolio2, Images.portfolio3],
		},
		{
			img: Images.portfolio6,
			title: "Graphic Design",
			description: "Lorem ipsum dolor sit amet...",
			images: [Images.portfolio1, Images.portfolio2, Images.portfolio3],
		},
	];

	return (
		<Fragment>
			{/* ======== Home ======== */}
			<Box id="home" sx={{ backgroundColor: [colors.secondary], py: 8 }}>
				<Container>
					<Grid container spacing={6} alignItems="center">
						{/* Left Section - Text & Info */}
						<Grid item size={{ md: 6, xs: 12 }} sx={{ order: { xs: 2, md: 1 } }}>
							{/* Tagline */}
							<Box display="flex" alignItems="center" mb={2}>
								<CardMedia
									component="img"
									image={Images.dot}
									sx={{ width: 17, height: 17 }}
								/>
								<Typography
									sx={{
										ml: 1.5,
										fontSize: 15,
										fontWeight: 500,
										fontFamily: "Jost, sans-serif",
										color: colors.text,
										textTransform: "uppercase",
									}}
								>
									Empowering Ideas with Data & Technology
								</Typography>
							</Box>

							{/* Main Heading */}
							<Typography
								variant="h2"
								sx={{
									fontSize: { xs: 32, md: 48 },
									fontWeight: 700,
									color: colors.text,
									fontFamily: "Jost, sans-serif",
								}}
							>
								Hi, I'm Amir Moussous —{" "}
								<Box component="span" sx={{ color: colors.primary }}>
									<Typewriter
										options={{
											strings: [
												"Data Analyst",
												"Business Analyst",
												"Business intelligence",
												"Software Engineer",
											],
											autoStart: true,
											loop: true,
											delay: 50,
											deleteSpeed: 35,
										}}
									/>
								</Box>
							</Typography>

							{/* Welcome Message */}
							<Typography
								sx={{
									mt: 3,
									fontSize: 18,
									color: colors.text,
									fontFamily: "Jost, sans-serif",
									lineHeight: 1.7,
								}}
							>
								Welcome to my professional space. With a passion for intelligent
								solutions and a background bridging technology and business, I turn
								data into direction. Let’s explore how I can bring insight and
								innovation to your team.
							</Typography>

							{/* Education & Resume Section */}
							<Box mt={5}>
								<Typography
									variant="h5"
									sx={{
										fontWeight: 600,
										color: colors.primary,
										fontFamily: "Jost, sans-serif",
										mb: 1,
									}}
								>
									Education & Academic Credentials
								</Typography>
								<Typography
									sx={{
										fontSize: 16,
										color: colors.text,
										fontFamily: "Jost, sans-serif",
									}}
								>
									I hold a <strong>Triple Master's Degree</strong>:
								</Typography>
								<ul style={{ color: colors.text, fontSize: 16, paddingLeft: 20 }}>
									<li>Software Engineering</li>
									<li>MBA International Business & Management</li>
									<li>MSc in Artificial Intelligence & Data</li>
								</ul>
								<Typography
									sx={{
										fontSize: 16,
										mt: 1.5,
										color: colors.text,
										fontFamily: "Jost, sans-serif",
									}}
								>
									My interdisciplinary training empowers me to approach challenges
									from both a technical and strategic lens.
								</Typography>
							</Box>

							{/* Button */}
							<CustomButton
								label="Download My Resume"
								onClick={() => {
									const link = document.createElement("a");
									link.href = "/Amir-Moussous-CV.pdf";
									link.download = "Amir-Moussous-CV.pdf";
									document.body.appendChild(link);
									link.click();
									document.body.removeChild(link);
								}}
							/>
						</Grid>

						{/* Right Section - Profile Image */}
						<Grid item size={{ md: 6, xs: 12 }} sx={{ order: { xs: 1, md: 2 } }}>
							<CardMedia
								component="img"
								image={Images.profile}
								sx={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "20px",
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
			{/* ======== About Me ======== */}
			<Box id="about" sx={{ backgroundColor: [colors.white], py: 10 }}>
				<Container>
					<Grid container spacing={4} alignItems="center">
						{/* Left Section - Text & Info */}
						<Grid item xs={12} md={6}>
						</Grid>

						{/* Right Section - Profile Image */}
						<Grid item xs={12} md={5}>
							{/* Tagline */}
							<Box display="flex" alignItems="center" mb={2}>
								<CardMedia
									component="img"
									image={Images.dot}
									sx={{ width: 17, height: 17 }}
								/>
								<Typography
									sx={{
										ml: 1.5,
										fontSize: 15,
										fontWeight: 500,
										fontFamily: "Jost, sans-serif",
										color: colors.text,
										textTransform: "uppercase",
									}}
								>
									About Me
								</Typography>
							</Box>

							{/* Main Heading */}
							<Typography
								variant="h2"
								sx={{
									fontSize: 40,
									fontWeight: 700,
									color: colors.black,
									fontFamily: "Jost, sans-serif",
								}}
							>
								Software Engineer | MBA | MSc AI & DATA
							</Typography>

							{/* Welcome Message */}
							{About.map((item, index) => (
								<Typography
									key={index}
									sx={{
										mt: 2,
										fontSize: 18,
										color: colors.text,
										fontFamily: "Jost, sans-serif",
										lineHeight: 1.7,
									}}
								>
									{item.content}
								</Typography>
							))}
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									flexWrap: "wrap",
									mt: 4,
									mb: 2,
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										flexWrap: "wrap",
										width: "33.33%",
									}}
								>
									<CardMedia
										component="img"
										image={Images.projectIcon}
										sx={{
											width: 55,
											height: 55,
											mr: 2,
										}}
									/>
									<Box>
										<Typography
											variant="h6"
											sx={{
												color: [colors.primary],
												fontWeight: 700,
											}}
										>
											18+
										</Typography>
										<Typography
											variant="h6"
											sx={{
												colors: [colors.black],
												fontWeight: 700,
											}}
										>
											Complete Project
										</Typography>
										
									</Box>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										flexWrap: "wrap",
										width: "33.33%",
									}}
								>
									<CardMedia
										component="img"
										image={Images.projectIcon}
										sx={{
											width: 55,
											height: 55,
											mr: 2,
										}}
									/>
									<Box>
										<Typography
											variant="h6"
											sx={{
												color: [colors.primary],
												fontWeight: 700,
											}}
										>
											16+
										</Typography>
										<Typography
											variant="h6"
											sx={{
												colors: [colors.black],
												fontWeight: 700,
											}}
										>
											Certifications
										</Typography>
										
									</Box>
								</Box>								
								<Box
									sx={{
										width: "33.33%",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										flexWrap: "wrap",
									}}
								>
									<CardMedia
										component="img"
										image={Images.clockIcon}
										sx={{
											width: 55,
											height: 55,
											mr: 2,
										}}
									/>
									<Box>
										<Typography
											variant="h6"
											sx={{
												color: [colors.primary],
												fontWeight: 700,
											}}
										>
											4+
										</Typography>
										<Typography
											variant="h6"
											sx={{
												colors: [colors.black],
												fontWeight: 700,
											}}
										>
											Year of experience
										</Typography>
									</Box>
								</Box>
							</Box>

							{/*Button */}
							<CustomButton
								label="Download My Resume"
								onClick={() => {
									const link = document.createElement("a");
									link.href = "/Amir-Moussous-CV.pdf";
									link.download = "Amir-Moussous-CV.pdf";
									document.body.appendChild(link);
									link.click();
									document.body.removeChild(link);
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
			{/* ======== My Resume ======== */}
			<Box id="resume" sx={{ backgroundColor: [colors.secondary], py: 12 }}>
				<Container>
					{/* Tagline */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							mb: 2,
							justifyContent: "center",
						}}
					>
						<CardMedia
							component="img"
							image={Images.dot}
							sx={{ width: 17, height: 17 }}
						/>
						<Typography
							sx={{
								ml: 1.5,
								fontSize: 15,
								fontWeight: 500,
								fontFamily: "Jost, sans-serif",
								color: colors.text,
								textTransform: "uppercase",
								textAlign: "center",
							}}
						>
							My Resume
						</Typography>
					</Box>

					{/* Main Heading */}
					<Typography
						variant="h2"
						sx={{
							fontSize: 40,
							fontWeight: 700,
							color: colors.black,
							fontFamily: "Jost, sans-serif",
							textAlign: "center",
						}}
					>
						4+ YEARS OF EXPERIENCE
					</Typography>
					<Grid container pt={5}>
						<Grid item size={{ md: 2.3 }} sx={{ display: { xs: "none", md: "block" } }}>
							<Box
								sx={{
									width: "100%",
									height: "100%",
									borderLeft: `2px solid ${colors.border}`,
									position: "relative",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										flexWrap: "wrap",
										position: "absolute",
										left: -13,
										top: 110,
									}}
								>
									<Circle sx={{ color: [colors.primary] }} />
									<Typography variant="h5" sx={{ color: [colors.black] }}>
										Education
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										flexWrap: "wrap",
										position: "absolute",
										left: -13,
										top: 675,
									}}
								>
									<Circle sx={{ color: [colors.primary] }} />
									<Typography variant="h5" sx={{ color: [colors.black] }}>
										Experience
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										flexWrap: "wrap",
										position: "absolute",
										left: -13,
										bottom: 140,
									}}
								>
									<Circle sx={{ color: [colors.primary] }} />
									<Typography variant="h5" sx={{ color: [colors.black] }}>
										Skills
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item size={{ md: 9.7, xs: 12 }}>
							<Grid
								container
								sx={{
									padding: "30px",
									mb: 3,
									backgroundColor: [colors.white],
									borderRadius: 2,
								}}
							>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingRight: { md: "70px", xs: "0px" },
										borderRight: {
											md: `1px solid ${colors.border}`,
											xs: "0px",
										},
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										Software Engineering - Dual degree Engineer Manager
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										ESIEA Paris – Engineering School (2019 - 2022)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 3 }}
									>
										M2 : MSc Data , Digital Business & Artificial Intelligence
									</Typography>
								</Grid>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingRight: { md: "35px", xs: "0px" },
										paddingLeft: { md: "35px", xs: "0px" },
										borderRight: {
											md: `1px solid ${colors.border}`,
											xs: "0px",
										},
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										MBA Business Administration and International Management
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										SKEMA Paris – Business School (2020 - 2023)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 3 }}
									>
										FRENCH PGE (Programme Grande Ecole)
									</Typography>
								</Grid>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingLeft: { md: "70px", xs: "0px" },
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										MSc Data , Digital Business & Artificial Intelligence
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										SKEMA Paris – Business School (2022 - 2023)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 3 }}
									>
										Data Science - Artificial Intelligence - 
										Business Intelligence
									</Typography>
								</Grid>
							</Grid>
							<Grid
								container
								sx={{
									padding: "30px",
									backgroundColor: [colors.white],
									borderRadius: 2,
									mb: 3,
								}}
							>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingRight: { md: "70px", xs: "0px" },
										borderRight: {
											md: `1px solid ${colors.border}`,
											xs: "0px",
										},
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										VIE - Data Analyst
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										SAINT-GOBAIN - Philadelphia, US (July 2024 to May. 2025)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										I develop detailed procurement reports and create visual
										dashboards using BI tools to track key performance
										indicators (KPIs).I work on data science projects to
										optimize procurement processes through data analysis,
										predictive modeling, and AI integration.
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										<b>Result</b> : Boosted purchasing team efficiency with the
										creation of 8 new dashboards and AI integration.
									</Typography>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21, mt: 3 }}
									>
										IT CRM Business Analyst
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										LVMH - Paris, FR (May to Dec. 2023)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										I've led data analysis projects, translating complex data
										into actionable insights for strategic decision-making.
										Analyzed and optimized CRM systems, enhancing CRM processes.
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										<b>Result</b> : Developed a script to analyze data and
										identify potential client outliers, improving CRM
										performance through interactive dashboard creation.
									</Typography>
								</Grid>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingRight: { md: "35px", xs: "0px" },
										paddingLeft: { md: "35px", xs: "0px" },
										borderRight: {
											md: `1px solid ${colors.border}`,
											xs: "0px",
										},
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										Business Intelligence Engineer
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										SAFRAN - Paris, FR (April 2021 to Sep. 2021)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										Innovated and improved pilotage tool functionalities,
										significantly enhancing data processing capabilities and
										operational efficiency at Safran. Conducted in-depth
										analysis and troubleshooting, ensuring tool performance.
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										<b>Result</b> :Developed a central Power BI dashboard
										aggregating data from multiple databases to provide the
										purchasing team with client insights. Created 3 VBA scripts
										in Excel to help the VP identify key performance indicators
										(KPIs)
									</Typography>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21, mt: 3 }}
									>
										Project manager Unity
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										MC2I - Paris, FR (Sep. 2021 to Jan. 2022)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										Directed the Project Unity, managing all phases from
										conception to delivery.
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										<b>Result</b> : Successfully implemented the software on the
										MC2I site, enabling new employees and clients to explore the
										premises in 3D and learn more about the company.
									</Typography>
								</Grid>
								<Grid
											item
											size={{ md: 4, xs: 12 }}
											sx={{
												paddingLeft: { md: "70px", xs: "0px" },
												mb: { md: 0, xs: 4 },
											}}
										>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										Data & Development Engineer
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										SAFRAN - Paris, FR (May to Aug. 2022)
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										Led the development and optimization of data and workstation
										solutions. Collaborated with cross-functional teams to
										identify technical requirements and deliver tailored IT
										solutions.
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 2 }}
									>
										<b>Result</b> : Built a comprehensive Power BI "MASTER
										Dashboard" for analyzing employee data and improved scripts
										for more efficient information retrieval..
									</Typography>
								</Grid>
							</Grid>
							<Grid
								container
								sx={{
									padding: "30px",
									backgroundColor: [colors.white],
									borderRadius: 2,
								}}
							>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingRight: { md: "70px", xs: "0px" },
										borderRight: {
											md: `1px solid ${colors.border}`,
											xs: "0px",
										},
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										Programming language
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										Java , C , C#, SQL , JavaScript, VBA , Kotlin
									</Typography>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21, mt: 3 }}
									>
										Data Science
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										Python , R , Stata, MATLAB
									</Typography>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21, mt: 3 }}
									>
										CRM
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										SAP, Salesforce
									</Typography>
								</Grid>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingRight: { md: "35px", xs: "0px" },
										paddingLeft: { md: "35px", xs: "0px" },
										borderRight: {
											md: `1px solid ${colors.border}`,
											xs: "0px",
										},
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										Library Data Science
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow
									</Typography>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21, mt: 3 }}
									>
										Clustering Methods
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										K-Means, DBSCAN, KNN , GLS, GMM
									</Typography>
								</Grid>
								<Grid
									item
									size={{ md: 4, xs: 12 }}
									sx={{
										paddingLeft: { md: "70px", xs: "0px" },
										mb: { md: 0, xs: 4 },
									}}
								>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21 }}
									>
										IDE and tools
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										Anaconda,Visual Studio, GitHub, Fast API, Docker, MySQL
									</Typography>
									<Typography
										variant="h5"
										sx={{ color: [colors.black], fontSize: 21, mt: 3 }}
									>
										Data visualization
									</Typography>
									<Typography
										component="p"
										sx={{ fontSize: 16, color: [colors.grey], mt: 1.5 }}
									>
										Power BI, TABLEAU, EXCEL
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* ======= MY PORTFOLIO ======= */}
			<Box id="portfolio" sx={{ backgroundColor: [colors.white], py: 10 }}>
				<Container>
					{/* Tagline */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							mb: 2,
						}}
					>
						<CardMedia
							component="img"
							image={Images.dot}
							sx={{ width: 17, height: 17 }}
						/>
						<Typography
							sx={{
								ml: 1.5,
								fontSize: 15,
								fontWeight: 500,
								fontFamily: "Jost, sans-serif",
								color: colors.text,
								textTransform: "uppercase",
								textAlign: "center",
							}}
						>
							My Portfolio
						</Typography>
					</Box>

					{/* Main Heading */}
					<Typography
						variant="h2"
						sx={{
							fontSize: 40,
							fontWeight: 700,
							color: colors.black,
							fontFamily: "Jost, sans-serif",
							textAlign: "center",
						}}
					>
						VISIT MY PORTFOLIO
					</Typography>
					<Grid container spacing={3} pt={5}>
						{portfolio.map((item, index) => (
							<Grid item key={index} size={{ md: 4, sm: 6, xs: 12 }}>
								<Box
									sx={{
										position: "relative",
										width: "100%",
										height: 350,
										overflow: "hidden",
										borderRadius: 1,
										cursor: "pointer",
										"&:hover .hoverOverlay": {
											display: "flex",
										},
									}}
								>
									<CardMedia
										component="img"
										image={item.img}
										sx={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>

									<Box
										className="hoverOverlay"
										sx={{
											display: "none",
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											backgroundColor: "rgba(31,31,31,0.7)",
											justifyContent: "center",
											alignItems: "center",
											flexDirection: "column",
										}}
										onClick={() => handleItemClick(item)}
									>
										<Box
											sx={{
												width: "60%",
												backgroundColor: colors.primary,
												color: colors.white,
												borderRadius: 2,
												padding: "20px",
												position: "absolute",
												bottom: 20,
											}}
										>
											<Typography component="p" sx={{ fontSize: 16 }}>
												Dashboard Project
											</Typography>
											<Typography variant="h5" sx={{ fontSize: 21 }}>
												The best way to impress your web
											</Typography>
										</Box>
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
					{isModalOpen && selectedItem && (
						<Box
							sx={{
								position: "fixed",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								margin: "auto",
								width: "80%",
								borderRadius: 3,
								backgroundColor: colors.white,
								boxShadow: 2,
								padding: "20px",
								zIndex: 99,
								height: "90vh",
							}}
						>
							<Close
								sx={{ display: "block", ml: "auto", mb: 2, cursor: "pointer" }}
								onClick={handleClose}
							/>
							<Swiper
								navigation={true}
								pagination={true}
								loop={true}
								modules={[Navigation, Pagination]}
								className="mySwiper"
							>
								{selectedItem.images.map((img, idx) => (
									<SwiperSlide key={idx}>
										<CardMedia
											component="img"
											image={img}
											sx={{
												width: "100%",
												height: 300,
												borderRadius: 2,
												objectFit: "cover",
											}}
										/>
									</SwiperSlide>
								))}
							</Swiper>
							<Typography variant="h5" sx={{ fontSize: 21, mt: 3 }}>
								{selectedItem.title}
							</Typography>
							<Typography component="p" sx={{ fontSize: 16, mt: 2 }}>
								{selectedItem.description}
							</Typography>
						</Box>
					)}
				</Container>
			</Box>
			{/* ======== Certifications ======== */}
			<Box id="Certifications" sx={{ backgroundColor: [colors.secondary], py: 8 }}>
				<Container>
					<Grid container spacing={6} alignItems="center">
						{/* Left Section - Text & Info */}
						<Grid item md={7} xs={12} sx={{ order: { xs: 2, md: 1 } }}>
							{/* Main Heading */}
							<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between", // <-- Sépare bien gauche/droite
								flexWrap: "wrap", 
								mb: 5,
							}}
							></Box>
							
							<Typography
								variant="h2"
								sx={{
									fontSize: { xs: 32, md: 48 },
									fontWeight: 700,
									color: colors.text,
									fontFamily: "Jost, sans-serif",
								}}
							>
								Certifications —{" "}
								<Box component="span" sx={{ color: colors.primary }}>
									<Typewriter
										options={{
											strings: [
												"DATA ",
												"Business Intelligence ",
												"Cloud ☁️ ",
												"Artificial Intelligence ",
												"GDPR ",
												"DATA SCIENCE ",
											],
											autoStart: true,
											loop: true,
											delay: 50,
											deleteSpeed: 50,
										}}
									/>
								</Box>
							</Typography>
							
						<Box id="certifications" sx={{ backgroundColor: colors.secondary, py: 8 }}>
						<Container>
							<Grid container spacing={10}>
						<Grid item xs={12} md={6}>
							{[
							"🤖 Artificial Intelligence: Build AI + LLM & ChatGPT (Udemy, 2024)",
							"🧠 IBM Watson Studio Data Science (IBM, 2022)",
							"📈 Microsoft SCCM/Endpoint Configuration Manager (Udemy, 2022)",
							"☁️ Microsoft Azure Cloud (Microsoft, 2021)",
							"📈 Google Ads Certification (Google, 2021)",
							"☁️ AWS Cloud Practitioner Essentials (AWS, 2021)",
							"🔒 SecNumAcadémie Cybersecurity Certification (ANSSI, 2021)"
							].map((certif, index) => (
							<Box key={index} mb={1}>
							<Typography sx={{ fontSize: 16, textAlign: "left" }}>
								{certif}
							</Typography>
							</Box>
							))}
						</Grid>

						<Grid item xs={12} md={6}>
							{[
							"📊 DP-900: Microsoft Azure Data Fundamentals (Microsoft, 2023)",
							"🧠 Python Certification (DataCamp, 2022)",
							"📈 Developing Cross-Cultural Intelligence (LinkedIn, 2022)",
							"☁️ Amazon API Gateway for Serverless App (AWS, 2021)",
							"📈 TOEIC 950/990 (ETS Global, 2021)",
							"📈 Label HandiManagement (Companieros, 2021)",
							"🔒 L'Atelier RGPD (CNIL, 2021)"
							].map((certif, index) => (
							<Box key={index} display="flex" alignItems="center" mb={1}>
								<span style={{ fontSize: 18, marginRight: 8 }}></span>
								<Typography sx={{ fontSize: 16 }}>{certif}</Typography>
							</Box>
							))}
						</Grid>
						</Grid>
						</Container>
						</Box>
						<CustomButton
					label="See my Certifications"
					onClick={() => {
						window.open(
						"https://www.linkedin.com/in/amirmoussous/details/certifications/?locale=en_US",
						"_blank"
						);
					}}
					/>
						</Grid>
					</Grid>
				</Container>
			</Box>			
			{/* ======= My Contact ======= */}
			<Box id="contact" sx={{ backgroundColor: [colors.white], py: 10 }}>
				<Container>
					{/* Tagline */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							mb: 2,
						}}
					>
						<CardMedia
							component="img"
							image={Images.dot}
							sx={{ width: 17, height: 17 }}
						/>
						<Typography
							sx={{
								ml: 1.5,
								fontSize: 15,
								fontWeight: 500,
								fontFamily: "Jost, sans-serif",
								color: colors.text,
								textTransform: "uppercase",
								textAlign: "center",
							}}
						>
							My Contact
						</Typography>
					</Box>
					{/* Main Heading */}
					<Typography
						variant="h2"
						sx={{
							fontSize: 40,
							fontWeight: 700,
							color: colors.black,
							fontFamily: "Jost, sans-serif",
							textAlign: "center",
						}}
					>
						I WANT TO HEAR FROM YOU
					</Typography>
					<Grid container pt={6} pb={2} spacing={4}>
						<Grid item size={{ md: 8, xs: 12 }}>
							<form
								action="https://formsubmit.co/Amirmoussous@gmail.com"
								method="POST"
							>
								<TextField
									type="text"
									placeholder="Your name"
									name="name"
									required
									sx={{
										width: { sm: "48.5%", xs: "100%" },
										mr: "3%",
										mb: "20px",
									}}
								/>
								<TextField
									type="email"
									name="email"
									placeholder="Your email"
									required
									sx={{ width: { sm: "48.5%", xs: "100%" }, mb: "20px" }}
								/>
								<TextField
									type="tel"
									placeholder="Your phone"
									required
									name="phone"
									sx={{
										width: { sm: "48.5%", xs: "100%" },
										mr: "3%",
										mb: "20px",
									}}
								/>
								<TextField
									type="text"
									placeholder="Subject"
									name="subject"
									required
									sx={{ width: { sm: "48.5%", xs: "100%" }, mb: "20px" }}
								/>
								<TextField
									type="text"
									rows={4}
									name="message"
									multiline
									placeholder="Message"
									required
									sx={{ width: "100%" }}
								/>
								<CustomButton type="submit" label={"Send Me Message"} />
							</form>
						</Grid>
						<Grid item size={{ md: 4, xs: 12 }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									mb: 2,
								}}
							>
								<Box
									sx={{
										padding: "15px",
										borderRadius: "8px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: [colors.primaryExtraLight],
										color: [colors.primary],
										mr: 1,
									}}
								>
									<LocationOn sx={{ fontSize: 30 }} />
								</Box>
								<Box>
									<Typography
										variant="h6"
										sx={{
											color: [colors.black],
											fontSize: 21,
											fontWeight: 600,
										}}
									>
										Address
									</Typography>
									<Typography
										component="p"
										sx={{
											color: [colors.gray],
											cursor: "pointer",
											"&:hover": { color: [colors.primary] },
											fontSize: 14,
										}}
									>
										Philadelphia - USA
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									mb: 2,
								}}
							>
								<Box
									sx={{
										padding: "15px",
										borderRadius: "8px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: [colors.primaryExtraLight],
										color: [colors.primary],
										mr: 1,
									}}
								>
									<PhoneInTalk sx={{ fontSize: 30 }} />
								</Box>
								<Box>
									<Typography
										variant="h6"
										sx={{
											color: [colors.black],
											fontSize: 21,
											fontWeight: 600,
										}}
									>
										Phone
									</Typography>
									<Typography
										component="p"
										sx={{
											color: [colors.gray],
											cursor: "pointer",
											"&:hover": { color: [colors.primary] },
											fontSize: 14,
										}}
									>
										+33 6 46 64 03 22
									</Typography>
									<Typography
										component="p"
										sx={{
											color: [colors.gray],
											cursor: "pointer",
											"&:hover": { color: [colors.primary] },
											fontSize: 14,
										}}
									>
										+1 484 401-2663
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									mb: 2,
								}}
							>
								<Box
									sx={{
										padding: "15px",
										borderRadius: "8px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: [colors.primaryExtraLight],
										color: [colors.primary],
										mr: 1,
									}}
								>
									<Email sx={{ fontSize: 30 }} />
								</Box>
								<Box>
									<Typography
										variant="h6"
										sx={{
											color: [colors.black],
											fontSize: 21,
											fontWeight: 600,
										}}
									>
										Email
									</Typography>
									<Typography
										component="p"
										sx={{
											color: [colors.gray],
											cursor: "pointer",
											"&:hover": { color: [colors.primary] },
											fontSize: 14,
										}}
									>
										Amirmoussous@gmail.com
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										padding: "15px",
										borderRadius: "8px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: [colors.primaryExtraLight],
										color: [colors.primary],
										mr: 1,
									}}
								>
									<LinkedIn sx={{ fontSize: 30 }} />
								</Box>
								<Box>
									<Typography
										variant="h6"
										sx={{
											color: [colors.black],
											fontSize: 21,
											fontWeight: 600,
										}}
									>
										Linkedin
									</Typography>
									<Typography
										component={Link}
										to="https://www.linkedin.com/in/amirmoussous/?locale=en_US"
										target="_blank"
										sx={{
											color: [colors.gray],
											cursor: "pointer",
											"&:hover": { color: [colors.primary] },
										}}
									>
										Amir MOUSSOUS
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Fragment>
	);
}

export default Home;
