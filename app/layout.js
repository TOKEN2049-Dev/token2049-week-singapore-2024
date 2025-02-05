import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import GoogleAnalytics from "./GoogleAnalytics";
import Script from "next/script";

export const metadata = {
	title: "TOKEN2049 Week | 28 April - 4 May 2025 | Dubai",
	description:
		"TOKEN2049 Week is the year's widest range of meetups, workshops, networking drinks and parties with TOKEN2049 being the flagship event of the week – creating unparalleled networking opportunities.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="./favicon.ico" />
				<meta content="yes" name="apple-mobile-web-app-capable" />
				<meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
				<meta name="author" content={metadata.description} />
				<meta property="og:title" content={metadata.title} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://raw.githubusercontent.com/stanleyftf1005/token2049-week-singapore-2024/refs/heads/main/public/TOKENWEEK%20DXB%20-%20OpenGraph%20(1)%20(1).png" />
				<meta property="og:url" content="https://week.token2049.com" />
				<meta property="og:site_name" content={metadata.title} />
				<meta property="og:description" content={metadata.description} />
				<meta property="keywords" content="token2049" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://week.token2049.com" />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.title} />
				<meta name="twitter:image" content="https://raw.githubusercontent.com/stanleyftf1005/token2049-week-singapore-2024/refs/heads/main/public/TOKENWEEK%20DXB%20-%20OpenGraph%20(1)%20(1).png" />
				<meta name="twitter:tags" content="token2049" />

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

				<Script strategy="afterInteractive" src="https://next.brella.io/scripts/custom-page" />

				<GoogleAnalytics />
			</head>
			<body>{children}</body>
		</html>
	);
}
