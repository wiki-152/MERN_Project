import { ChevronRight } from 'lucide-react'

export default function DisplaySettings() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-xl font-semibold">Display</h2>
        <button className="flex w-full items-center justify-between rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600">
          <span>Dark mode</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </section>
    </div>
  )
}

