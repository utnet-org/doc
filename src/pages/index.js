import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className={styles.container} >
                <div  className={styles.heroH1}>
                    <Translate description="The homepage main heading" id='homepage.heroH1'>
                        Utility Docs
                    </Translate>
                </div>
                <p className={styles.heroText}>

                    <Translate id='homepage.heroText'>
                        At this stage, UNC token issuance takes place, the public chain foundation is established, and the community and public chain are in the development phase. During this stage, the first internal test will be initiated, focusing on incentive model testing based on the Binance Smart Chain.
                    </Translate>
                </p>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
