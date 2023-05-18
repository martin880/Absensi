import React, { state } from "react";
import {
	Flex,
	Box,
	Stack,
	Button,
	Heading,
	Spacer,
	useColorModeValue,
	HStack,
	Text,
	Icon,
	VStack,
	Center,
} from "@chakra-ui/react";
import { HiChartBar } from "react-icons/hi";
import { MdWifi } from "react-icons/md";
import { CgBattery } from "react-icons/cg";
import { BsArrowLeft, BsCupHot } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { InfoIcon } from "@chakra-ui/icons";
import Clock from "react-live-clock";
import Footer from "./Footer";

const Dashboard = () => {
	return (
		<>
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
									<Heading
										alignSelf={"baseline"}
										fontSize={"sm"}
										color={"white"}
									>
										<Clock style={{ fontSize: "1.3em" }} />
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
								<HStack>
									<Center>
										<Box p="2">
											<Icon
												boxSize={"10"}
												color={"white"}
												as={BsArrowLeft}
											></Icon>
										</Box>
									</Center>
									<Center>
										{/* <Box p="4" display={"flex"}>
										<Text color={"white"} textAlign={"center"}>
											Live Attendance
										</Text>
									</Box> */}
									</Center>
								</HStack>
							</Stack>
							<Stack spacing={10}>
								<Center>
									<VStack>
										<Box>
											<Heading color={"white"}>
												<Clock />
											</Heading>
										</Box>
										<Box>
											<Text color={"white"}>Wed, 17 May 2023</Text>
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
													Schedule: 17 May 2023
												</Text>
												<Text
													fontSize={"22px"}
													fontWeight={"bold"}
													color={"black"}
												>
													SH2OPA
												</Text>
												<Text
													fontSize={"25px"}
													fontWeight={"bold"}
													color={"black"}
												>
													08.00 - 17.00
												</Text>
												<Text color={"blue"} as="samp" cursor={"pointer"}>
													See 1 other attendance location
												</Text>
												<Box
													rounded={"md"}
													minW={"300px"}
													bgColor={"#bcdee8"}
													p={1}
												>
													<Text
														color={"gray.500"}
														display={"flex"}
														align={"center"}
														justifyContent={"center"}
														fontSize={"10px"}
													>
														<Box mx={"2"}>
															<InfoIcon />
														</Box>
														Selfie foto is required to Clock In/Out
													</Text>
												</Box>
												<HStack>
													<Button
														minW={"143px"}
														minH={"40px"}
														colorScheme="facebook"
													>
														<Text fontSize={"16px"}>Clock In</Text>
													</Button>
													<Spacer />
													<Button
														minW={"143px"}
														minH={"40px"}
														colorScheme="facebook"
													>
														<Text fontSize={"16px"}>Clock Out</Text>
													</Button>
												</HStack>
												<Box
													borderRadius={"50px"}
													minW={"300px"}
													minH={"30px"}
													bgColor={"gray.200"}
													p={1}
												>
													<HStack>
														<Button
															minW={"70px"}
															borderRadius={"50px"}
															colorScheme="gray"
															bg={useColorModeValue("white", "gray.700")}
															boxShadow={"md"}
															_hover={"none"}
														>
															<Icon
																boxSize={"5"}
																color={"red"}
																as={BsCupHot}
															></Icon>
														</Button>
														<Spacer />
														<Text
															textColor={"GrayText"}
															display={"flex"}
															paddingEnd={"10"}
															textAlign={"center"}
															justifyContent={"center"}
														>
															Harusnya ini Slider
														</Text>
													</HStack>
												</Box>
											</VStack>
										</Center>
									</Box>
								</Center>
							</Stack>
							{/* attendance log */}
							<Center>
								<Box
									rounded={"none"}
									bg={useColorModeValue("white", "gray.700")}
									boxShadow={"lg"}
									minW={"385px"}
									bgColor={"white"}
									p={8}
								>
									<Flex
										justifyContent={"space-between"}
										w="100%"
										fontWeight={"500"}
									>
										<Box>
											<Text color={"gray.600"}>Attendance Log</Text>
										</Box>
										<Box>
											<Text color={"gray.600"}>View Log</Text>
										</Box>
									</Flex>
									<Flex justifyContent={"space-between"}>
										<Box padding="10px" fontWeight={"500"}>
											<Box>07:30</Box>
											<Box color="#8A8A8A">17 May</Box>
										</Box>

										<Center
											color="#8A8A8A"
											fontWeight={"500"}
											fontSize={"18px"}
										>
											Clock In
										</Center>
										<Center>
											<Icon
												as={AiOutlineRight}
												fontSize={"30px"}
												color="#8A8A8A"
											></Icon>
										</Center>
									</Flex>
								</Box>
							</Center>
						</Stack>
						{/* Footer */}
						<Footer />
					</Box>
				</Stack>
			</Flex>
		</>
	);
};

export default Dashboard;
