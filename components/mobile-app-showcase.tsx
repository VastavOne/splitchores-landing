export default function MobileAppShowcase() {
  return (
    <section className="py-12 md:py-20" style={{backgroundColor: '#F9FAFB'}}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="splitchores-heading text-3xl md:text-4xl mb-4" style={{color: '#111827'}}>
            Experience the Full App
          </h2>
          <p className="splitchores-body text-lg max-w-2xl mx-auto" style={{color: '#6B7280'}}>
            Every screen designed for real household dynamics - from task creation to stress relief
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Mobile Frame with Task Screen */}
          <div className="relative mx-auto">
            <div className="relative w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-2 bg-white">
                  <span className="text-sm font-semibold" style={{color: '#111827'}}>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    <div className="w-6 h-2 bg-gray-300 rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Header */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="splitchores-subheading text-xl" style={{color: '#111827'}}>Tasks</h3>
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{backgroundColor: '#5271FF'}}>
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Filter Bar */}
                  <div className="flex space-x-2 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: '#5271FF'}}>All</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#F3F4F6', color: '#6B7280'}}>My Tasks</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#F3F4F6', color: '#6B7280'}}>Overdue</span>
                  </div>
                </div>
                
                {/* Task List */}
                <div className="px-6 py-4 space-y-4">
                  {/* Task 1 */}
                  <div className="splitchores-card bg-white p-4 border-l-4" style={{borderLeftColor: '#F59E0B'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded border-2" style={{borderColor: '#F59E0B'}}></div>
                      <div className="flex-1">
                        <p className="splitchores-subheading text-sm" style={{color: '#111827'}}>Take out trash</p>
                        <p className="splitchores-caption text-xs" style={{color: '#6B7280'}}>Due today • Mom</p>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-4" style={{backgroundColor: '#F59E0B'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Task 2 */}
                  <div className="splitchores-card bg-white p-4 border-l-4" style={{borderLeftColor: '#10B981'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded border-2 bg-green-500 flex items-center justify-center">
                        <div className="w-3 h-2 bg-white rounded"></div>
                      </div>
                      <div className="flex-1">
                        <p className="splitchores-subheading text-sm line-through" style={{color: '#9CA3AF'}}>Clean kitchen</p>
                        <p className="splitchores-caption text-xs" style={{color: '#6B7280'}}>Completed • Dad</p>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-4" style={{backgroundColor: '#10B981'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Task 3 */}
                  <div className="splitchores-card bg-white p-4 border-l-4" style={{borderLeftColor: '#EF4444'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded border-2" style={{borderColor: '#EF4444'}}></div>
                      <div className="flex-1">
                        <p className="splitchores-subheading text-sm" style={{color: '#111827'}}>Vacuum living room</p>
                        <p className="splitchores-caption text-xs" style={{color: '#EF4444'}}>Overdue • Sarah</p>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-4" style={{backgroundColor: '#EF4444'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Tab Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
                  <div className="flex justify-around">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded" style={{backgroundColor: '#5271FF'}}></div>
                      <span className="text-xs mt-1" style={{color: '#5271FF'}}>Tasks</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded" style={{backgroundColor: '#9CA3AF'}}></div>
                      <span className="text-xs mt-1" style={{color: '#9CA3AF'}}>Groups</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded" style={{backgroundColor: '#9CA3AF'}}></div>
                      <span className="text-xs mt-1" style={{color: '#9CA3AF'}}>Calendar</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded" style={{backgroundColor: '#9CA3AF'}}></div>
                      <span className="text-xs mt-1" style={{color: '#9CA3AF'}}>Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#5271FF'}}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div>
                <h3 className="splitchores-subheading mb-2" style={{color: '#111827'}}>Real-Time Sync</h3>
                <p className="splitchores-body" style={{color: '#6B7280'}}>
                  No more "I already did that!" conflicts. Everyone sees updates instantly across all devices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#10B981'}}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div>
                <h3 className="splitchores-subheading mb-2" style={{color: '#111827'}}>Smart Recurring Tasks</h3>
                <p className="splitchores-body" style={{color: '#6B7280'}}>
                  Weekly chores automatically regenerate when completed. Never forget recurring responsibilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#8B5CF6'}}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div>
                <h3 className="splitchores-subheading mb-2" style={{color: '#111827'}}>Stress Relief Built-In</h3>
                <p className="splitchores-body" style={{color: '#6B7280'}}>
                  Desk stretches and tap games help you unwind. Household management shouldn't add stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}