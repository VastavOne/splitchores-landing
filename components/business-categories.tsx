export default function BusinessCategories() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Real Household Dynamics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for roommates, families, and shared living situations. Handles the chaos of real life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">1</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Template</h3>
                  <p className="text-gray-600 mb-6">
                    Family Tasks, Roommate Chores, Team Projects, or Personal Goals. Each template is designed for different living situations.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs font-bold">M</span>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs font-bold">D</span>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs font-bold">K</span>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">Roommate Chores</p>
                        <p className="text-xs text-gray-500">4 housemates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full text-sm font-bold mb-4">2</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Assign Tasks</h3>
                  <p className="text-gray-600 mb-6">
                    Create tasks, set due dates, and assign them to family members. Add priorities and recurring schedules.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                      <div className="w-4 h-4 border-2 border-green-500 rounded"></div>
                      <span className="text-sm text-gray-700 flex-1 text-left">Take out trash</span>
                      <span className="text-xs text-green-600 font-medium">Mom</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                      <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
                      <span className="text-sm text-gray-700 flex-1 text-left">Clean kitchen</span>
                      <span className="text-xs text-blue-600 font-medium">Dad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full text-sm font-bold mb-4">3</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Handle Real Life</h3>
                  <p className="text-gray-600 mb-6">
                    Forgiving when people forget, persistent for recurring chores, collaborative across different schedules, and stress-reducing.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">This Week</span>
                        <span className="text-sm font-bold text-green-600">8/10 completed</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500">Great progress! Keep it up!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-6 py-3 border border-blue-100">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Join families worldwide getting organized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}