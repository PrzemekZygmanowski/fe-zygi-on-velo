import headerImage from "@/assets/images/1.jpg";
import { ArticleCardsContainer } from "@/components/ArticleCardsContainer";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import SubPageHeader from "@/components/layout/SubPageHeader";
import { sampleArticles } from "@/data/articles";

export default function Adventures() {
  return (
    <main>
      <SubPageHeader title='Wyprawy' image={headerImage.src} />
      <SectionWrapper>
        <ArticleCardsContainer
          articles={sampleArticles}
          direction='horizontal'
        />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
