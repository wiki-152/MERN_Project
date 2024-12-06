import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Benefits } from '../../components/Benefits/Benefits'
import useUserStore from '../../stores/userStore'
import useListingOwnerStore from '../../stores/listingOwnerStore'
import './Signup.css'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  // Zustand stores
  const {
    signup: signupCustomer,
    loading: loadingCustomer,
    error: errorCustomer,
    clearError: clearCustomerError,
  } = useUserStore()

  const {
    signup: signupSeller,
    loading: loadingSeller,
    error: errorSeller,
    clearError: clearSellerError,
  } = useListingOwnerStore()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCustomerSignup = (e) => {
    e.preventDefault()
    clearSellerError()
    signupCustomer(formData)
  }

  const handleSellerSignup = (e) => {
    e.preventDefault()
    clearCustomerError()
    signupSeller(formData)
  }

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 md:divide-x md:divide-gray-700">
          {/* Signup Section */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Create your account</h2>
              {/* Display errors */}
              {errorCustomer && (
                <div className="mb-4 text-red-500">{errorCustomer}</div>
              )}
              {errorSeller && (
                <div className="mb-4 text-red-500">{errorSeller}</div>
              )}
              <form className="space-y-4" onSubmit={handleCustomerSignup}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loadingCustomer}
                    className="flex-1 rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                  >
                    {loadingCustomer ? 'Signing up...' : 'Sign up as Customer'}
                  </button>
                  <button
                    type="button"
                    onClick={handleSellerSignup}
                    disabled={loadingSeller}
                    className="flex-1 rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                  >
                    {loadingSeller ? 'Signing up...' : 'Sign up as Seller'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="flex flex-col justify-between space-y-6 md:pl-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Already have an account?</h2>
              <p className="text-gray-400">
                Log in to your account to enjoy exclusive benefits.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Log in now
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <Benefits />
      </div>
    </div>
  )
}
