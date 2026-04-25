# 🚀 EdTech Nexus: AI-Powered Micro-Frontend Platform

EdTech Nexus is a next-generation, enterprise-grade educational SaaS platform designed for high scalability and modularity. Built using a **Micro-Frontend (MFE) Architecture**, it enables independent development and deployment of core features while maintaining a unified, high-fidelity user experience.

![EdTech Nexus Dashboard](https://images.unsplash.com/photo-1501504905953-f83617c3fab1?q=80&w=2070&auto=format&fit=crop)

## ✨ Core Features

*   **🤖 AI Neural Tutor**: Real-time personalized assistance and automated revision tools.
*   **🏢 Micro-Frontend Architecture**: Powered by Webpack Module Federation for independent module lifecycles.
*   **🎨 Futuristic UI**: Premium glassmorphism design system with custom design tokens.
*   **🎓 Student Learning Hub**: Independent MFE for course tracking and AI learning paths.
*   **👨‍🏫 Instructor Dashboard**: Advanced course management with AI-driven content generation.
*   **📊 Predictive Analytics**: Real-time insights into student performance and skill gaps.

## 🏗️ Architecture

The platform is divided into a **Shell** application and several **Remote Modules**:

| Module | Port | Responsibility |
| :--- | :--- | :--- |
| **Shell** | `3000` | Orchestration, Navigation, Auth State, Routing |
| **Auth** | `3001` | SSO, RBAC, Session Management |
| **Learning** | `3002` | Student Dashboard, Course Viewer, AI Pathing |
| **Instructor**| `3003` | Course Creation, AI Architect, Analytics |

## 🛠️ Technology Stack

*   **Frontend**: React 18, TypeScript, Webpack 5 (Module Federation)
*   **Styling**: Vanilla CSS (Custom Design System), Lucide Icons
*   **State**: React Context / Zustand
*   **Build**: Babel, TS-Loader

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd EdTech
   ```

2. Install dependencies for all modules:
   ```bash
   # In shell/
   cd shell && npm install
   # In modules/auth/
   cd ../modules/auth && npm install
   # Repeat for learning and instructor
   ```

### Running Locally

To run the entire platform, you must start each micro-frontend simultaneously.

1. **Start the Shell**:
   ```bash
   cd shell && npm start
   ```

2. **Start the Remotes**:
   Open separate terminals for each module:
   ```bash
   cd modules/auth && npm start
   cd modules/learning && npm start
   cd modules/instructor && npm start
   ```

3. Access the platform at **[http://localhost:3000](http://localhost:3000)**.

## 📈 Roadmap

- [ ] Centralized AI Service Layer (LLM Integration)
- [ ] Live Class Module (WebRTC + Interactive Whiteboard)
- [ ] Gamification Engine (XP, Badges, Leaderboards)
- [ ] Docker & Kubernetes Orchestration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
