import { NextPage } from "next";
import Head from "next/head";
import SiteConfig from "../site.config";

interface SearchEngineOptimizationProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const SearchEngineOptimization: NextPage<SearchEngineOptimizationProps> = (searchEngineOptimizationProps) => {
  const title = searchEngineOptimizationProps.title ? searchEngineOptimizationProps.title + " · " + SiteConfig.title : SiteConfig.title;
  const description = searchEngineOptimizationProps.description ? searchEngineOptimizationProps.description : SiteConfig.description;
  const url = searchEngineOptimizationProps.url ? SiteConfig.url + searchEngineOptimizationProps.url : SiteConfig.url;
  const image = searchEngineOptimizationProps.image ? SiteConfig.url + searchEngineOptimizationProps.image : SiteConfig.url + SiteConfig.image;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={url} key="canonical" />

      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={image} key="og:image" />

      <meta property="og:site_name" content={SiteConfig.title} key="og:site_name" />
      <meta property="og:description" content={description} key="og:description" />
    </Head>
  );
};

export default SearchEngineOptimization;
