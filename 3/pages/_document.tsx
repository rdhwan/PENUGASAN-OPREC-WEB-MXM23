import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-green-100">
        <div className="bg-index bg-cover bg-fixed bg-no-repeat bg-opacity-50">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
