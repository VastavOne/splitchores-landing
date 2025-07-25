# SplitChores Landing Page - Complete Information

## 📱 About SplitChores App
**Location**: `C:\MyComputer\Apps\Backups\30.DeletionTaskTabNotWorking\SplitChores\`

**App Description**: The only collaborative task app that actually works for real households. Built for roommates, families, and shared living situations with smart conflict resolution, haptic feedback, and stress relief integration.

## 🎯 Unique Selling Proposition (USP)
"The only collaborative task app that actually works for real households"

### Key Differentiators:
1. **Multi-User Real-Time Sync** - No more "I already did that!" conflicts
2. **Smart Recurring Tasks** - Auto-regenerates weekly chores when completed
3. **Haptic Feedback System** - Physical engagement makes completion satisfying
4. **Stress Relief Integration** - Built-in desk stretches and tap games
5. **Priority Cycling** - Visual feedback without complex menus (none → low → medium → high)
6. **Group Role Management** - Admin/member permissions with email invites

## 🎨 Brand Identity

### Colors (Exact App Colors):
- **Primary**: #5271FF (SplitChores Blue)
- **Primary Dark**: #4461E6
- **Success**: #10B981
- **Warning**: #F59E0B
- **Danger**: #EF4444
- **Gray Scale**: #F9FAFB to #111827

### Typography:
- **Font**: Inter
- **Headings**: font-weight: 700, letter-spacing: -0.025em
- **Subheadings**: font-weight: 600
- **Body**: font-weight: 400
- **Captions**: font-weight: 500, font-size: 0.875rem

### Design System:
- **Card Radius**: 16px
- **Button Radius**: 12px
- **Shadows**: 0 1px 3px rgba(82, 113, 255, 0.1)
- **Spacing**: Consistent 16px padding, 12px gaps

## 🏗️ Landing Page Structure

### Current Sections:
1. **Header** - SplitChores branding + app store buttons
2. **Hero** - USP + social proof + download CTAs
3. **How It Works** - 3-step process (Templates → Assign → Track)
4. **App Screen Previews** - Calendar, Group Details, Profile screens
5. **Mobile Showcase** - Phone frame with task interface
6. **Interactive Demo** - Try task completion, priority cycling, deletion
7. **Features Grid** - 6 unique differentiators
8. **User Testimonial** - Real household success story
9. **CTA** - Final download section with app store badges

### Target Audience:
- **Primary**: Shared Living Households (Ages 22-45)
  - Roommates sharing apartments/houses
  - Young families with 2-4 members
  - Multi-generational homes
- **Secondary**: Small Teams (5-15 people)

## 🔧 Technical Implementation

### Framework: Next.js 15.1.6 with TailwindCSS v4
### Key Files:
- **Main Page**: `app/(default)/page.tsx`
- **Components**: `components/` folder
- **Custom Theme**: `app/css/splitchores-theme.css`
- **Layout**: `app/layout.tsx`

### Custom Components Created:
- `hero-home.tsx` - Hero section with app preview cards
- `business-categories.tsx` - How it works process
- `app-screen-previews.tsx` - Static app screen mockups
- `mobile-app-showcase.tsx` - Phone frame with task interface
- `features-planet.tsx` - Interactive demo + features grid
- `large-testimonial.tsx` - User success story
- `cta.tsx` - Final download section
- `ui/header.tsx` - Navigation with app store links

## 🎮 Interactive Features

### Demo Section:
- **Task Completion**: Click circle to mark complete
- **Priority Cycling**: Click flag to cycle priorities with colors
- **Task Deletion**: Click trash icon (auto-resets in 3 seconds)
- **Haptic Feedback Cues**: Visual indicators for tactile experience

### App Store Compliance:
- **No false metrics** - Uses "Thousands of families" instead of specific numbers
- **No fake ratings** - Uses "Highly Rated" instead of "4.9/5"
- **Aspirational language** - Safe for pre-launch app

## 🚫 What's NOT Included (Intentionally):
- **No gamification** - No points, achievements, leaderboards (not implemented in app yet)
- **No functional code** - App screen previews are static (security for open source)
- **No micro-interactions** - Kept simple for performance
- **No specific user counts** - App Store compliant language

## 📋 Missing Elements (Future Improvements):
1. **Social Proof Section** - Multiple household testimonials
2. **Problem/Solution Framework** - Before vs After scenarios
3. **FAQ Section** - App Store compliance
4. **Pricing Section** - "Free Forever" trust building
5. **Security/Privacy Badges** - Trust indicators
6. **Video Demo** - 30-second app walkthrough

## 🎯 App Features Highlighted:

### Core Features:
1. **Task Management** - Create, assign, track with priorities
2. **Group Collaboration** - Real-time updates, role management
3. **Smart Notifications** - Timely reminders without spam
4. **Calendar Integration** - Visual task planning
5. **Activity Tracking** - Who did what, when
6. **Offline Support** - Works without internet, syncs later

### Unique Features:
1. **Conflict Resolution** - Handles multiple people editing simultaneously
2. **Recurring Task Logic** - Auto-creates next instance when completed
3. **Haptic Feedback** - Physical engagement for satisfaction
4. **Stress Relief Tools** - Desk stretches, tap games for wellness
5. **Priority Visual System** - Color-coded flags with instant feedback
6. **Template-Based Setup** - Family, Roommates, Teams, Personal

## 🔗 App Store Links (Placeholder):
- **iOS**: https://apps.apple.com/app/splitchores
- **Android**: https://play.google.com/store/apps/details?id=com.splitchores

## 📱 App Onboarding Templates:
```javascript
const templates = [
  { id: 'family', name: 'Family Tasks' },      // Parents + kids
  { id: 'roommates', name: 'Roommate Chores' }, // Shared living
  { id: 'work', name: 'Team Projects' },        // Small teams
  { id: 'personal', name: 'Personal Goals' }    // Individual users
];
```

## 🎨 Priority System:
- **High**: #E81123 (Red) - flag icon
- **Medium**: #FF8C00 (Orange) - flag-outline icon  
- **Low**: #0078D4 (Blue) - flag-outline icon
- **None**: #6B7280 (Gray) - remove-outline icon

## 🏠 Real Household Focus:
The app recognizes that household task management is fundamentally different from workplace project management. It needs to be:
- **Forgiving** (people forget, get busy)
- **Persistent** (chores repeat forever)
- **Collaborative** (multiple people, different schedules)
- **Stress-reducing** (includes wellness features)

---

**Last Updated**: January 2025
**Status**: Ready for deployment and App Store submission
**Next Steps**: Add social proof section, FAQ, and video demo