'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Benefits } from '../../components/Benefits/Benefits'
import useUserStore from '../../stores/userStore'
import useListingOwnerStore from '../../stores/listingOwnerStore'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  // Zustand stores
  const {
    login: loginCustomer,
    loading: loadingCustomer,
    error: errorCustomer,
    clearError: clearCustomerError,
  } = useUserStore()

  const {
    login: loginSeller,
    loading: loadingSeller,
    error: errorSeller,
    clearError: clearSellerError,
  } = useListingOwnerStore()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleCustomerLogin = async (e) => {
    e.preventDefault()
    clearSellerError()
    const success = await loginCustomer(credentials)
    if (success) {
      navigate('/')
    }
  }

  const handleSellerLogin = async (e) => {
    e.preventDefault()
    clearCustomerError()
    const success = await loginSeller(credentials)
    if (success) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 md:divide-x md:divide-gray-700">
          {/* Login Section */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Login to your account</h2>
              {/* Display errors */}
              {errorCustomer && (
                <div className="mb-4 text-red-500">{errorCustomer}</div>
              )}
              {errorSeller && (
                <div className="mb-4 text-red-500">{errorSeller}</div>
              )}
              <form className="space-y-4" onSubmit={handleCustomerLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
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
                      value={credentials.password}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <div className="mt-1 text-right">
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-gray-600"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loadingCustomer}
                    className="flex-1 rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                  >
                    {loadingCustomer ? 'Signing in...' : 'Sign in as Customer'}
                  </button>
                  <button
                    type="button"
                    onClick={handleSellerLogin}
                    disabled={loadingSeller}
                    className="flex-1 rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                  >
                    {loadingSeller ? 'Signing in...' : 'Sign in as Seller'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Register Section */}
          <div className="flex flex-col justify-between space-y-6 md:pl-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">I don't have an account</h2>
              <p className="text-gray-400">
                Create an account now and enjoy exclusive benefits with your first order.
              </p>
            </div>
            <Link
              to="/signup"
              className="w-full rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-center block"
            >
              Register now
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <Benefits />
      </div>
    </div>
  )
}

