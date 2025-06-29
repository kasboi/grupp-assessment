# React: Responsive Settings Page with Tailwind CSS

![Made with Vercel](https://img.shields.io/github/deployments/kasboi/vencru/production?label=vercel&logo=vercel&logoColor=white)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.2.4-38B2AC)
![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18)

A modern, fully responsive settings page built with React and Tailwind CSS, featuring a comprehensive test suite and advanced functionality like PDF export.

🌐 **Live Demo**: [vencru-two.vercel.app](https://vencru-two.vercel.app/)

## ✨ Features

### 🎨 **UI/UX**

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern Interface** - Clean, intuitive design with Tailwind CSS
- **Interactive Components** - Dynamic sidebar navigation, dropdown menus, and form controls
- **Smooth Animations** - CSS transitions and hover effects

### 🔧 **Functionality**

- **User Management Table** - Display and manage user roles with real-time data
- **Settings Navigation** - Comprehensive settings panel with multiple sections
- **API Integration** - Fetches data from external API endpoints

### 🧪 **Testing**

- **Comprehensive Test Suite** - 35+ test cases covering all components
- **Component Testing** - Individual component unit tests
- **Integration Testing** - API and component interaction tests
- **Responsive Testing** - Mobile and desktop layout validation
- **Coverage Reports** - Detailed test coverage analysis

### 📱 **Responsive Features**

- **Mobile-First Design** - Optimized for mobile devices
- **Adaptive Navigation** - Collapsible sidebar for mobile screens
- **Flexible Layouts** - Components adapt to different screen sizes
- **Touch-Friendly** - Optimized for touch interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd vencru
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **View the application**
   Open [http://localhost:5173](http://localhost:5173) in your browser

## 📋 Available Scripts

| Command                 | Description                   |
| ----------------------- | ----------------------------- |
| `npm run dev`           | Start development server      |
| `npm run build`         | Build for production          |
| `npm run preview`       | Preview production build      |
| `npm test`              | Run test suite in watch mode  |
| `npm run test:run`      | Run tests once                |
| `npm run test:ui`       | Open Vitest UI dashboard      |
| `npm run test:coverage` | Generate test coverage report |

## 🧪 Testing

This project includes a comprehensive testing suite built with **Vitest** and **React Testing Library**.

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Generate coverage report
npm run test:coverage

# Open test UI dashboard
npm run test:ui
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Table.jsx        # Data table with PDF export
│   ├── PayMethodCard.jsx # Payment method management
│   └── __tests__/       # Component test files
├── Settings/            # Settings page components
├── SideBar/            # Navigation sidebar
├── NavBar/             # Top navigation
└── __tests__/          # Integration and app-level tests
```

## 🛠️ Technologies Used

### **Frontend**

- **React 18.2.0** - Modern React with hooks
- **Tailwind CSS 3.2.4** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons
- **Vite** - Fast build tool and dev server

### **Testing**

- **Vitest 3.2.4** - Fast unit test framework
- **React Testing Library** - React component testing utilities
- **jsdom** - DOM simulation for testing
- **@testing-library/user-event** - User interaction simulation

### **Development Tools**

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📊 API Integration

The application integrates with the Gamma API for user role management:

- **Endpoint**: `https://gamma-api.vercel.app/api/roles`
- **Features**: Real-time data fetching, error handling, loading states
- **Data**: User roles, statuses, creation dates, and user assignments

## 🎯 Key Features Implemented

### **Responsive Design**

- Mobile-first approach
- Breakpoint optimization for all screen sizes
- Touch-friendly interface elements
- Collapsible navigation for mobile devices

### **State Management**

- React hooks for local state
- Prop drilling for component communication
- Efficient re-rendering optimization

## 📝 License

This project is part of a development assessment and is for demonstration purposes.
Feel free to use it as a reference for building responsive React applications with Tailwind CSS and comprehensive testing practices.
