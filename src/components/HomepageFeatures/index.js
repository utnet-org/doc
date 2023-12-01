import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";
import { useHistory } from 'react-router-dom';
import Link from "@docusaurus/Link"; // 导入路由相关的依赖

const FeatureList = [
  {
    title:  <Translate id='homepage.boxTitle1'>Easy to Use</Translate>,
    Svg: require('../../../static/img/Layer_1.png').default,
    description: (
      <>
          <Translate id='homepage.boxText1'>
              Empower the Network: Join as a Node
          </Translate>
      </>
    ),
  },
  {
    title:  <Translate id='homepage.boxTitle2'>Focus on What Matters</Translate>,
    Svg: require('../../../static/img/Layer_2.png').default,
    description: (
      <>
          <Translate id='homepage.boxText2'>
              Contribute Computing Power: Enhance Network Performance
          </Translate>
      </>
    ),
  },
    {
        title: <Translate id='homepage.boxTitle3'> build a dapp </Translate>,
        Svg: require('../../../static/img/Layer_4.png').default,
        description: (
            <>
                <Translate id='homepage.boxText3'>
                    Innovate with Us: Develop on Utility Network
                </Translate>
            </>
        ),
    },
    {
        title: <Translate id='homepage.boxTitle4'>White Paper</Translate>,
        Svg: require('../../../static/img/Layer_3.png').default,
        description: (
            <>
                <Translate id='homepage.boxText4'>
                    Explore Our Foundation: Understand Our Vision
                </Translate>
            </>
        ),
    },
];

function Feature({Svg, title, description, imageSizeClass, handleClickRoute}) {
  return (
      <div className={styles.innerDivStyle}>
          <Link to={handleClickRoute} style={{ textDecoration: 'none' }}>
              <div className={styles.imageSizeBox}>
                  <img className={imageSizeClass} src={Svg} />
              </div>
              <div>
                  <p className={styles.textLeft}>
                      {title}
                  </p>
                  <p className={styles.textBottom}>
                      {description}
                  </p>
              </div>
          </Link>
      </div>
  );
}

export default function HomepageFeatures() {
    const imageSizeClasses = [styles.featureSvg1, styles.featureSvg2, styles.featureSvg3, styles.featureSvg4 ];
    const handleClickRoute = [ '/docs/node/install', '/docs/computing-power-supplier/introduce', '/docs/dapp/start']

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.outerDivStyle}>
          {FeatureList.map((props, idx) => (
            // <Feature key={idx} {...props} />
              <Feature key={idx} {...props} imageSizeClass={imageSizeClasses[idx % imageSizeClasses.length]} handleClickRoute={handleClickRoute[idx % handleClickRoute.length]}  />
          ))}
        </div>
      </div>
    </section>
  );
}
