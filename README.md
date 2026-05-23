<<<<<<< HEAD
<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
=======
# 💼 Job Portal
>>>>>>> f9da5789f18a9f4b7283aa04a2e852068a2d1347

A modern, full-featured remote job portal built with Next.js, React, Redux Toolkit, and Tailwind CSS. Browse thousands of remote jobs, save your favorites, and post new opportunities — all in one place.

---

## 🌐 Live Demo

[View Live →](https://your-vercel-url.vercel.app)

---

## 📸 Screenshots

> Add screenshots here after deployment

---

## ✨ Features

- 🔍 **Search Jobs** — Search by title, company, or location in real time
- 🎯 **Filter Jobs** — Filter by job type and category
- 💾 **Save Jobs** — Bookmark jobs and view them on your saved jobs page
- 📝 **Post a Job** — Multi-step form to post new job listings
- 👤 **Profile Page** — View and edit your candidate profile
- 🌙 **Dark Mode** — Toggle between light and dark themes
- 📱 **Fully Responsive** — Works on all screen sizes
- ⚡ **Skeleton Loading** — Professional loading states
- 🚫 **404 Page** — Custom not found page

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with file-based routing |
| **React 19** | UI component library |
| **Redux Toolkit** | Global state management |
| **Tailwind CSS v4** | Utility-first styling |
| **React Icons** | Icon library |
| **Remotive API** | Real remote job listings |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                 # Landing page
│   ├── layout.js               # Root layout
│   ├── not-found.jsx           # 404 page
│   ├── jobs/
│   │   ├── page.jsx            # Jobs listing
│   │   └── [id]/page.jsx       # Job detail
│   ├── post-job/page.jsx       # Post a job
│   ├── saved-jobs/page.jsx     # Saved jobs
│   └── profile/page.jsx        # User profile
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── StatsCounter.jsx
│   │   ├── JobCategories.jsx
│   │   ├── FeaturedCompanies.jsx
│   │   └── HowItWorks.jsx
│   ├── jobs/
│   │   ├── JobCard.jsx
│   │   ├── JobFilters.jsx
│   │   ├── JobSearch.jsx
│   │   └── SkeletonLoader.jsx
│   ├── post-job/
│   │   ├── StepOne.jsx
│   │   ├── StepTwo.jsx
│   │   └── StepThree.jsx
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       └── EmptyState.jsx
│
├── store/
│   ├── store.js
│   └── slices/
│       ├── jobsSlice.js
│       └── savedJobsSlice.js
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   └── useFetch.js
│
└── utils/
    └── helpers.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Rishi-00100/job-portal.git

# Navigate to project
cd job-portal

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

<<<<<<< HEAD
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# job-portal
>>>>>>> b9bbfc0c373da98e53f9821fef2f3ec995e0180a
=======
---

## 📦 Key Packages

```json
{
  "next": "^15",
  "react": "^19",
  "@reduxjs/toolkit": "latest",
  "react-redux": "latest",
  "react-icons": "latest",
  "tailwindcss": "^4"
}
```

---

## 🔌 API

This project uses the free [Remotive API](https://remotive.com/api/remote-jobs) for real remote job listings.

```
Base URL: https://remotive.com/api/remote-jobs
Filter:   ?category=software-dev
Search:   ?search=react
```

---

## 🎯 Pages Overview

| Page | Route | Description |
|---|---|---|
| Landing | `/` | Hero, stats, categories, companies |
| Jobs | `/jobs` | Browse + search + filter all jobs |
| Job Detail | `/jobs/[id]` | Full job description + apply |
| Post Job | `/post-job` | Multi-step job posting form |
| Saved Jobs | `/saved-jobs` | Bookmarked jobs |
| Profile | `/profile` | User profile + edit |

---

## 💡 Key Implementation Details

- **useFetch** — Custom hook for API calls with loading/error states
- **Redux Toolkit** — Manages jobs array and saved jobs globally
- **useReducer** — Powers the multi-step post job form
- **useMemo** — Optimizes job filtering performance
- **Context API** — Handles dark/light theme toggling
- **dangerouslySetInnerHTML** — Renders HTML job descriptions safely
- **Intl API** — Professional date and salary formatting

---

## 👨‍💻 Author

**Rishi**
- GitHub: [@Rishi-00100](https://github.com/Rishi-00100).
>>>>>>> f9da5789f18a9f4b7283aa04a2e852068a2d1347
