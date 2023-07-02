"use client";

import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layout/Layout";

const About: NextPage = ({ comments }) => {
  return (
    <Layout showSidebar>
      <h1>Привет, это какая то страница в нашем проекте</h1>
    </Layout>
  );
};

export default About;
