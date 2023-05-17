import React from "react";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Spacer,
	useColorModeValue,
	HStack,
	Text,
	Icon,
	Container,
	VStack,
	Center,
} from "@chakra-ui/react";
import { HiChartBar } from "react-icons/hi";
import { MdWifi } from "react-icons/md";
import { CgBattery } from "react-icons/cg";
import { BsArrowLeft } from "react-icons/bs";

const Dashboard = () => {
	return (
		<Flex align={"center"} justify={"center"}>
			<Stack maxW={"lg"} py={12}>
				<Box
					rounded={"none"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					minW={"380px"}
					bgColor={"red.600"}
					p={8}
				>
					<Stack spacing={4}>
						<Flex>
							<Box p="4">
								<Heading alignSelf={"baseline"} fontSize={"sm"} color={"white"}>
									09.23
								</Heading>
							</Box>
							<Spacer />
							<Box p="2">
								<Icon boxSize={"12px"} color={"white"} as={HiChartBar}></Icon>
							</Box>
							<Box p="2">
								<Icon boxSize={"14px"} color={"white"} as={MdWifi}></Icon>
							</Box>
							<Box p="2">
								<Icon boxSize={"16px"} color={"white"} as={CgBattery}></Icon>
							</Box>
						</Flex>
						<Stack spacing={10}>
							<Flex>
								<HStack>
									<Center>
										<Box p="2">
											<Icon
												boxSize={"12px"}
												color={"white"}
												as={BsArrowLeft}
											></Icon>
										</Box>
									</Center>
								</HStack>
								{/* <HStack>
									<Center>
										<Box p="2">
											<Text color={"white"}>Live Attendance</Text>
										</Box>
									</Center>
								</HStack> */}
							</Flex>
						</Stack>
						<Stack spacing={10}>
							<Center>
								<VStack>
									<Box>
										<Heading color={"white"}>09 23</Heading>
									</Box>
									<Box>
										<Text color={"white"}>Wed, 15 May 2023</Text>
									</Box>
								</VStack>
							</Center>
							<Center>
								<Box
									rounded={"lg"}
									bg={useColorModeValue("white", "gray.700")}
									boxShadow={"lg"}
									minW={"340px"}
									bgColor={"white"}
									p={8}
								>
									<Center>
										<VStack>
											<Text fontWeight={"bold"} color={"gray.400"}>
												Schedule : 17 May 2023
											</Text>
											<Text fontWeight={"bold"} color={"black"}>
												SH2OPA
											</Text>
											<Text
												fontSize={"28px"}
												fontWeight={"bold"}
												color={"black"}
											>
												08.00 - 17.00
											</Text>
											<Text color={"blue"} as="samp">
												See 1 other attendance location
											</Text>
											<Box
												rounded={"md"}
												minW={"300px"}
												bgColor={"#bcdee8"}
												p={4}
											></Box>
											<HStack>
												<Button size={"lg"} colorScheme="facebook">
													Clock In
												</Button>
												<Spacer />
												<Button size={"lg"} colorScheme="facebook">
													Clock Out
												</Button>
											</HStack>
										</VStack>
									</Center>
								</Box>
							</Center>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Dashboard;
