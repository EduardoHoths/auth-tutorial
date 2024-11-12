# Auth Tutorial

An in-depth tutorial demonstrating how to build a user authentication system with **Next.js**, **NextAuth**, **Prisma**, and **TailwindCSS**. This project covers essential concepts like email/password authentication, OAuth integration, form validation, and more.

## 🚀 Features

- **Email/Password Authentication** using NextAuth
- **OAuth Integration** (e.g., Google, GitHub)
- **Form Validation** with React Hook Form and Zod
- **Database Management** with Prisma ORM
- **Email Sending** via Nodemailer
- **Responsive UI** styled with TailwindCSS
- **Type Safety** with TypeScript

## 🛠️ Tech Stack

- **Next.js**: Framework for server-rendered React applications
- **NextAuth**: Authentication library for Next.js
- **Prisma**: Type-safe ORM for database interactions
- **TailwindCSS**: Utility-first CSS framework
- **React Hook Form**: Form state management
- **Zod**: Schema validation library
- **Nodemailer**: Email sending library
- **SQLite**: Database for development

## 📦 Dependencies

Key dependencies from `package.json`:

```json
"dependencies": {
  "@auth/prisma-adapter": "^2.7.2",
  "@hookform/resolvers": "^3.9.0",
  "@prisma/client": "^5.21.1",
  "axios": "^1.7.7",
  "bcryptjs": "^2.4.3",
  "next": "15.0.1",
  "next-auth": "5.0.0-beta.25",
  "nodemailer": "^6.9.16",
  "react": "18.3.1",
  "react-hook-form": "^7.53.1",
  "react-icons": "^5.3.0",
  "zod": "^3.23.8"
}
```

## ⚙️ Installation

Follow these steps to get the project running locally:

1. **Clone the repository:**

  ```bash
    git clone https://github.com/your-username/auth-tutorial.git
    cd auth-tutorial
  ```

2. **Install dependencies:**
  ```bash
    pnpm install
  ```
3. **Set up environment variables:**
  - Create a `.env.local` file in the root directory.
  ```env
    AUTH_SECRET=your_auth_secret
    AUTH_GITHUB_ID=your_auth_github_id
    AUTH_GITHUB_SECRET=auth_github_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_pass
  ```
4. **Set up Prisma:**
  Run the Prisma migration command to set up the database:
  ```bash
    npx prisma migrate dev
  ```
5. **Run the development server:**
  ```bash
    pnpm run dev
  ```
  - Open http://localhost:3000 in your browser.

## 💻 Usage
Sign Up and Sign In: Users can register with email/password or sign in using OAuth providers (Google, GitHub).
Form Validation: All forms use Zod for schema validation.
Email Notifications: Emails (e.g., verification or password reset) are sent using Nodemailer.