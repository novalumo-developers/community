import SEO from "../components/SEO";
import DefaultLayout from "../layouts/default";

export default function GetStarted() {
  return (
    <>
      <SEO title="Get Started">
        <meta name="description" content="Generated by create next app" />
      </SEO>
      <DefaultLayout>
        <div>
          <h1>Get Started</h1>
          <p>
            どのようなレポジトリでもOK、学んでいることや制作しているものを共有する場としてお使いください！
          </p>
        </div>
      </DefaultLayout>
    </>
  );
}
