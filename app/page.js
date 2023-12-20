
export default async function Home() {

  try {
    const response = await fetch(`/api/products`);
    const json = await response.json()
    console.log(json)

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>hola</div>
    </main>
  )
}
