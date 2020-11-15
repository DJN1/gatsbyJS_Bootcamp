import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1> Contact </h1> <p> Phone: 2052538406 </p>
            <p> Email: david.niederweis@gmail.com </p>
            <p>
                Twitter:{" "}
                <a
                    href="https://twitter.com/DjJunk9?lang=en"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    @DjJunk9
                </a>
            </p>
        </Layout>
    );
};

export default ContactPage;
