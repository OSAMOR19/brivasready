export const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    price: 39,
    features: [
      "Up to 500 voice minutes/month",
      "Basic IVR functionality",
      "Email support",
      "API access",
      "1 phone number included"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with increasing needs.",
    price: 129,
    features: [
      "Up to 2,000 voice minutes/month",
      "Advanced IVR functionality",
      "Priority email support",
      "API access",
      "5 phone numbers included",
      "Call recording"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with high-volume requirements.",
    price: 399,
    features: [
      "Unlimited voice minutes",
      "Custom IVR development",
      "24/7 phone & email support",
      "API access",
      "Unlimited phone numbers",
      "Call recording & analytics",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    featured: false
  }
]; 