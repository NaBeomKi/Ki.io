import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export const Seo = ({
  description,
  keywords,
  title,
  image,
  siteUrl,
  author,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title
          ? `${title} | ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title;
        const metaKeywords = keywords || ["gatsby blog", "gatsby MDX blog"];
        const metaImage = image || data.site.siteMetadata.image;
        const metaUrl = siteUrl || data.site.siteMetadata.siteUrl;
        const metaAuthor = author || data.site.siteMetadata.author;
        return (
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary-large-image`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keyword`,
                    content: metaKeywords.join(", "),
                  }
                : []
            )}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        siteUrl
      }
    }
  }
`;
