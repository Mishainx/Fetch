
export default async function Home() {

  const response = await fetch( `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`)
  const data = response.json()
  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{data}</div>
    </main>
  )
}
