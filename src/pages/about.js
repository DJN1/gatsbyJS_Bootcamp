import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About me</h1>
                <p>
                    I am entering entering the University of Alabama at
                    Huntsville as a CS Major in 2019.
                </p>
                <p>
                    Currently I work for the Department of Microbiology at the
                    University of Alabama at Birmingham as a Web Developer.
                </p>
                <p>
                    <Link to="/contact">Contact me.</Link>{" "}
                </p>
            </Layout>
        </div>
    );
};

export default AboutPage;
