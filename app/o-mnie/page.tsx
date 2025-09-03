import headerImage from "@/assets/images/1.jpg";
import { AboutComponent } from "@/components/AboutComponent";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import SubPageHeader from "@/components/layout/SubPageHeader";

export default function About() {
  return (
    <main>
      <SubPageHeader title='About' image={headerImage.src} />
      <SectionWrapper>
        <AboutComponent
          title='About Us'
          image={headerImage.src}
          text='We are a company dedicated to providing the best services to our customers.'
        />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
