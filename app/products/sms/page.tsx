import SmsHero from "@/app/components/sms/SmsHero"
import SmsFeatures from "@/app/components/sms/SmsFeatures"
import SmsUseCases from "@/app/components/sms/SmsUseCases"
import SmsPricing from "@/app/components/sms/SmsPricing"
import SmsCta from "@/app/components/sms/SmsCta"

export default function SmsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <SmsHero />
      <SmsFeatures />
      <SmsUseCases />
      <SmsPricing />
      <SmsCta />
    </div>
  )
} 