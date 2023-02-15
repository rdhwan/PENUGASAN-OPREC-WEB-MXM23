import { IBiography } from "@/interface/biography";
import { IQuotes } from "@/interface/quotes";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

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

  const generateQuotes = () => {
    axios
      .get(quotableApiUrl + "/random")
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
  }, []);

  return (
    <>
      <h1>{quotes.content}</h1>
      <h1>{quotes.author}</h1>
      <button onClick={generateQuotes}>Regenerate</button>

      <Image
        src={bio.thumbnail.source}
        width={bio.thumbnail?.width}
        height={bio.thumbnail?.height}
        alt={bio.title}
      />

      <p>{bio.extract}</p>
    </>
  );
}
