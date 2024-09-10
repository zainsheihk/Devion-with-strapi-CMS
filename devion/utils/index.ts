const ROUTES = {
  professional: "/professional",
  dental_practice: "/dental-practice",
};
const SERVER_ENDPOINT =
  process.env.SERVER_ENDPOINT || process.env.NEXT_PUBLIC_API_URL;

export const imageSourceWithBaseURL = (url: string) => SERVER_ENDPOINT + url;
