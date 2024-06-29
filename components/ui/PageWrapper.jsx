import Head from "next/head";

export default function PageWrapper({ title = "", description = "", useDefaultContainer = true, classes = "", blog = false, children }) {
	return (
		<>
			{useDefaultContainer ? (
				<div className="flex flex-col items-center w-full min-h-screen bg-light-200">
					<div
						className={
							blog
								? "w-full max-w-[768px] px-6 md:px-8 lg:px-0 py-40"
								: classes
								? classes
								: "w-full max-w-[1920px] pt-36 pb-32 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20"
						}
					>
						{children}
					</div>
				</div>
			) : (
				children
			)}
		</>
	);
}
