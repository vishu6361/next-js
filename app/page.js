import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to NextJS Course!</h1>
      <p><Link href="/about">About Us!</Link></p>
    </main>
  )
}
