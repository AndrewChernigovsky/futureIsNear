"use client";

import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layout/Layout";

interface Props {
	comments: []
}

const About: NextPage<Props> = (props) => {
	const { comments } = props;
	
	return (
		<Layout showSidebar>
			<h1>Привет, это какая то страница в нашем проекте</h1>
			<div>{ comments }</div>
		</Layout>
	);
};

export default About;
