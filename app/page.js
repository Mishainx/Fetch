"use client"



export default async function Home() {

  const fetch = await fetch(`https://${NEXT_PUBLIC_VERCEL_URL}/api/products`)
  const data = await fetch.json()
  console.log(await data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>hola</div>
    </main>
  )
}
