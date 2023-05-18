import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Log from "./pages/Log";

function App() {
	return (
		<Box>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/log" key="log" element={<Log />}></Route>

				<Route path="/login" key="log" element={<Login />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
			</Routes>
		</Box>
	);
}

export default App;
