export default async function handler(req: any, res: any) {
  const API_KEY = "755da2a900ee86acbd804c11f26b9d0b6f04d1e94d760579f51a1380a74c6767";

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_play_movies&q=Marvel&gl=us&hl=en&api_key=${API_KEY}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
}