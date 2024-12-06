import { MapPin, ShoppingBasket, Tag } from 'lucide-react'

export function Benefits() {
  return (
    <div className="mt-16">
      <h3 className="mb-8 text-center text-2xl font-bold">Your Benefits</h3>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <MapPin className="mx-auto h-8 w-8 text-gray-400" />
          <h4 className="mt-4 font-semibold">My Store</h4>
          <p className="mt-2 text-sm text-gray-400">
            Set your favorite store and stay informed about availability and events
          </p>
        </div>
        <div className="text-center">
          <ShoppingBasket className="mx-auto h-8 w-8 text-gray-400" />
          <h4 className="mt-4 font-semibold">Faster Shopping</h4>
          <p className="mt-2 text-sm text-gray-400">
            Save your details once and enjoy faster checkout on future orders
          </p>
        </div>
        <div className="text-center">
          <Tag className="mx-auto h-8 w-8 text-gray-400" />
          <h4 className="mt-4 font-semibold">Exclusive Benefits</h4>
          <p className="mt-2 text-sm text-gray-400">
            Be the first to know about new trends and get access to exclusive discounts
          </p>
        </div>
      </div>
    </div>
  )
}
