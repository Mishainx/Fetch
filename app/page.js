
export default async function Home() {

    console.log(process.env.NEXT_PUBLIC_VERCEL_URL)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{data}</div>
    </main>
  )
}
