import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle:wght@300&family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
       <meta 
       name="description"
       content="MERN Stack Developer looking for a job"
       />
       <meta 
       name="keywords"
       content="Full Stack Web Developer, Freelancer, MERN Developer"
       />
      </Head>
      <body className="bg-gradient-to-r from-green to-blue-500 dark:from-black-300 dark:to-black-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
