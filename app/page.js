"use client"

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data ? JSON.stringify(data) : 'Cargando...'}</div>
    </main>
  );
}
