import Head from 'next/head';

export default function Home() {
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>

      <main>
        Report for
        Jeremy Robson

        Daily
        Weekly
        Monthly

        Work
        5hrs <!-- daily -->
        Previous - 7hrs <!-- daily -->
        32hrs <!-- weekly -->
        Previous - 36hrs <!-- weekly -->
        103hrs <!-- monthly -->
        Previous - 128hrs <!-- monthly -->

        Play
        1hr <!-- daily -->
        Previous - 2hrs <!-- daily -->
        10hrs <!-- weekly -->
        Previous - 8hrs <!-- weekly -->
        23hrs <!-- monthly -->
        Previous - 29hrs <!-- monthly -->

        Study
        0hrs <!-- daily -->
        Previous - 1hr <!-- daily -->
        4hrs <!-- weekly -->
        Previous - 7hrs <!-- weekly -->
        13hrs <!-- monthly -->
        Previous - 19hrs <!-- monthly -->

        Exercise
        1hr <!-- daily -->
        Previous - 1hr <!-- daily -->
        4hrs <!-- weekly -->
        Previous - 5hrs <!-- weekly -->
        11hrs <!-- monthly -->
        Previous - 18hrs <!-- monthly -->

        Social
        1hr <!-- daily -->
        Previous - 3hrs <!-- daily -->
        5hrs <!-- weekly -->
        Previous - 10hrs <!-- weekly -->
        21hrs <!-- monthly -->
        Previous - 23hrs <!-- monthly -->

        Self Care
        0hrs <!-- daily -->
        Previous - 1hr <!-- daily -->
        2hrs <!-- weekly -->
        Previous - 2hrs <!-- weekly -->
        7hrs <!-- monthly -->
        Previous - 11hrs <!-- monthly -->
      </main>
    </>
  )
}
