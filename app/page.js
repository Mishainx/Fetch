
export default async function Home() {

    const response = await fetch(`https://fetch-ten-rho.vercel.app//api/products`);
    const data = await response.json()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{data}</div>
    </main>
  )
}
