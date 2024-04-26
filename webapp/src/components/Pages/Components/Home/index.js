import React from "react";
import useTestHook from '../../../../data/hooks/useTestHook';
import Layout from "../../../Layout";

function Home() {
    const response = useTestHook();

    return (
        <Layout activePage='home'>
            <section className="home page">
                <h3>
                    Home
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p> Test API response <br />
                    <code>
                        {JSON.stringify(response)}
                    </code>
                </p>
            </section>
        </Layout>
    );
}

export default Home;
