import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-line py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="font-display font-semibold text-sm text-ink">{profile.name}</span>
          <span className="text-ink-soft/60">—</span>
          <span className="text-sm text-ink-soft">Full stack software engineer, building across the stack.</span>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a href={profile.github} target="_blank" rel="noopener" className="text-ink-soft hover:text-red transition-colors duration-300">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener" className="text-ink-soft hover:text-red transition-colors duration-300">
            LinkedIn
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener" className="text-ink-soft hover:text-red transition-colors duration-300">
            LeetCode
          </a>
          <a href={`mailto:${profile.email}`} className="text-ink-soft hover:text-red transition-colors duration-300">
            Email
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-ink-soft/60 mt-8">
        © {year} {profile.name}. Built for speed.
      </p>
    </footer>
  );
}
