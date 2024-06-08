

export type NewsDataType = {
  _id: string;
  news_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  description: string;
  content: string[];
  pubDate: string;
  image_url: string | null;
  source_id: string;
  source_url: string;
  language: string;
  country: string[];
  category: string[];
  __v: number;
};