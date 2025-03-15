import { 
  ProductsHeader, 
  ProductCategories, 
  CommunicationChannels, 
  ProductsCTA 
} from "@/components/products"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <ProductsHeader />
      <ProductCategories />
      <CommunicationChannels />
      <ProductsCTA />
    </div>
  )
} 