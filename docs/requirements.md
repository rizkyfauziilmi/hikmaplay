# HikmaPlay - MVP (Minimum Viable Product)

## 1. Overview
HikmaPlay is a curated global Islamic video platform that allows users to:

- Watch YouTube videos embedded in the platform
- Track their video progress
- Take notes or write summaries in Markdown
- Browse videos by category or tag

The MVP focuses on core functionality to validate the platform idea quickly.

---

## 2. MVP Features

### Video Player
- Embed YouTube videos using IFrame Player
- Auto-resume video from last watched timestamp
- Simple list of curated videos

### User Progress
- Save current video progress (seconds watched)
- Resume video from last saved timestamp
- Basic tracking for each user (can be in-memory for MVP)

### Notes / Markdown
- Users can write notes or summaries per video
- Markdown support for headings, lists, and links
- Preview rendered Markdown on the same page

### Video Management
- Simple admin interface (optional in MVP)
- Each video has:
  - Title
  - YouTube ID
  - Category
  - Tags

---

## 3. Technical Requirements (MVP)

### Frontend
- React / Next.js
- Markdown rendering (react-markdown)
- Responsive design

### Backend
- API endpoints:
  - GET /videos → list of videos
  - GET /videos/:id → video details
  - POST /progress → save user progress
  - GET /progress/:userId/:videoId → get progress
  - POST /notes → save Markdown note
  - GET /notes/:userId/:videoId → get note

### Database (optional for MVP)
- In-memory storage (later replace with PostgreSQL/MySQL)
- Tables: videos, user_progress, notes

---

## 4. MVP Goals
- Validate user interest in curated Islamic video + notes platform
- Test core functionality: video watch + progress + notes
- Gather user feedback for advanced features:
  - Categories, tags, search
  - AI-generated summaries or insights
  - Bookmark & playlist

---

## 5. Out of Scope for MVP
- Full authentication system (can use a simple user ID)
- AI summarization
- Analytics & recommendations
- Mobile app (web responsive only)
- Complex admin panel

---

## 6. Success Criteria
- Users can watch and resume videos
- Users can take and view notes
- Platform loads videos reliably
- Basic progress tracking works per user
