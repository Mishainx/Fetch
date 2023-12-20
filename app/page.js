
export default async function Home() {

  try {
    const response = await fetch(`/api/products`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
  }

  const json = await response.json()
  console.log(json)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{json}</div>
    </main>
  )
}
