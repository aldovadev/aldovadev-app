# Aldovadev App

Personal portfolio site built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
	- [System Overview](#system-overview)
	- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Running the Application](#running-the-application)
- [API](#api)
- [Scripts Reference](#scripts-reference)
- [Development Rules](#development-rules)

---

## Tech Stack

| Component      | Technology     | Version |
| -------------- | -------------- | ------- |
| **Runtime**    | Node.js        | 20+     |
| **Framework**  | Next.js        | 16.x    |
| **Language**   | TypeScript     | 5.x     |
| **UI**         | React          | 19.x    |
| **Styling**    | Tailwind CSS   | 4.x     |
| **Motion**     | Framer Motion  | 12.x    |
| **3D/FX**      | Three.js       | 0.18x   |
| **Icons**      | Lucide, RI     | Latest |

---

## Features

- Responsive layout with App Router and server components
- Animated sections and interactive UI elements
- Data-driven sections for projects and blog content
- Contact API route for form submissions
- Dark mode and motion-aware UI behaviors

---

## Architecture

### System Overview

This project uses the Next.js App Router with a component-first structure.

### Project Structure

```
src/
	app/                 # App Router pages, layouts, route handlers
	components/          # UI + layout + section components
		layout/
		sections/
		ui/
	data/                # Static content modules
	hooks/               # Custom React hooks
	lib/                 # Utilities and helpers
	types/               # Shared TypeScript types
public/                # Static assets
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Running the Application

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

---

## API

- `POST /api/contact` - contact form submission endpoint

---

## Scripts Reference

| Script        | Description            |
| ------------ | ---------------------- |
| `npm run dev`   | Start dev server       |
| `npm run build` | Build for production   |
| `npm run start` | Start production server|
| `npm run lint`  | Run ESLint             |

---

## Development Rules

See RULES.md for coding standards, review checklist, and documentation requirements.
