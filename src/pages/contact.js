import React from "react";

import Layout from "../components/layout";

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <h1> Contact </h1> <p> Phone: 2052538406 </p>
                <p> Email: david.niederweis@gmail.com </p>
                <p>
                    Twitter:{" "}
                    <a
                        href="https://twitter.com/DjJunk9?lang=en"
                        target="_blank"
                    >
                        @DjJunk9
                    </a>
                </p>
            </Layout>
        </div>
    );
};

export default ContactPage;
