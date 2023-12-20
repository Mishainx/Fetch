export default async function Home() {
  const hola
  try{
   hola = "hola"
  }
  catch(error){
    throw error
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{hola}</div>
    </main>
  )
}
