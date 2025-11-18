import Link from "next/link"
const Blog = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    const res = await fetch('https://api.vercel.app/blog')
    const posts = await res.json()

    const title = (await searchParams).title
    console.log(title)
    return (
        <div>
            <h1 className="text-3xl text-pink-300">Blog Page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}><Link href={`/blog/${post.id.toString()}`}>{post.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default Blog