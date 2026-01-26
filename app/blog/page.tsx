import { getAllPosts } from "@/lib/blog/blog-utils";
import { BlogList } from "@/components/blog/blog-list";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BookOpen, FileText } from "lucide-react";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppFloat />

      <div className="pt-16 sm:pt-20 pb-10 md:pb-14 lg:pb-18">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
            {/* Header Section */}
            <header className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-[rgb(23,46,123)]/10 text-[rgb(23,46,123)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <BookOpen className="h-4 w-4" />
                <span>Expert Resources & Guides</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[rgb(23,46,123)] tracking-tight leading-tight">
                Blog & Resources
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Expert guides and resources to help you on your investment journey in Florida. Learn about rent-to-own, real estate investing, and everything you need to know about property investment.
              </p>
            </header>

            {/* Blog Posts Grid */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-5 w-5 text-[rgb(23,46,123)]" />
                <h2 className="text-2xl md:text-3xl font-bold text-[rgb(23,46,123)]">
                  Latest Articles
                </h2>
                <div className="flex-1 h-px bg-linear-to-r from-gray-200 via-gray-200/50 to-transparent" />
                <span className="text-sm text-gray-600 font-medium">
                  {posts.length} {posts.length === 1 ? "article" : "articles"}
                </span>
              </div>

              <BlogList posts={posts} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
</div>
  );
}
