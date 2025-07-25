"use client";
import { useState } from "react";

export default function FeaturesPlanet() {
  const [demoTaskCompleted, setDemoTaskCompleted] = useState(false);
  const [demoPriority, setDemoPriority] = useState('medium');
  const [demoDeleted, setDemoDeleted] = useState(false);
  
  const priorities = ['none', 'low', 'medium', 'high'];
  
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return '#E81123'; // Red - matching app exactly
      case 'medium': return '#FF8C00'; // Orange - matching app exactly
      case 'low': return '#0078D4'; // Blue - matching app exactly
      default: return '#6b7280';
    }
  };
  
  const getPriorityIcon = (priority: string) => {
    switch(priority) {
      case 'high': return 'flag';
      case 'medium': return 'flag-outline';
      case 'low': return 'flag-outline';
      default: return 'remove-outline';
    }
  };

  const handleDemoTaskTap = () => {
    if (demoDeleted) return;
    setDemoTaskCompleted(!demoTaskCompleted);
  };
  
  const handlePriorityTap = () => {
    if (demoDeleted) return;
    const currentIndex = priorities.indexOf(demoPriority);
    const nextIndex = (currentIndex + 1) % priorities.length;
    setDemoPriority(priorities[nextIndex]);
  };
  
  const handleDemoDelete = () => {
    setDemoDeleted(true);
    setTimeout(() => {
      setDemoDeleted(false);
      setDemoTaskCompleted(false);
      setDemoPriority('medium');
    }, 3000);
  };

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Built for real households, not just task lists
            </h2>
          </div>
          
          {/* Interactive Demo */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="mx-auto max-w-md">
                <h3 className="text-xl font-semibold text-gray-200 mb-6">Try it yourself!</h3>
                
                {/* Demo Task Card */}
                <div className="relative">
                  {!demoDeleted ? (
                    <div 
                      className="bg-white rounded-2xl p-6 shadow-xl border-l-4 transition-all duration-300 hover:shadow-2xl overflow-visible"
                      style={{ borderLeftColor: demoTaskCompleted ? '#10b981' : getPriorityColor(demoPriority) }}
                    >
                      <div className="flex items-center space-x-4 overflow-visible">
                        {/* Checkbox */}
                        <button 
                          onClick={handleDemoTaskTap}
                          className="flex-shrink-0 transition-transform hover:scale-110"
                        >
                          {demoTaskCompleted ? (
                            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                            </svg>
                          )}
                        </button>
                        
                        {/* Task Content */}
                        <div className="flex-1 text-left">
                          <h4 className={`font-semibold text-gray-900 ${demoTaskCompleted ? 'line-through opacity-60' : ''}`}>
                            Take out the trash
                          </h4>
                          <p className={`text-sm text-gray-600 ${demoTaskCompleted ? 'line-through opacity-60' : ''}`}>
                            Don't forget the recycling! 🗑️
                          </p>
                        </div>
                        
                        {/* Priority Flag */}
                        <div className="flex-shrink-0 flex items-center justify-center" style={{ minWidth: '50px', minHeight: '50px', overflow: 'visible' }}>
                          <button 
                            onClick={handlePriorityTap}
                            className="transition-transform hover:scale-110 p-2"
                          >
                            <svg 
                              className="w-6 h-6" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                              style={{ color: getPriorityColor(demoPriority) }}
                            >
                              <path d="M2 2v16h2V2H2zm2 2v8l10-4-10-4z" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Delete Button */}
                        <button 
                          onClick={handleDemoDelete}
                          className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                      <div className="flex items-center justify-center space-x-2 text-green-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">Task deleted! Reappearing in 3 seconds...</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Instructions */}
                  <div className="mt-6 splitchores-card bg-white p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#5271FF'}}></div>
                      <span className="splitchores-caption" style={{color: '#374151'}}>Try to complete!</span>
                    </div>
                    <div className="space-y-2 splitchores-caption text-left" style={{color: '#6B7280'}}>
                      <p>• Tap circle → Feel completion vibration</p>
                      <p>• Tap flag → Priority: <span className={`priority-${demoPriority} font-semibold`}>{demoPriority}</span></p>
                      <p>• Tap trash → Delete with feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Multi-User Real-Time Sync</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                No more "I already did that!" conflicts. Smart conflict resolution handles multiple people editing simultaneously with real-time updates.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Smart Recurring Tasks</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Weekly chores don't get forgotten - they automatically regenerate when completed. Perfect for households with repeating responsibilities.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>Haptic Feedback System</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Physical engagement makes task completion satisfying. Feel subtle vibrations when completing tasks or changing priorities.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>
                <span>Stress Relief Integration</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Built-in wellness tools including desk stretches and tap games. Because household management shouldn't add to your stress.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                </svg>
                <span>Priority Cycling</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Quick visual prioritization without complex menus. Tap the flag to cycle: none → low → medium → high with instant visual feedback.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <span>Group Role Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Admin and member permissions with email-based invites. Someone manages the group, others just participate - no confusion.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}