import type { PropsWithChildren } from "react"

interface VisualProps {
    title: string
}
export const VisualComponent = ({ title = "", children }: PropsWithChildren<VisualProps>

) => {
    return (
        <div className={`component bg-blue-900/10 rounded text-white p-4 border-2 border-gray-400 relative mt-4 `}>
            <div className="flex  flex-row">
                <h2 className="mt-2 font-bold text-lg mb-1">{title}</h2></div >
            {children}
        </div >
    )
}

export const Button = (props: any) => {
    return (
        <button
            className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm"
            {...props}
        />
    )
}

type LabeledProps = {
    label: string
}
export const LabeledBox = ({ label, children }: PropsWithChildren<LabeledProps>) => {
    return (
        <div>
            <div>{label}</div>
            {children}
        </div>
    )
}

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="p-6 bg-gray-800 min-h-screen w-screen text-white">
            <div className="max-w-2xl mx-auto">
                <header className="text-center mb-1">
                    <h1 className="text-center font-bold mb-4 text-2xl md:mt-6">
                        Error Boundary
                    </h1>

                </header>
                {children}
            </div>
        </div>
    )
}