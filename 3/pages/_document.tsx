import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="quotify. | generate your quotes"/>
      <body className="bg-green-100">
        <div className="bg-index bg-fill md:bg-cover bg-fixed bg-right md:bg-center bg-no-repeat">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
