"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { Clock, Calendar, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card } from "@/components/ui/card";

interface ArticleContentProps {
  post: BlogPost;
}

export const ArticleContent = ({ post }: ArticleContentProps) => {
  const publishedDate = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageSrc = post.frontmatter.image && !post.frontmatter.image.startsWith("http")
    ? post.frontmatter.image
    : "/img/hero/1w5a0754-e4.webp";

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold bg-[rgb(180,22,40)]/10 text-[rgb(180,22,40)] border border-[rgb(180,22,40)]/20">
            {post.frontmatter.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-6 leading-tight">
          {post.frontmatter.title}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          {post.frontmatter.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[rgb(23,46,123)]/70" />
            <time dateTime={post.frontmatter.date}>{publishedDate}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[rgb(23,46,123)]/70" />
            <span>{post.frontmatter.readingTime} min read</span>
          </div>
          {post.frontmatter.author && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-[rgb(23,46,123)]/70" />
              <span>{post.frontmatter.author}</span>
            </div>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.frontmatter.image && (
        imageSrc.includes('juliana') ? (
          <div className="relative w-full rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-xl flex items-center justify-center bg-gradient-to-br from-proyecta-blue/5 to-proyecta-red/5 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] p-8">
            <Image
              src={imageSrc}
              alt={post.frontmatter.title}
              width={400}
              height={600}
              className="w-full h-auto max-w-md object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        ) : (
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-xl">
            <Image
              src={imageSrc}
              alt={post.frontmatter.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        )
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => <h1 className="text-4xl font-black text-[rgb(23,46,123)] mt-8 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-3xl font-black text-[rgb(23,46,123)] mt-8 mb-4" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-[rgb(23,46,123)] mt-6 mb-3" {...props} />,
            p: ({ node, ...props }) => <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />,
            li: ({ node, ...props }) => <li className="text-base md:text-lg leading-relaxed" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-bold text-[rgb(23,46,123)]" {...props} />,
            a: ({ node, ...props }) => <a className="text-[rgb(180,22,40)] hover:underline font-semibold" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};
