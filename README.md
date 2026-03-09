# MaurWeb

A personalized AI therapist web interface powered by OpenAI.

## Description

MaurWeb is the React frontend for **Maureen** — a conversational AI therapist. It provides:

- A chat interface for real-time therapeutic conversations
- Secure user authentication via Supabase
- Session-aware messaging routed through a Spring Boot backend
- A clean, minimal UI designed for a calm, focused experience

## Overview

**Key Features**

- Fullscreen chat dashboard
- Login/signup flow with Supabase Auth
- JWT-authenticated requests to the Spring Boot backend

**Architecture**

```
React (this repo)
  ↓
Spring Boot (separate repo — handles ALL API calls)
  ↓
Supabase (database + auth verification)
  ↓
OpenAI API
```

The frontend handles UI and Supabase auth directly. All other API calls (chat, etc.) go through the Spring Boot backend — OpenAI is never called directly from the frontend.

## Dependencies

| Tool                  | Purpose                   |
| --------------------- | ------------------------- |
| React 19 + TypeScript | UI framework              |
| Vite                  | Build tool / dev server   |
| Bootstrap 5           | Styling (via custom SCSS) |
| react-router-dom      | Client-side routing       |
| @supabase/supabase-js | Auth only                 |

## Getting Started

**1. Install dependencies**

```bash
npm install
```

**2. Set up environment variables**

Create a `.env` file at the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**3. Run the dev server**

```bash
npm run dev
```

App runs at `http://localhost:5173`.

> The Spring Boot backend must also be running for chat functionality to work.

## Project Structure

```
src/
  App.tsx
  App.css
  main.tsx
  scss/
    custom.scss         # Bootstrap import + custom theme colors
  pages/
    Landing.tsx
    Dashboard.tsx
    Signup.tsx
  components/
    login/
      LoginModal.tsx
    nav/
      AppNavbar.tsx
  context/
    AuthContext.tsx     # Supabase and User auth state
  lib/
    supabase.ts
```
