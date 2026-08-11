import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error("UnderStack render error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-center text-white">
          <div>
            <h1 className="text-3xl font-semibold">Something went wrong.</h1>
            <p className="mt-4 text-white/65">Please reload the page and try again.</p>
            <button type="button" onClick={() => window.location.reload()} className="mt-7 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-6 py-3 text-cyan-100">
              Reload page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
