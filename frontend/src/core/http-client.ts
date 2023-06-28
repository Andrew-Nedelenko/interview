export const httpClient = async (url: string) => {
  const req = await fetch(url);
  return req.json();
};
