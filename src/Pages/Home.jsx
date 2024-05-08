import { MdArrowForwardIos } from "react-icons/md";
import { Tabs, Tab } from "../Component/Tabs";
import React, { useRef, useState } from "react";
import { TbReload } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";
import "../App.css"
import logo from "../assets/Clip path group.png";
import logoText from "../assets/Component 40 (1).png"
import { FaPlus } from "react-icons/fa";
import HomeFAQ from "../Component/HomeFAQ";

const Home = () => {
	const questions = [
		{ page: 1, question: "9 + 6 + 7x - 2x - 3" },
		{ page: 2, question: "2x + 5 = 15" },
		{ page: 3, question: "x^2 - 4" },
		{ page: 4, question: "y = 2x + 3, x = 5" },
		{ page: 5, question: "3x - 7 = 8" },
		{ page: 6, question: "2y + 4 = 10" },
		{ page: 7, question: "4x + 2 = 22" },
		{ page: 8, question: "2(x - 3) = 10" },
		{ page: 9, question: "5x + 3 = 2x - 7" },
		{ page: 10, question: "2(x + 4) = 16" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
	};

	const handlePrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + questions.length) % questions.length
		);
	};

	const handleReset = () => {
		setCurrentIndex(0);
	};

	const handleFullScreen = () => {
		const element = document.documentElement;
        const div = document.getElementById("full-screen");
        const hideNavigation = document.getElementById("hide-navigation")
		if (document.fullscreenElement) {
			document.exitFullscreen();

            div.classList.add("normal-screen")
            div.classList.remove("full-screen")
            hideNavigation.classList.add("hidden")

			console.log(div);
		} else {
			element.requestFullscreen().then(() => {
            // Add a class to the element when it enters fullscreen
            const div = document.getElementById("full-screen");
            div.classList.add("full-screen");
            div.classList.remove("normal-screen")
            div.classList.remove("relative")
            hideNavigation.classList.remove("hidden")



            console.log(div);
        }).catch((err) => {
            console.error("Failed to enter fullscreen mode:", err);
        });
		}
	};

	return (
		<div>
			<div className="flex mt-10 relative items-center ">
				<svg
					width="23.000000"
					height="24.000000"
					viewBox="0 0 23 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					
					<path
						id="Vector"
						d="M11.82 1.06C11.59 0.86 11.3 0.75 11 0.75C10.69 0.75 10.4 0.86 10.17 1.06L1.42 8.71C1.29 8.83 1.18 8.97 1.11 9.14C1.03 9.3 0.99 9.48 1 9.65L1 20.74C1 21.08 1.13 21.39 1.36 21.63C1.6 21.86 1.91 21.99 2.25 21.99L7.25 21.99C7.58 21.99 7.89 21.86 8.13 21.63C8.36 21.39 8.5 21.08 8.5 20.74L8.5 15.74C8.5 15.41 8.63 15.09 8.86 14.86C9.1 14.63 9.41 14.49 9.75 14.49L12.25 14.49C12.58 14.49 12.89 14.63 13.13 14.86C13.36 15.09 13.5 15.41 13.5 15.74L13.5 20.74C13.5 21.08 13.63 21.39 13.86 21.63C14.1 21.86 14.41 21.99 14.75 21.99L19.75 21.99C20.08 21.99 20.39 21.86 20.63 21.63C20.86 21.39 21 21.08 21 20.74L21 9.65C21 9.48 20.96 9.3 20.88 9.14C20.81 8.97 20.7 8.83 20.57 8.71L11.82 1.06Z"
						stroke="#696671"
						stroke-opacity="1.000000"
						stroke-width="2.500000"
						stroke-linejoin="round"
					/>
				</svg>

				
                <MdArrowForwardIos className="m-2" />
				<span className="text-gray-600 font-inter text-base font-medium  text-center">
					Flashcard
				</span>
				<MdArrowForwardIos className="m-2" />
				<span className="text-gray-600 font-inter text-base font-medium  text-center">
					Mathematics
				</span>

				<MdArrowForwardIos className="m-2" />
				<span className="text-[#06286E] font-inter text-base font-semibold  text-center">
					{" "}
					Relation and Function
				</span>
                
			</div>

			<p className="mt-10 text-gradient font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl ">
				Relations and Functions ( Mathematics )
			</p>

			<div>
				<div className="mt-12 mx-5 ">
					<Tabs>
						<Tab label="Study">
							<div className="py-4 md:-ml-20 ">
								<div
									
									id="full-screen"
									className="relative normal-screen flex  justify-center items-center p-10 mx-auto  bg-gradient-to-bl  from-[#051B92]   to-[#2082EE]"
								>
									<div></div>

									<p className="text-2xl md:text-4xl text-white font-bold">
										{questions[currentIndex].question}
									</p>

									<div id="hide-navigation" className="absolute hidden bottom-8 left-1/2  -translate-x-1/2">
                                    <div   className="  font-semibold  flex w-full md:w-[500px] text-4xl items-center justify-between">
										<TbReload
											onClick={handleReset}
											className="text-white"
										/>
										<div className="flex justify-between items-center gap-8 text-4xl">
											<IoIosArrowBack
												onClick={handlePrevious}
												className="bg-gradient-to-b from-[#06286E] to-[#164EC0] border-2 m-2 text-white rounded-full"
											/>
											<p className="text-base text-white font-bold">
												{currentIndex + 1}/
												{questions.length + 0 || 1}
											</p>
											<IoIosArrowForward
												onClick={handleNext}
												className="bg-gradient-to-b from-[#06286E] to-[#164EC0] border-2 m-2 text-white rounded-full"
											/>
										</div>
										<MdFullscreen
											onClick={handleFullScreen}
											className="text-white"
										/>
									</div>
                                    </div>
								<div className="absolute  top-10  left-5">
									<svg
										width="19.000000"
										height="29.000000"
										viewBox="0 0 19 29"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<desc>Created with Pixso.</desc>
										<defs />
										<path
											id="Vector"
											d="M4.75 26.76C4.75 27.54 5.39 28.17 6.17 28.17L11.84 28.17C12.62 28.17 13.25 27.54 13.25 26.76L13.25 25.34L4.75 25.34L4.75 26.76ZM9 -0.17C3.53 -0.17 -0.91 4.28 -0.91 9.75C-0.91 13.13 0.77 16.09 3.34 17.89L3.34 21.09C3.34 21.87 3.97 22.51 4.75 22.51L13.25 22.51C14.03 22.51 14.67 21.87 14.67 21.09L14.67 17.89C17.24 16.09 18.92 13.13 18.92 9.75C18.92 4.28 14.47 -0.17 9 -0.17ZM13.04 15.56L11.84 16.41L11.84 19.67L6.17 19.67L6.17 16.41L4.97 15.56C4.03 14.91 3.26 14.04 2.73 13.03C2.2 12.02 1.92 10.9 1.92 9.75C1.92 5.84 5.09 2.67 9 2.67C12.91 2.67 16.09 5.84 16.09 9.75C16.09 12.06 14.96 14.23 13.04 15.56Z"
											fill="#F5F5F5"
											fill-opacity="1.000000"
											fill-rule="nonzero"
										/>
									</svg>
								</div>

								<div className="absolute top-10 right-5">
									<svg
										width="25.000000"
										height="25.000000"
										viewBox="0 0 25 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<desc>Created with Pixso.</desc>
										<defs />
										<path
											id="Vector"
											d="M14.82 2.5L14.82 -0.42C20.5 0.87 24.74 5.94 24.74 12C24.74 18.07 20.5 23.14 14.82 24.43L14.82 21.51C18.91 20.29 21.9 16.5 21.9 12C21.9 7.51 18.91 3.71 14.82 2.5ZM-0.77 7.75L-0.77 16.25L4.9 16.25L11.99 23.34L11.99 0.67L4.9 7.75L-0.77 7.75ZM18.36 12C18.36 10.82 18.03 9.65 17.4 8.64C16.78 7.64 15.88 6.82 14.82 6.29L14.82 17.7C16.92 16.67 18.36 14.51 18.36 12Z"
											fill="#F5F5F5"
											fill-opacity="1.000000"
											fill-rule="evenodd"
										/>
									</svg>
								</div>
								</div>
							</div>

							<div className="md:-ml-8 font-semibold  flex w-full md:w-[500px] text-3xl md:text-4xl items-center justify-between">
								<TbReload
									onClick={handleReset}
									className="text-[#0B3386]"
								/>
								<div className="flex items-center gap-8 text-4xl">
									<IoIosArrowBack
										onClick={handlePrevious}
										className="bg-gradient-to-b from-[#06286E] to-[#164EC0] border-2 m-2 text-white rounded-full"
									/>
									<p className="text-base font-bold">
										{currentIndex + 1}/
										{questions.length + 0 || 1}
									</p>
									<IoIosArrowForward
										onClick={handleNext}
										className="bg-gradient-to-b from-[#06286E] to-[#164EC0] border-2 m-2 text-white rounded-full"
									/>
								</div>
								<MdFullscreen
									onClick={handleFullScreen}
									className="text-[#0B3386]"
								/>
							</div>
						</Tab>
						<Tab label="Quiz">
							<div className="py-4 w-90 h-40 flex justify-center items-center ">
								<p className="text-3xl">Coming soon ...</p>
							</div>
						</Tab>

						<Tab label="Test">
							<div className="py-4 w-90 h-40 flex justify-center items-center ">
								<p className="text-3xl">Coming soon ...</p>
							</div>
						</Tab>
						<Tab label="Game">
							<div className="py-4 w-90 h-40 flex justify-center items-center ">
								<p className="text-3xl">Coming soon ...</p>
							</div>
						</Tab>
						<Tab label="Others">
							<div className="py-4 w-90 h-40 flex justify-center items-center ">
								<p className="text-3xl">Coming soon ...</p>
							</div>
						</Tab>
					</Tabs>
				</div>
			</div>


            <div className="flex   items-center justify-between"> 
                <div className="flex flex-1 my-10  items-center gap-5">
                    <img style={{boxShadow : "0px 0px 31px 0px rgba(8, 56, 153, 0.4)"}} src={logo} alt="" className="p-2 md:p-4 rounded-full w-10 md:w-20 h-10 md:h-20   "  srcset="" />
                    <div>
                        <p className="text-gray-600 font-bold text-sm mb-2">published by</p>
                        <img src={logoText} alt="" />
                    </div>
                </div>

                <div className="text-2xl flex-1 md:flex-none md:text-5xl  flex items-center gap-5" >
                <FaPlus className="ml-10 md:mr-0 rounded-full text-white p-2 bg-gradient-to-b from-[#06286E] to-[#164EC0]" />
                <div class="font-inter text-2xl md:text-4xl font-semibold text-gradient ">Create Flashcard</div>    


                </div>


            </div>


            <HomeFAQ></HomeFAQ>
		</div>
	);
};

export default Home;
