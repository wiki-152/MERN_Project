import { Home, Handshake, Tag, MessageCircle, Search, Shield, Calendar, Award, Lock, LineChart, Users, Wrench } from 'lucide-react'

export function Benefits() {
  return (
    <div className="mt-16 bg-gray-800 py-16">
      <h3 className="mb-8 text-center text-2xl font-bold text-white">Your Benefits</h3>
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="text-center">
          <Home className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Property Listings</h4>
          <p className="mt-2 text-sm text-gray-300">
            Easily list your property for sale or rent, or browse available properties in your area
          </p>
        </div>
        <div className="text-center">
          <Handshake className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Direct Transactions</h4>
          <p className="mt-2 text-sm text-gray-300">
            Connect directly with buyers, sellers, or renters for seamless C2C property dealings
          </p>
        </div>
        <div className="text-center">
          <Tag className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Exclusive Benefits</h4>
          <p className="mt-2 text-sm text-gray-300">
            Be the first to know about new trends and get access to exclusive property deals
          </p>
        </div>
        <div className="text-center">
          <MessageCircle className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Messaging</h4>
          <p className="mt-2 text-sm text-gray-300">
            Directly message other users for seamless communication about properties
          </p>
        </div>
        <div className="text-center">
          <Search className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Advanced Search</h4>
          <p className="mt-2 text-sm text-gray-300">
            Find your ideal property with our powerful search filters and personalized recommendations
          </p>
        </div>
        <div className="text-center">
          <Shield className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Secure Transactions</h4>
          <p className="mt-2 text-sm text-gray-300">
            Enjoy peace of mind with our secure payment system and identity verification process
          </p>
        </div>
        <div className="text-center">
          <Lock className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Escrow Service</h4>
          <p className="mt-2 text-sm text-gray-300">
            Protect your transactions with our built-in escrow service for added security and trust
          </p>
        </div>
        <div className="text-center">
          <Calendar className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Scheduling</h4>
          <p className="mt-2 text-sm text-gray-300">
            Easily schedule property viewings and manage appointments with potential buyers or renters
          </p>
        </div>
        <div className="text-center">
          <Award className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Verified Listings</h4>
          <p className="mt-2 text-sm text-gray-300">
            Browse through verified property listings to ensure authenticity and reliability
          </p>
        </div>
        <div className="text-center">
          <LineChart className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Market Analytics</h4>
          <p className="mt-2 text-sm text-gray-300">
            Access real-time market trends, price history, and neighborhood analytics to make informed property decisions
          </p>
        </div>
        <div className="text-center">
          <Users className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Community Reviews</h4>
          <p className="mt-2 text-sm text-gray-300">
            Read and share authentic reviews about properties, neighborhoods, and sellers from our trusted community
          </p>
        </div>
        <div className="text-center">
          <Wrench className="mx-auto h-8 w-8 text-gray-300" />
          <h4 className="mt-4 font-semibold text-white">Property Management Suite</h4>
          <p className="mt-2 text-sm text-gray-300">
            Manage your properties, track maintenance requests, and handle tenant communications all in one place
          </p>
        </div>
      </div>
    </div>
  )
}

