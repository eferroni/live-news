import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQl query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "br"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          title
          category
          country
          description
          image
          language
          published_at
          source
          url
        }
        pagination {
          count
          offset
          total
          limit
        }
      }
    }
  `;

  // Fetch function with Next.js 13 caching
  const res = await fetch(
    "https://cincosaltos.stepzen.net/api/live-news/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 180 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  //Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  //return result
  return news;
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=e44ee71e4531cd0c127680c7562a55c6&countries=br&limit=100&offset=0&sort=published_desc"
