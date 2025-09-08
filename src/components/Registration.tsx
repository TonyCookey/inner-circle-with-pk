import React, { useState } from "react";
import { X, CreditCard, DollarSign } from "lucide-react";

interface RegistrationProps {
  tier: string;
  onClose: () => void;
}

export function Registration({ tier, onClose }: RegistrationProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    goals: "",
    paymentMethod: "stripe",
  });

  const tierDetails = {
    quarterly: { name: "Quarterly", price: 300, period: "every 3 months" },
    biannual: { name: "Bi-Annual", price: 550, period: "every 6 months" },
    yearly: { name: "Annual", price: 1000, period: "per year" },
  };

  const currentTier = tierDetails[tier as keyof typeof tierDetails];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Payment processing will be handled here
    alert("Registration form submitted! Payment integration coming next.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Join Inner Circle</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <CreditCard className="h-6 w-6 text-yellow-500" />
            <h3 className="text-xl font-semibold">{currentTier.name} Membership</h3>
          </div>
          <p className="text-2xl font-bold text-yellow-500">
            ${currentTier.price} <span className="text-sm text-gray-400">{currentTier.period}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Occupation *</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">What are your primary goals? *</label>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
              placeholder="Tell us about your business goals, personal development objectives, and what you hope to achieve..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
            >
              <option value="stripe">Stripe (Credit/Debit Card)</option>
              <option value="paypal">PayPal</option>
              <option value="paystack">Paystack</option>
              <option value="mainstack">Mainstack</option>
            </select>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <DollarSign className="h-5 w-5 text-yellow-500" />
              <h4 className="font-semibold">Payment Summary</h4>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span>{currentTier.name} Membership</span>
              <span className="font-bold">${currentTier.price}</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Billed {currentTier.period}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Complete Registration - ${currentTier.price}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          By registering, you agree to our Terms of Service and Privacy Policy. All payments are secure and processed through our verified payment partners.
        </p>
      </div>
    </div>
  );
}
