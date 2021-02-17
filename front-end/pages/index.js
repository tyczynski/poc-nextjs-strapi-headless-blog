import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link passHref href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  )
}
