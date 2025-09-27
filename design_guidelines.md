# Design Guidelines for Mustafa Brothers Mobile Shop

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern mobile service providers and small business websites, with emphasis on trust-building and professional credibility. The design should feel approachable yet professional, similar to successful local service businesses.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Primary Blue: 217 85% 35% (deep blue for trust and professionalism)
- Dark Mode Primary: 217 70% 60%

**Supporting Colors:**
- Success Green: 142 76% 36% (for positive actions, repair status)
- Warning Orange: 38 92% 50% (for urgent repairs, notifications)
- Neutral Grays: 220 14% 96% (light backgrounds), 220 13% 18% (dark mode)

### B. Typography
- **Primary Font**: Roboto (Google Fonts) - excellent readability for business content
- **Headings**: Roboto Medium/Bold (32px, 24px, 20px, 18px)
- **Body Text**: Roboto Regular (16px body, 14px secondary)
- **Labels/Captions**: Roboto Regular (12px, 14px)

### C. Layout System
**Spacing Units**: Consistent use of MUI's 8px grid system
- **Primary spacing**: 8px, 16px, 24px, 32px units (equivalent to MUI spacing 1, 2, 3, 4)
- **Page margins**: 16px mobile, 24px tablet, 32px desktop
- **Component gaps**: 16px between cards, 8px internal padding

### D. Component Library

**Cards & Containers:**
- Clean white cards with subtle shadows (elevation 2-4)
- Rounded corners (8px border radius)
- Consistent internal padding (16px)

**Buttons:**
- Primary: Filled blue buttons for main actions
- Secondary: Outlined buttons for secondary actions
- Text buttons for navigation links

**Product Grid:**
- Mobile: 1 column (xs=12)
- Tablet: 2 columns (sm=6) 
- Desktop: 3-4 columns (md=4, lg=3)

**Owner Card:**
- Prominent bordered box with clear visual hierarchy
- Avatar placeholder with upload indication
- Contact details prominently displayed

### E. Navigation & Layout
- **Header**: Clean AppBar with shop name, navigation links, and prominent call button
- **Footer**: Contact information and business hours
- **Mobile-first**: Collapsible navigation for mobile devices

## Page-Specific Design Guidelines

### Home Page
- **Hero Section**: Clean banner with shop name "Mustafa Brothers" and tagline
- **Owner Introduction**: Prominently featured owner card to build personal trust
- **Featured Products**: 3-4 key products in grid format
- **Quick Access**: Clear path to repair services

### Shop Page
- **Product Grid**: Responsive grid with consistent product cards
- **Product Cards**: Image, title, price, category tags, and add button
- **Filtering**: Simple category-based organization

### Repairs Page
- **Service Cards**: Clear service descriptions with ETA and pricing
- **Trust Indicators**: Emphasis on experience and reliability

### About Page
- **Owner Story**: Personal narrative with professional credentials
- **Shop History**: Brief, trust-building content

### Contact Page
- **Essential Information**: Phone, address, hours prominently displayed
- **Call-to-Action**: Easy-to-find contact methods

## Accessibility & Quality Standards
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Alt Text**: Descriptive alt text for all images
- **ARIA Labels**: Proper labeling for interactive elements
- **Color Contrast**: WCAG AA compliance for all text
- **Focus Management**: Clear focus indicators for keyboard navigation

## Images
**Owner Photo**: Professional headshot placeholder in owner card with clear upload boundary
**Product Images**: Consistent product photography style with white/neutral backgrounds
**No Large Hero Image**: Design focuses on clean layout and information hierarchy rather than large graphics

The design should convey reliability, professionalism, and personal service - key attributes for a successful local mobile repair business.