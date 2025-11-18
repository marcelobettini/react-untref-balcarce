export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav>
                navegación de blogs
            </nav>
            {children}</section>
    )
}