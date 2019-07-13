import React from "react";
import NextHead from "next/head";

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
};

const defaultDescription = "";
const defaultOgUrl = "";
const defaultOgImage = "";

const Meta: React.FC<Props> = ({ title, description, ogImage, url }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <meta property="og:url" content={url || defaultOgUrl} />
    <meta property="og:title" content={title || ""} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || defaultOgUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOgImage} />
    <meta property="og:image" content={ogImage || defaultOgImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Meta;
