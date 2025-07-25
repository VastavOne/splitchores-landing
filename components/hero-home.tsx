import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 flex justify-center"
              data-aos="zoom-y-out"
            >
              <div className="splitchores-card splitchores-card-hover bg-white px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="group-avatar group-avatar-blue">
                      <span>M</span>
                    </div>
                    <div className="group-avatar group-avatar-green">
                      <span>D</span>
                    </div>
                    <div className="group-avatar group-avatar-purple">
                      <span>S</span>
                    </div>
                    <div className="group-avatar group-avatar-orange">
                      <span>J</span>
                    </div>
                  </div>
                  <div>
                    <span className="splitchores-subheading" style={{color: '#374151'}}>Thousands of families</span>
                    <span className="splitchores-caption ml-2" style={{color: '#6B7280'}}>getting organized</span>
                  </div>
                </div>
              </div>
            </div>
            <h1
              className="mb-6 splitchores-heading text-5xl md:text-6xl"
              style={{color: '#111827', background: 'linear-gradient(135deg, #5271FF 0%, #4461E6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Split Chores, <br className="max-lg:hidden" />
              Share Success
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                The only collaborative task app that actually works for real households. Smart conflict resolution, haptic feedback, and stress relief built-in.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="splitchores-btn-primary text-white px-8 py-4 inline-flex items-center group mb-4 sm:mb-0 sm:mr-4"
                    href="https://apps.apple.com/app/splitchores"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="splitchores-subheading">
                      Download for iOS{" "}
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </a>
                  <a
                    className="splitchores-btn-secondary px-8 py-4 inline-flex items-center"
                    href="https://play.google.com/store/apps/details?id=com.splitchores"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#374151'}}
                  >
                    <span className="splitchores-subheading">Download for Android</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* App Preview Cards */}
          <div
            className="mx-auto max-w-5xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="grid gap-6 md:grid-cols-3">
              {/* Task Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl shadow-blue-500/10 border border-blue-100/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">MJ</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Mom</p>
                        <p className="text-xs text-gray-500">Family Group</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <span className="text-xs font-medium text-green-600">Active</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-5 w-5 rounded border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 line-through">Take out trash</span>
                      <span className="ml-auto text-xs font-medium text-green-600">✓ Done</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="h-5 w-5 rounded border-2 border-yellow-400"></div>
                      <span className="text-sm text-gray-700">Clean kitchen</span>
                      <span className="ml-auto text-xs text-yellow-600 font-medium">Due today</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stress Relief Card */}
              <div className="group relative overflow-hidden splitchores-card splitchores-card-hover stress-relief-gradient p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="splitchores-subheading text-white mb-2">Stress Relief Built-In</h3>
                  <p className="text-white/90 splitchores-caption mb-3">Wellness Tools</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <p className="text-white splitchores-caption">Desk stretches & tap games</p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl shadow-green-500/10 border border-green-100/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">This Week</h3>
                    <div className="flex items-center space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs text-green-600">Live</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Tasks Completed</span>
                      <span className="text-2xl font-bold text-green-600">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Tasks Assigned</span>
                      <span className="text-2xl font-bold text-blue-600">15</span>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Weekly Goal</span>
                        <span className="text-xs text-gray-500">80%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
