import { handleResponse } from "@utils/api-helper";
import QueryString from "qs";

const SERVER_ENDPOINT =
  process.env.NEXT_PUBLIC_SERVER_ENDPOINT || process.env.NEXT_PUBLIC_API_URL;

export async function getConfiguration(): Promise<{
  status: string;
  data: any;
}> {
  const configurationQS = QueryString.stringify({
    populate: {
      logo: {
        fields: ["url", "alternativeText"],
      },
      menu: {
        fields: "*",
      },
      social_media: {
        fields: "*",
      },
    },
  });

  const url = new URL("/api/configuration", SERVER_ENDPOINT);
  url.search = configurationQS;
  const response = await fetch(url.href, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse<{
    status: string;
    data: any;
  }>(response);
}

export async function getLandingPage(): Promise<{
  status: string;
  data: any;
}> {
  const landingPageQS = QueryString.stringify({
    populate: {
      Banner: {
        fields: "*",
        populate: {
          banner_image_1: {
            fields: ["url", "alternativeText"],
          },
          banner_image_2: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      video_section: {
        fields: "*",
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      work_section: {
        fields: "*",
      },
      number_section: {
        fields: "*",
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          card: {
            fields: "*",
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
      testimonials: {
        fields: "*",
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      SEO: {
        fields: "*",
      },
    },
  });

  const url = new URL("/api/landing-page", SERVER_ENDPOINT);
  url.search = landingPageQS;
  const response = await fetch(url.href, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse<{
    status: string;
    data: any;
  }>(response);
}
