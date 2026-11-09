# JS Mart Web App

A modern multi-tenant grocery marketplace platform built with **React 18**, **Vite**, **Tailwind CSS**, and **React Router DOM**. It provides two dedicated portals:

1. **Vendor Portal (Store Manager)**: For store owners to manage products, view incoming orders, track store inventory, inspect earnings, and configure store settings.
2. **Super Admin Portal**: For platform headquarters to monitor multi-store GMV, approve/reject onboarded stores, manage delivery rider fleets, view customer cohorts, oversee platform inventory, disburse vendor settlements, and review platform-wide reports.

---

## 🔑 Demo Access Credentials

Both credentials can be auto-filled with 1-click on the Sign In page (`/login`):

| Portal | Role | Username / Email | Password | Default Landing |
| :--- | :--- | :--- | :--- | :--- |
| **Normal Portal** | Store Manager / Vendor | `vendor@grocerymart.com` | `Password123#` | `/` |
| **Super Admin** | Platform Administrator | `admin@grocerymart.com` | `Admin123#` | `/admin` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ghaniusmanai-del/JSMartWebApp.git

# Navigate into the project
cd JSMartWebApp

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **Deployment**: Vercel
