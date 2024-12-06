"use client"

import { Info } from 'lucide-react'
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    street: "",
    zipCode: "",
    city: "",
    message: "",
    monthlyIncome: "Not specified"
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-xl p-6">
        <h2 className="text-xl text-white mb-6">Contact the advertiser</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">First name</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Last name</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">E-mail</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Telephone (optional)</label>
            <input
              type="tel"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              value={formData.telephone}
              onChange={(e) => setFormData({...formData, telephone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Street, No.</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              value={formData.street}
              onChange={(e) => setFormData({...formData, street: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">ZIP code</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
                value={formData.zipCode}
                onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">City</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="I am interested in this property. Kind regards"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-white">Financial profile</h3>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">What's your monthly household income?</label>
              <select
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
                value={formData.monthlyIncome}
                onChange={(e) => setFormData({...formData, monthlyIncome: e.target.value})}
              >
                <option>Not specified</option>
                <option>Less than $2,000</option>
                <option>$2,000 - $4,000</option>
                <option>$4,000 - $6,000</option>
                <option>More than $6,000</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Send request
          </button>

          <p className="text-sm text-gray-400">
            By continuing, I declare that I accept the{" "}
            <a href="#" className="text-blue-400 hover:underline">privacy policy</a>
            {" "}and that personal information relating to my interests may be shared with the advertiser.
          </p>
        </form>
      </div>
    </div>
  )
}

