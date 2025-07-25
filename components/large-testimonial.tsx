export default function LargeTestimonial() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">SM</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sarah Martinez</h3>
                  <p className="text-gray-600">Mom of 3, San Francisco</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">5.0</span>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-xl text-gray-700 leading-relaxed">
                "Finally, an app that gets how households actually work. No more{" "}
                <span className="font-semibold text-blue-600">duplicate work or forgotten chores</span>{" "}
                - it handles all the real-life chaos perfectly."
              </blockquote>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-green-600">Zero</div>
                  <div className="text-sm text-gray-600">Duplicate Work</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">Auto</div>
                  <div className="text-sm text-gray-600">Recurring Tasks</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Offline Ready</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Martinez Family</h4>
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm text-green-600">Active Now</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">E</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Emma (12)</span>
                        <span className="text-sm text-green-600">✓ Active</span>
                      </div>
                      <div className="text-xs text-gray-500">Completed: Clean room, Feed cat</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">L</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Lucas (9)</span>
                        <span className="text-sm text-green-600">✓ Active</span>
                      </div>
                      <div className="text-xs text-gray-500">Completed: Take out trash</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Sarah (Mom)</span>
                        <span className="text-sm text-green-600">✓ Active</span>
                      </div>
                      <div className="text-xs text-gray-500">Completed: Grocery shopping, Laundry</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Weekly Goal Progress</span>
                    <span className="text-sm font-bold text-blue-600">92%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Great progress! 2 more tasks to complete this week's goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}