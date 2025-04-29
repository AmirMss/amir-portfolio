import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{AppRoutes.map((route, index) => (
					<Route key={index} path={route.path} element={route.component} />
				))}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
