import Head from 'next/head';
import styles from './style.module.scss';
import PersonCard from "../components/PersonCard";
import TimeCard from "../components/TimeCard";
import data from '../data/data.json';
import {useCallback, useState} from "react";

export default function Home() {
  const [menu, setMenu] = useState('weekly');

  const onMenuChange = useCallback((name) => {
    setMenu(name);
  }, []);

  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0"
          />

          <title>{process.env.NEXT_PUBLIC_TITLE}</title>
          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta property="og:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta property="og:type"
                content="website"
          />
          <meta property="og:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta property="og:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta property="og:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />

          <meta name="twitter:card"
                content="summary_large_image"
          />
          <meta property="twitter:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta name="twitter:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta name="twitter:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta name="twitter:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        </Head>

        <main>
          <div className={styles.container}>
            <div className={styles.cardContainer}>
              <PersonCard currentMenu={menu}
                          onMenuChange={onMenuChange}
              />

              {data.map(({title, timeframes}) => (
                  <TimeCard variants={title}
                            category={title}
                            time={timeframes[menu]}
                  />
              ))}
            </div>
          </div>
        </main>
      </>
  );
};
