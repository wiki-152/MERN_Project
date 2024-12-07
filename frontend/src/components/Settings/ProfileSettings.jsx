import { ChevronRight } from 'lucide-react'

export default function ProfileSettings() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-xl font-semibold">Profile information</h2>
        <div className="space-y-4">
          {['Name, location, and industry', 'Personal demographic information', 'Verifications'].map(
            (item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600"
              >
                <span>{item}</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            )
          )}
        </div>
      </section>
    </div>
  )
}

