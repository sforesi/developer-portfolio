import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ data }) {
	return (
		<Head>
			<title>{data.title}</title>
			<meta name="title" content={data.title} />
			<meta name="author" content="Sebastiano Foresi" />
			<meta name="description" content={data.description} />
			<meta name="keywords" content={data.keywords.join(", ")} />
			<link rel="canonical" href={data.url} />
			{/* Favicon */}
			<link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="./favicon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="./favicon.png"
			/>
			<script
				async
				src="https://code.iconify.design/1/1.0.4/iconify.min.js"
			></script>
		</Head>
	);
}

SEO.prototype = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

export default SEO;
