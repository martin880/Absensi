import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<Flex align={"center"} justify={"center"}>
				<Stack maxW={"lg"} py={0}>
					<Center
						h="70px"
						minW={"380px"}
						bgColor={"#C53030"}
						justifyContent={"space-between"}
						padding={"10px"}
						color="white"
						fontWeight={"500"}
					>
						<Link to="/dashboard">
							<Box>DASHBOARD</Box>
						</Link>
						<Link to="/log">
							<Box>ATTENDANCE LOG</Box>
						</Link>

						<Link to="/login">
							<Box>LOG OUT</Box>
						</Link>
					</Center>
				</Stack>
			</Flex>
		</>
	);
}
