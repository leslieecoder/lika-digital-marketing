import { redirect } from "next/navigation";

type LegacyPortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LegacyPortfolioProjectPage({ params }: LegacyPortfolioPageProps) {
  const { slug } = await params;
  redirect(`/en/portfolio/${slug}`);
}