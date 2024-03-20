import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	project: {
		link: "https://github.com/chainrule-labs/pesto-contracts",
	},
	docsRepositoryBase: "https://github.com/chainrule-labs/pesto-docs",
	editLink: {
		component: null,
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	footer: {
		text: "© 2024 Chain Rule, LLC",
	},
	useNextSeoProps() {
		return {
			titleTemplate: "Pesto - %s",
			description:
				"Pesto is a decentralized, on-chain derivatives protocol that enables users to create independent positions.",
			openGraph: {
				title: "Pesto",
				description:
					"Pesto is a decentralized, on-chain derivatives protocol that enables users to create independent positions.",
				url: "https://docs.pesto.finance",
				type: "website",
				images: [
					{
						url: "/seoCard.png",
						alt: "og-seo-card-image",
					},
				],
				site_name: "Documentation",
			},
			twitter: {
				title: "Pesto",
				description:
					"Pesto is a decentralized, on-chain derivatives protocol that enables users to create independent positions.",
				card: "summary_large_image",
				images: [
					{
						url: "/seoCard.png",
						alt: "twitter-seo-card-image",
					},
				],
				site: "@chainrule_io",
			},
		};
	},
	head: (
		<>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<link rel="icon" href="/favicon.ico" />
		</>
	),
	logo: (
		<>
			<img src="/iconPesto24x24.svg" alt="Pesto" width={24} height={24} />
			<span style={{ marginLeft: ".4em", fontWeight: 800 }}>Pesto</span>
		</>
	),
};

export default config;
