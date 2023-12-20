export default async function Home() {
  let data
  try{
  const response = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products `)
  data = await response.json()
  }
  catch(error){
    console.log(error.message)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{data}</div>
    </main>
  )
}
