
import { useParams, Link } from 'react-router-dom'
import { companies } from '../utils/companies'
import Button from '../components/ui/Button'

const CompanyPage = () => {
  const { slug } = useParams()
  const company = companies.find(c => c.slug === slug)
  if (!company) return <p className="p-8">Company not found.</p>
  return (
    <div className="container mx-auto py-12 space-y-6">
      <img src={company.logo} alt={company.name} className="h-20" />
      <h1 className="text-3xl font-bold">{company.name}</h1>
      <p>{company.description}</p>
      <Button href={company.url}>Visit official website</Button>
      <Link to="/contact" className="text-primary underline">Contact us about {company.name}</Link>
    </div>
  )
}

export default CompanyPage
