"use client";

import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RequiredAsterisk from "@/components/ui/RequiredAsterisk";

const Admin = () => {
	const router = useRouter();
	const [accessError, setAccessError] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		const response = await fetch("/api/auth/login", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: username, password: password }),
		});

		if (!response.ok) {
			setAccessError(true);
			throw await response.json();
		}

		const data = await response.json();
		if (data.success) {
			router.push("/admin");
		}
	};

	return (
		<>
			<Head>
				<title>TOKEN2049 Week Admin</title>
			</Head>

			<div className="w-screen h-screen flex justify-center items-center authpage-animation bg-gray-100">
				<div className="max-w-[48rem] sm:w-[80vw] w-11/12 p-5 bg-white rounded-xl">
					<div className="relative z-20">
						<div className="w-full flex justify-between">
							<div className="w-full flex flex-col justify-start items-start -ml-2">
								<Image src={"/Token-logo.png"} alt="Token2049 Logo" width="160" height="100" />
							</div>
						</div>
						<div className="w-full flex flex-col sm:flex-row mt-4 pr-4 sm:space-x-10">
							<div className="sm:w-2/5">
								<div className="text-lg font-semibold font-primary">Admin Console</div>
								<p className="text-sm mt-4 pr-14">Please enter login credentials</p>
								<p className="text-[10px] text-gray-500 mt-8 sm:mt-36 pr-14">Please sign in to get access.</p>
							</div>

							<div className="w-full sm:w-3/5 mt-10 sm:mt-0">
								<form
									onSubmit={async (e) => {
										e.preventDefault();
										await login();
									}}
								>
									<p className="text-sm mb-1">
										Username
										<RequiredAsterisk />
									</p>
									<input
										type="username"
										value={username}
										onChange={(e) => {
											setUsername(e.target.value);
											setAccessError(false);
										}}
										className="w-full p-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100 text-sm"
										required
									/>
									<p className="text-sm mt-4 mb-1">
										Password
										<RequiredAsterisk />
									</p>
									<input
										type="password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
											setAccessError(false);
										}}
										className="w-full p-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100 text-sm"
										required
									/>
									{accessError && <span className="text-error-400 text-xs mt-1">Invalid credentials</span>}

									<div className="flex justify-end mt-12">
										<button
											type="submit"
											className="flex justify-center items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-[14px] text-light-100 py-2 px-6 rounded-lg font-primary font-semibold max-w-[210px]"
										>
											Submit
											<span className="ml-2 text-xl">
												<i className="fa-solid fa-arrow-right-long"></i>
											</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

					<ul className="authpage_animation_box_area">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Admin;
