import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Image,
	useColorModeValue,
	Center,
} from "@chakra-ui/react";
import logo from "../assets/img/logo-talenta.svg";

export default function Login() {
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
							<Input type="email" placeholder="Email or Username" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" placeholder="Password" />
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
							>
								Sign in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Center>
	);
}
