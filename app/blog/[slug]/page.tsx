import { notFound } from "next/navigation";
import { getPost, getAllPostSlugs } from "@/lib/blog/blog-utils";
import { ArticleContent } from "@/components/blog/article-content";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppFloat />

      <div className="pt-16 sm:pt-20 pb-10 md:pb-14 lg:pb-18">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <ArticleContent post={post} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
