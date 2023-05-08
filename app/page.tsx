import {
    AboutUs,
    Faqs,
    Footer,
    Header,
    Hero,
    HowItWorks,
    Pricing,
} from "@/components"
import Image from "next/image"

export default function Home() {
    return (
        <main className="bg-primaryWhite font-mainFont">
            <Header />
            <Hero />
            <AboutUs />
            <HowItWorks />
            <Pricing />
            <Faqs />
            <Footer />
        </main>
    )
}
