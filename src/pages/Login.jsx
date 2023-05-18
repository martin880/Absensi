import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Text,
	Button,
	Image,
	useColorModeValue,
	Center,
	HStack,
} from "@chakra-ui/react";
import logo from "../assets/img/logo-talenta.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const nav = useNavigate();

	const inputHandler = (e) => {
		const { id, value } = e.target;
		const tempUser = { ...user };
		tempUser[id] = value;
		setUser(tempUser);
		console.log(tempUser);
	};

	const login = async () => {
		const result = await axios.post("http://localhost:2000/auth/v1", user);
		console.log(result.data);
		alert(result.data.message);
		if (result.data.value) {
			nav("/");
		}
		return;
	};
	return (
		<Center>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack align={"center"}>
						<Image boxSize={"120px"} src={logo}></Image>
					</Stack>
					<Stack spacing={4}>
						<FormControl id="email">
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								placeholder="Email or Username"
								onChange={inputHandler}
							/>
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								placeholder="Password"
								onChange={inputHandler}
							/>
						</FormControl>
						<Stack spacing={10}>
							<Stack
								direction={{ base: "column", sm: "row" }}
								align={"start"}
								justify={"space-between"}
							>
								<Checkbox>Remember me</Checkbox>
								<Link color={"blue.400"}>Forgot password?</Link>
							</Stack>
							<Button
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
								onClick={login}
							>
								Sign in
							</Button>
							<Link to="/register">
								<HStack>
									<Center>Don't have an account?</Center>
									<Text color={"blue"}>Register</Text>
								</HStack>
							</Link>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Center>
	);
}
