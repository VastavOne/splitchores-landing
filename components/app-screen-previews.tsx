export default function AppScreenPreviews() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="splitchores-heading text-3xl md:text-4xl mb-4" style={{color: '#111827'}}>
            See SplitChores in Action
          </h2>
          <p className="splitchores-body text-lg" style={{color: '#6B7280'}}>
            Real screenshots from the app - designed for real households
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Calendar View */}
          <div className="splitchores-card splitchores-card-hover bg-white p-6">
            <div className="mb-4">
              <h3 className="splitchores-subheading mb-2" style={{color: '#374151'}}>Calendar View</h3>
              <p className="splitchores-caption" style={{color: '#6B7280'}}>Timeline view with due dates</p>
            </div>
            
            {/* Calendar Preview */}
            <div className="bg-gray-50 rounded-xl p-4 aspect-[9/16] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="splitchores-subheading text-sm" style={{color: '#374151'}}>January 2024</h4>
                <div className="w-6 h-6 rounded-full" style={{backgroundColor: '#5271FF'}}></div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-center p-1">
                    <span className="splitchores-caption text-xs" style={{color: '#9CA3AF'}}>{day}</span>
                  </div>
                ))}
                {Array.from({length: 35}, (_, i) => (
                  <div key={i} className="aspect-square flex items-center justify-center">
                    {i >= 6 && i <= 36 && (
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${
                        i === 20 ? 'text-white' : ''
                      }`} style={{
                        backgroundColor: i === 20 ? '#5271FF' : i === 15 || i === 25 ? '#FEF3C7' : 'transparent',
                        color: i === 20 ? 'white' : '#374151'
                      }}>
                        {i - 5}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Tasks for Selected Day */}
              <div className="flex-1">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 bg-white rounded-lg border-l-2" style={{borderLeftColor: '#F59E0B'}}>
                    <div className="w-4 h-4 rounded border-2" style={{borderColor: '#F59E0B'}}></div>
                    <span className="splitchores-caption text-xs" style={{color: '#374151'}}>Take out trash</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-white rounded-lg border-l-2" style={{borderLeftColor: '#10B981'}}>
                    <div className="w-4 h-4 rounded border-2 bg-green-500 flex items-center justify-center">
                      <div className="w-2 h-1 bg-white rounded"></div>
                    </div>
                    <span className="splitchores-caption text-xs line-through" style={{color: '#9CA3AF'}}>Clean kitchen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Group Details */}
          <div className="splitchores-card splitchores-card-hover bg-white p-6">
            <div className="mb-4">
              <h3 className="splitchores-subheading mb-2" style={{color: '#374151'}}>Group Details</h3>
              <p className="splitchores-caption" style={{color: '#6B7280'}}>Member management & roles</p>
            </div>
            
            {/* Group Details Preview */}
            <div className="bg-gray-50 rounded-xl p-4 aspect-[9/16] flex flex-col">
              {/* Group Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center group-avatar-blue">
                  <span className="text-white text-xl font-bold">F</span>
                </div>
                <h4 className="splitchores-subheading" style={{color: '#374151'}}>Family Chores</h4>
                <p className="splitchores-caption text-xs" style={{color: '#6B7280'}}>4 members</p>
              </div>
              
              {/* Members List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                  <div className="w-8 h-8 rounded-xl group-avatar-blue flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <p className="splitchores-caption text-xs font-medium" style={{color: '#374151'}}>Mom</p>
                    <p className="text-xs" style={{color: '#6B7280'}}>mom@family.com</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#5271FF', color: 'white'}}>Admin</span>
                </div>
                
                <div className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                  <div className="w-8 h-8 rounded-xl group-avatar-green flex items-center justify-center">
                    <span className="text-white text-xs font-bold">D</span>
                  </div>
                  <div className="flex-1">
                    <p className="splitchores-caption text-xs font-medium" style={{color: '#374151'}}>Dad</p>
                    <p className="text-xs" style={{color: '#6B7280'}}>dad@family.com</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs" style={{backgroundColor: '#F3F4F6', color: '#6B7280'}}>Member</span>
                </div>
                
                <div className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                  <div className="w-8 h-8 rounded-xl group-avatar-purple flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="flex-1">
                    <p className="splitchores-caption text-xs font-medium" style={{color: '#374151'}}>Sarah</p>
                    <p className="text-xs" style={{color: '#6B7280'}}>sarah@family.com</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs" style={{backgroundColor: '#F3F4F6', color: '#6B7280'}}>Member</span>
                </div>
              </div>
              
              {/* Group Stats */}
              <div className="bg-white rounded-lg p-3">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold" style={{color: '#5271FF'}}>24</p>
                    <p className="splitchores-caption text-xs" style={{color: '#6B7280'}}>Tasks This Week</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold" style={{color: '#10B981'}}>18</p>
                    <p className="splitchores-caption text-xs" style={{color: '#6B7280'}}>Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Screen */}
          <div className="splitchores-card splitchores-card-hover bg-white p-6">
            <div className="mb-4">
              <h3 className="splitchores-subheading mb-2" style={{color: '#374151'}}>Profile & Settings</h3>
              <p className="splitchores-caption" style={{color: '#6B7280'}}>Themes & stress relief tools</p>
            </div>
            
            {/* Profile Preview */}
            <div className="bg-gray-50 rounded-xl p-4 aspect-[9/16] flex flex-col">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center group-avatar-blue">
                  <span className="text-white text-xl font-bold">J</span>
                </div>
                <h4 className="splitchores-subheading" style={{color: '#374151'}}>John Doe</h4>
                <p className="splitchores-caption text-xs" style={{color: '#6B7280'}}>john@example.com</p>
              </div>
              
              {/* Theme Selection */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <p className="splitchores-caption text-xs mb-3" style={{color: '#374151'}}>Theme Selection</p>
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 rounded-full border-2" style={{backgroundColor: '#5271FF', borderColor: '#5271FF'}}>
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2" style={{backgroundColor: '#1A73E8', borderColor: '#E5E7EB'}}></div>
                  <div className="w-8 h-8 rounded-full border-2" style={{backgroundColor: '#00A86B', borderColor: '#E5E7EB'}}></div>
                </div>
              </div>
              
              {/* Stress Relief Section */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <p className="splitchores-caption text-xs mb-3" style={{color: '#374151'}}>Stress Relief</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-2 text-center">
                    <p className="text-white text-xs font-medium">Desk Stretch</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2 text-center">
                    <p className="text-white text-xs font-medium">Tap Game</p>
                  </div>
                </div>
              </div>
              
              {/* Settings List */}
              <div className="bg-white rounded-lg p-3 flex-1">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{backgroundColor: '#5271FF'}}>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <span className="splitchores-caption text-xs" style={{color: '#374151'}}>Notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <span className="splitchores-caption text-xs" style={{color: '#374151'}}>Explore More</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{backgroundColor: '#F59E0B'}}>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <span className="splitchores-caption text-xs" style={{color: '#374151'}}>Help & Support</span>
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