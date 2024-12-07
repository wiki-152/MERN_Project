import { ChevronRight } from 'lucide-react'

export default function GeneralSettings() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-xl font-semibold">General preferences</h2>
        <div className="space-y-4">
          {[
            'Language',
            'Content language',
            'Autoplay videos',
            'Sound effects',
            'Showing profile photos',
            'Preferred Feed View',
          ].map((item) => (
            <button
              key={item}
              className="flex w-full items-center justify-between rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600"
            >
              <span>{item}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

