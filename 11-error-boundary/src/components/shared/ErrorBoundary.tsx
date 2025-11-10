import { Component, type ErrorInfo, type ReactNode } from "react"

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean,
    errorMessage: string
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, errorMessage: "" }
    }

    // Método que actualiza el estado para mostrar el error en la UI
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, errorMessage: error.message }
    }

    // Método que sirve para loguear errores
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Component Did Catch:", error.message)
        console.error("error info:", errorInfo.componentStack)
    }

    render() {
        if (this.state.hasError) {
            //UI de error
            return (
                <div className="px-4 py-2 m-5">
                    <h1 className="my-2 font-bold text-lg mb-1">Unknown Failure</h1>
                    <p> {this.state.errorMessage} </p>
                    <button
                        className="mt-4 px-4 py-2 rounded bg-red-400 hover:bg-red-800 cursor-pointer active:outline text-sm"
                        onClick={() => (window.location.href = "/")}
                    >
                        Reload Page
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundary