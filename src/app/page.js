import HeroSection from '@/components/home/HeroSection'
import StatsCounter from '@/components/home/StatsCounter'
import JobCategories from '@/components/home/JobCategories'
import FeaturedCompanies from '@/components/home/FeaturedCompanies'
import HowItWorks from '@/components/home/HowItWorks'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <JobCategories />
      <FeaturedCompanies />
      <HowItWorks />
    </main>
  )
}