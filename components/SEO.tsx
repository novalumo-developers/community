import Head from "next/head";

export default function SEO({ children, title = "" }) {
  const PageTitle =
    title == "" ? "Novalumo Developers" : `${title} | Novalumo Developers`;
  return (
    <Head>
      <title>{PageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}
