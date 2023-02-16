import { IBiography } from "@/interface/biography";
import { IQuotes } from "@/interface/quotes";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { idText } from "typescript";

const quotableApiUrl = "https://api.quotable.io";
const wikipediaApiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

export default function Home() {
  const [quotes, setQuotesData] = useState<IQuotes>({
    _id: "",
    author: "",
    content: "",
    length: 0,
  });

  const [bio, setBioData] = useState<IBiography>({
    title: "",
    extract: "",
    thumbnail: {
      source: "",
      width: 0,
      height: 0,
    },
  });

  const [showButton, setShowButton] = useState(false);

  const generateQuotes = () => {
    axios
      .get(quotableApiUrl + "/random?minLength=50&maxLength=100")
      .then((res: AxiosResponse<IQuotes>) => {
        setQuotesData(res.data);
        getBio(res.data.author);
      });
  };

  const getBio = (author: string) =>
    axios
      .get(wikipediaApiUrl + encodeURIComponent(author) + "?redirect=false")
      .then((res) => setBioData(res.data));

  useEffect(() => {
    generateQuotes();
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
  }, []); // disabled while styling

  console.log(bio);

  const extract = bio.extract.split(".");
  const desc =
    extract[0].length > 80 ? extract.splice(0, 1) : extract.splice(0, 2) + ".";

  return (
    <>
      <div className="flex flex-col h-screen px-16 py-8 font-montserrat">
        <div className="flex-shrink">
          <span className="font-bold text-xl">quotify.</span>
        </div>
        <div className="flex flex-grow my-16 items-center">
          <span className="font-bold text-4xl xl:text-7xl md:text-6xl sm:text-4xl">
            &#34;{quotes.content}&#34;
          </span>
        </div>
        <div className="flex justify-between flex-col sm:flex-row my-8">
          <div className="flex flex-col w-3/4 sm:w-3/5">
            <span className="font-bold text-2xl">
              {bio.title.toUpperCase()}
            </span>
            <p className="whitespace-normal overflow-hidden text-justify">
              {desc}.
            </p>
          </div>

          <div className="relative">
            <Image
              className="h-56 w-48 p-2 object-center object-cover rounded-3xl"
              src={
                bio.thumbnail?.source ? bio.thumbnail?.source : "/no-image.jpg"
              }
              width={bio.thumbnail?.width ? bio.thumbnail?.width : 100}
              height={bio.thumbnail?.height ? bio.thumbnail?.height : 100}
              alt={bio.title}
            />
            <div className="absolute inset-0 border-2 rounded-3xl outline-green-200 hidden sm:block"></div>
          </div>
        </div>
        <button
          className={`text-center py-4 px-4 transition-transform ease-in duration-200 ${
            showButton ? "scale-100" : "scale-0"
          }`}
          onClick={generateQuotes}
        >
          <div className=" flex-none p-2 bg-green-200 items-center leading-none rounded-full inline-flex">
            <span className="font-bold mr-2 text-left flex-auto">
              Not satisfied? click me to regenerate
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
