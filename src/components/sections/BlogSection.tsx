import React, { useState } from 'react';
import { BookOpen, Clock, Tag, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { GlowButton } from '../common/GlowButton';
import { BlogPostItem } from '../../types';
import { blogPostsData } from '../../data/blogPosts';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);

  return (
    <section id="blog" className="relative py-24 sm:py-32 bg-[#080A0E] border-b border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <TechnicalLabel variant="violet">08 / TACTICAL INTELLIGENCE</TechnicalLabel>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mt-4 uppercase leading-[0.95]">
            ENGINEERING NOTES <br />
            <span className="text-[#C084FC] text-glow-violet">& PLAYBOOKS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            In-depth analysis of eCommerce conversion rates, local payment gateways, Android performance optimizations, and technical SEO in South Africa.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="bg-[#0B0D12] border border-gray-800 hover:border-[#A855F7]/60 rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                {/* Meta Bar */}
                <div className="flex items-center justify-between font-mono text-[11px] text-gray-400 pb-3 border-b border-gray-850">
                  <div className="flex items-center gap-2">
                    <span className="text-[#A855F7] font-bold">{post.category.toUpperCase()}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#C084FC] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-300 font-sans leading-relaxed">
                  {post.excerpt}
                </p>

                {/* System Code & Tag preview */}
                <div className="p-3 bg-[#050507] border border-gray-850 rounded-xs flex items-center justify-between font-mono text-xs">
                  <span className="text-gray-500 text-[10px]">INTEL CODE:</span>
                  <span className="text-[#00E5FF]">{post.systemCode}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-gray-850 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-gray-900 text-gray-400 text-[10px] font-mono rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-mono font-bold text-[#C084FC] hover:text-white flex items-center gap-1.5 cursor-pointer group-hover:underline"
                >
                  <span>READ PLAYBOOK</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal: Full Tactical Playbook Reader */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-[#0B0D12] border border-[#A855F7] rounded-sm max-w-3xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white border border-gray-800 bg-[#050507] rounded-xs cursor-pointer"
                aria-label="Close Playbook"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Playbook Header */}
              <div className="space-y-2 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A855F7]">
                  <BookOpen className="w-4 h-4" />
                  <span>TACTICAL PLAYBOOK // {selectedPost.category.toUpperCase()}</span>
                  <span>· {selectedPost.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  {selectedPost.title}
                </h3>
                <div className="text-xs font-mono text-gray-400">
                  Authored by {selectedPost.author} · Published {selectedPost.date} · Code: {selectedPost.systemCode}
                </div>
              </div>

              {/* Post Content */}
              <div className="text-sm text-gray-200 font-sans leading-relaxed space-y-4 whitespace-pre-line bg-[#050507] p-6 rounded border border-gray-850">
                {selectedPost.content}
              </div>

              {/* Close Bottom Button */}
              <div className="pt-6 border-t border-gray-800 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-mono text-xs font-bold rounded-xs cursor-pointer"
                >
                  CLOSE PLAYBOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
