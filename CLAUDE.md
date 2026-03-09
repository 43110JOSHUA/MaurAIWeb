# MaurWeb

React web interface for **Maureen** — a personalized AI therapist. The dashboard provides a chat interface powered by OpenAI via a Spring Boot backend.

## Architecture

```
React (this repo)
  ↓
Spring Boot (separate repo — handles ALL API calls)
  ↓
Supabase (database + auth verification)
  ↓
OpenAI API
```

- The React frontend handles UI and Supabase auth (login/signup) directly
- All other API calls (chat, any future features) go through the Spring Boot backend — never call OpenAI or Supabase DB directly from the frontend
- Spring Boot verifies auth by validating the Supabase JWT on each request

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Bootstrap 5** via `src/scss/custom.scss` (imported once in `App.tsx`)
- **react-router-dom** for routing
- **Supabase** (`@supabase/supabase-js`) for auth only

## Styling Rules

- **No `react-bootstrap`** — use plain HTML elements with Bootstrap utility classes
- Bootstrap is imported globally via `src/scss/custom.scss` — do not import it anywhere else
- Custom colors are defined in `custom.scss` using Bootstrap's `$theme-colors` map:
  - `bg-tan` / `text-tan` → `#f8f7f2`
  - `bg-light-tan` / `text-light-tan` → `#fffffc`
  - `border-light-grey` → `#dfdfdf`
- Component-level and layout CSS lives in `src/App.css`

## Project Structure

```
src/
  App.tsx                        # Root — imports scss, defines routes
  App.css                        # Layout + navbar + hover-button styles
  main.tsx                       # Entry point
  scss/
    custom.scss                  # Bootstrap import + custom theme colors
  pages/
    Landing.tsx                  # Landing/hero page
    Dashboard.tsx                # Main chat page (chat UI goes here)
    Signup.tsx                   # Signup form
  components/
    login/
      LoginModal.tsx             # Fullscreen overlay modal, shown when unauthenticated
    nav/
      AppNavbar.tsx              # Pill-style sticky navbar with scroll-hide effect
  context/
    AuthContext.tsx              # Supabase auth state (user, loading, signOut)
  lib/
    supabase.ts                  # Supabase client
```

## Pages & Routing

| Route        | Component       | Notes                                      |
|--------------|-----------------|--------------------------------------------|
| `/`          | `Landing`       | Hero page with "Get Started" CTA           |
| `/dashboard` | `Dashboard`     | Chat UI — shows `LoginModal` if logged out |
| `/signup`    | `Signup`        | Create account form                        |

## UI Conventions

- Cards use `card bg-tan border border-light-grey p-4 shadow`
- Form inputs use `form-floating` with `bg-tan border border-light-grey`
- Error alerts: `alert alert-danger text-center small py-2` with `bi bi-exclamation-triangle` icon
- Nav links use `nav-item hover-button` for the subtle lift-on-hover effect
- Navbar is a pill (`navbar-pill rounded-pill`) inside a `navbar-header sticky-top` header that hides on scroll down
