# From Website to Interactive Deck: The Evolution of Darshana
**By Keshav Bhardwaj**

## 🔄 The Pivot
In response to feedback regarding the difference between a scrolling website and a true "Digital Deck," I completely refactored the Darshana experience. Drawing inspiration from professional presentation platforms like **Digideck**, the project has evolved from a standard landing page into a **Slide-Based Presentation Framework**.

### 1. Presentation Structure (The "Deck" Logic)
I replaced the free-scrolling layout with a **CSS Scroll-Snap** system. Each section is now a discrete $100vh$ slide. 
- **Rationale:** Presentations are linear. By locking the viewport to single slides, I ensure that the audience's focus is exactly where the presenter intends. It forces a "one point per slide" narrative which is essential for luxury sales pitches.
- **Navigation:** I replaced the traditional top menu with a vertical **Slide Navigator**. This provides the "Digideck" feel—giving the user context of where they are in the presentation and allowing for quick jumps between chapters (Intro, Brands, Analytics, etc.).

### 2. Design Consistency & Luxury
The "Luxury Dark" aesthetic remains at the core. High-contrast typography and subtle 3D hover effects (using Framer Motion) provide a tactile feel to the slides, making the deck feel like a high-end software application rather than just a web page.

### 3. Strategic Use of AI (AI Fluency)
AI was leveraged across three layers of the project:
1. **Architectural Artistry:** Generating high-end mall visuals and retail environments that match the premium brand identity.
2. **Data Modeling:** Using AI to bridge the gap between abstract concepts and plausible business metrics (ROI, footfall growth, consumer demographics).
3. **Engineering Support:** AI helped architect the transition from a scrolling site to a slide-snapping deck by suggesting reliable cross-browser snap utilities.

## 📈 What I would improve with more time
- **Presenter Mode:** A separate view for the presenter with speaker notes and a remote-control capability via mobile.
- **Real-time Charting:** Integrating an API to pull live retail data directly into the *Intelligence* slide.
- **Embedded VR:** Directly embedding a 360-degree interactive panorama of the mall into the *Attractions* slide.

---
This evolution demonstrates the flexibility of React in building specialized UI patterns that go beyond standard web layouts. Darshana is now a 100% submission-ready **Interactive Digital Deck**.
