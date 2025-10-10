# JITS College Website - Design Guidelines

## Design Approach

**Selected Approach:** Hybrid - Design System Foundation with Marketing Enhancement

**Justification:** Educational institutions require both credibility (utility-focused dashboards) and engagement (marketing pages). We'll use Material Design principles as our foundation for consistency across portals, enhanced with modern educational site aesthetics inspired by institutions like MIT OpenCourseWare and productive tools like Notion.

**Core Principles:**
- Institutional trust through clean, professional design
- Information clarity for complex academic data
- Welcoming accessibility for diverse user groups
- Modern progressiveness reflecting "2026 trends"

## Color Palette

**Light Mode:**
- Primary: 210 80% 45% (Professional blue - trust and academia)
- Primary Hover: 210 80% 38%
- Secondary: 210 20% 25% (Dark slate for text hierarchy)
- Background: 0 0% 98% (Soft white)
- Surface: 0 0% 100% (Pure white cards)
- Border: 210 15% 88%
- Accent: 165 65% 45% (Teal for CTAs and success states)
- Warning: 35 90% 55% (Amber for notifications)
- Error: 0 70% 50%

**Dark Mode:**
- Primary: 210 75% 55%
- Primary Hover: 210 75% 62%
- Secondary: 210 15% 75%
- Background: 220 20% 10%
- Surface: 220 18% 14%
- Border: 210 15% 22%
- Accent: 165 55% 50%

## Typography

**Font Stack:**
- Headings: 'Plus Jakarta Sans' (Google Fonts) - Modern, geometric, professional
- Body: 'Inter' (Google Fonts) - Highly legible for dense information
- Monospace: 'JetBrains Mono' for code/IDs

**Scale:**
- Display (H1): text-5xl md:text-6xl font-bold tracking-tight
- Heading (H2): text-3xl md:text-4xl font-bold
- Subheading (H3): text-2xl md:text-3xl font-semibold
- Body Large: text-lg font-normal
- Body: text-base font-normal
- Small: text-sm
- Tiny: text-xs

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: 2-4 (buttons, form elements)
- Component spacing: 6-8 (between related elements)
- Section spacing: 12-20 (between major sections)
- Page margins: 16-24 (outer containers)

**Container Strategy:**
- Marketing pages: max-w-7xl for full sections, max-w-4xl for content
- Dashboards: max-w-screen-2xl with sidebar layouts
- Forms: max-w-2xl centered

**Grid System:**
- Homepage features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Dashboard cards: grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
- Statistics: grid-cols-2 md:grid-cols-4

## Component Library

**Navigation:**
- Sticky header with mega menu dropdowns
- Mobile: slide-in drawer with accordion submenus
- Search bar prominent in header with autocomplete dropdown
- Breadcrumb navigation in dashboard sections

**Buttons:**
- Primary: Solid background with primary color
- Secondary: Outline with border-2
- Ghost: Hover background only
- Sizes: sm (px-4 py-2), md (px-6 py-3), lg (px-8 py-4)
- Image overlays: backdrop-blur-md bg-white/20 dark:bg-gray-900/40

**Cards:**
- Dashboard: bg-surface border rounded-xl p-6 shadow-sm
- Feature cards: hover:shadow-lg transition with icon at top
- Announcement: border-l-4 with color coding by type
- Statistics: Large number display with label and trend indicator

**Forms:**
- Input fields: border rounded-lg px-4 py-3 with focus ring
- Labels: text-sm font-medium mb-2
- Validation: inline error messages with icon
- File uploads: Drag-drop zone with preview
- Captcha integration on all public forms

**Data Display:**
- Tables: Striped rows, sticky headers, sortable columns
- Results viewer: Card-based with download actions
- Attendance tracker: Calendar grid with color-coded status
- Charts: Simple bar/line charts using minimal library

**Overlays:**
- Modals: max-w-2xl with backdrop blur
- Notifications: Toast style, top-right, auto-dismiss
- Tooltips: Small, contextual on hover

## Homepage Specifications

**Hero Section (90vh):**
- Full-width image slider (3-4 campus images)
- Overlaid content: Large headline + subtext + dual CTAs
- Notification banner above (admission/exam dates)
- Subtle parallax scroll effect

**Quick Links Grid (4-column on desktop):**
- Icon cards with hover lift effect
- Student/Faculty/Alumni/Results portals
- Icon from Heroicons, title, brief description

**About JITS Section:**
- 2-column: Left text (vision/mission), Right stats grid (4 key metrics)
- Achievement badges with icons
- Horizontal layout on mobile

**Announcements Carousel:**
- Auto-rotating cards (5-second interval)
- Category tags with color coding
- Date and "Read more" link

**Events Preview (3-column cards):**
- Upcoming event cards with date badge
- Image thumbnail, title, location, RSVP button

**Footer:**
- 4-column: About, Quick Links, Contact, Newsletter
- Social icons, sitemap, accreditation logos
- Copyright and policy links

## Dashboard Design Patterns

**Student/Faculty/Alumni Dashboards:**
- Left sidebar navigation (collapsible on mobile)
- Top bar: Profile dropdown, notifications bell, search
- Main content: Widget-based dashboard with draggable cards
- Color-coded status indicators (attendance, fees, grades)
- Quick action buttons always visible

**Admin Dashboard:**
- Data-dense tables with filters and bulk actions
- Analytics charts in dashboard view
- Role management with permission matrix
- Activity log sidebar

## Images

**Required Images:**
- **Hero Slider (3-4 images):** Wide campus shots showing buildings, students in activities, modern facilities. High-quality, bright, diverse student representation. Dimensions: 1920x1080 minimum
- **About Section:** One impactful image showing campus life or iconic building. 800x600 minimum
- **Event Cards:** Thumbnail images for each event preview (600x400)
- **Department Pages:** Header images specific to each department (lab equipment, students, faculty)
- **Placement Section:** Company logos and student testimonial photos
- **Faculty Profiles:** Professional headshots

**Placement:**
- Hero: Full-width background with dark overlay (opacity-40)
- Feature sections: Floating alongside text content
- Event cards: Top of card with rounded corners
- Testimonials: Circular cropped next to quote

## Responsive Breakpoints

- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2-column grids, visible sidebar)
- Desktop: > 1024px (full layout, mega menu)

**Mobile Enhancements:**
- Bottom navigation for dashboards (5 key actions)
- Swipe gestures for card navigation
- Touch-optimized button sizes (min 44px)
- PWA install prompt

## Animations (Minimal)

- Page transitions: Fade in (200ms)
- Card hover: Slight lift (transform translateY(-2px))
- Button press: Scale down (0.98)
- Menu dropdown: Slide down with fade
- NO scroll-triggered animations
- NO complex hero animations

This design creates a trustworthy, modern educational platform balancing institutional credibility with contemporary web standards.