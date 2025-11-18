// function generateStaticParams() { }


export default async function BlogPost({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const res = await fetch('https://api.vercel.app/blog/' + id)
    const post = await res.json()

    return (
        <div>
            <h1 className="text-3xl text-pink-300">{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <p>{post.date}</p>
        </div>
    )
}