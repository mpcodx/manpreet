import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Search, Clock, Calendar, Tag, ArrowRight, X } from "lucide-react";
import { blogPostsData, BlogPost } from "@/data/portfolioData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ["All", "AI & LLMs", "Full Stack", "SaaS Architecture", "DevOps"];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 relative bg-background">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Insights & Writings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Latest Technical <span className="gradient-text">Articles</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            In-depth guides on AI engineering, multi-tenant SaaS architecture, cloud deployments, and web performance.
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-md"
                    : "bg-card hover:bg-muted text-muted-foreground border border-border/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full border-border/80 text-xs"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post: BlogPost, idx: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-5 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden mb-4 h-40 border border-border/60">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] px-2.5 py-0.5 rounded-full bg-slate-950/80 text-cyan-400 font-extrabold border border-white/10">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-semibold mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-500" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-base text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-border/40">
                  {post.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => setActivePost(post)}
                  variant="ghost"
                  className="w-full justify-between text-xs font-bold text-primary hover:bg-primary/10 rounded-xl"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Article Full View Modal */}
        {activePost && (
          <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border shadow-2xl p-6 sm:p-10 text-foreground"
              >
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {activePost.category}
                  </span>
                  <span className="text-xs text-muted-foreground">• {activePost.date}</span>
                  <span className="text-xs text-muted-foreground">• By {activePost.author}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{activePost.title}</h2>
                
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-64 sm:h-72 object-cover rounded-2xl mb-6 border border-border"
                />

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-6">
                  <p className="font-semibold text-foreground text-sm leading-relaxed">{activePost.summary}</p>
                </div>

                <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed text-foreground/90 whitespace-pre-line mb-8 font-normal space-y-4">
                  {activePost.content}
                </div>

                <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-border/40">
                  {activePost.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs px-3 py-1 rounded-lg bg-muted text-muted-foreground font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end border-t border-border pt-4">
                  <Button onClick={() => setActivePost(null)} className="rounded-full px-6 font-bold">
                    Close Article
                  </Button>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
};
