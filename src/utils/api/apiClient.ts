export async function fetchData<Response>(path: string): Promise<Response> {
  const apiUrl = process.env.NEXT_PUBLIC_LAVAPOOL_BE_URL;
  if (!apiUrl) {
    throw new Error('API URL is not defined in environment variables');
  }

  const res = await fetch(`${apiUrl}${path}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
