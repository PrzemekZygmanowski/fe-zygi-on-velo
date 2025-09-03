import headerImage from "@/assets/images/1.jpg";
import { ArticleCardsContainer } from "@/components/ArticleCardsContainer";
import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Menu } from "@/components/layout/Menu";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextContent } from "@/components/TextContent";
import { sampleArticles } from "@/data/articles";

export default function Home() {
  return (
    <main>
      <Menu />
      <Header title='Welcome to Zygi on Velo' image={headerImage.src} />
      <SectionWrapper>
        <TextContent
          title='Welcome to Our Backpacking Journey'
          text='Embark on an extraordinary adventure through hidden trails and breathtaking landscapes with us. From snow-capped mountains to secluded beaches, we share authentic experiences from our nomadic lifestyle. Our backpacks carry minimal possessions but our hearts are full of countless memories made along the way. Connect with fellow travelers and discover budget-friendly tips that make long-term travel sustainable. Join our community as we navigate the world one step at a time, finding beauty in the unexpected and wisdom in every encounter.'
        />
      </SectionWrapper>
      <SectionWrapper title='Latest Articles'>
        <ArticleCardsContainer
          articles={sampleArticles}
          direction='horizontal'
        />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
