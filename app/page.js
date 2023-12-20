
export default async function Home() {

  const response = await fetch( `https://${process.env.VERCEL_URL}/api/products`)
  const data = response.json()
  console.log(process.env.VERCEL_URL)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{data}</div>
    </main>
  )
}
