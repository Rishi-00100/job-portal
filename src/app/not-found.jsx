import Link from 'next/link'

export const metadata = {
  title: 'Not-Found',
  description: "Page not found — the job you're looking for isn't here.",
}

export default function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="mx-auto max-w-xl text-center p-8">
				<h1 className="text-7xl font-extrabold text-slate-800 mb-4">404</h1>
				<p className="text-xl text-slate-600 mb-6">Page not found — the job you're looking for isn't here.</p>
				<div className="flex justify-center gap-3">
					<Link href="/" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Go home</Link>
					<Link href="/jobs" className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Browse jobs</Link>
				</div>
			</div>
		</main>
	)
}
