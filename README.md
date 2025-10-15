# CartWish - React Frontend

CartWish is a modern e-commerce frontend application built with React, providing a seamless shopping experience with intuitive user interface and responsive design.

## 🚀 Features

### Core Functionality

- **User Authentication** - Secure login and registration with form validation
- **Product Browsing** - Browse products with filtering and search capabilities
- **Shopping Cart** - Add/remove items with real-time updates
- **Order Management** - View order history and track orders
- **Responsive Design** - Mobile-first approach with modern UI/UX
- **Form Validation** - Client-side validation using Zod schemas

### User Interface

- **Modern Design** - Clean and intuitive interface
- **Hero Sections** - Eye-catching promotional banners
- **Featured Products** - Highlighted product showcases
- **Product Cards** - Detailed product information display
- **Navigation** - Easy-to-use navigation with icons
- **Loading States** - Smooth user experience with loading indicators

## 🛠️ Tech Stack

### Core Technologies

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing and navigation
- **React Hook Form** - Efficient form handling and validation
- **Zod** - TypeScript-first schema validation

### Development Tools

- **ESLint** - Code linting and quality assurance
- **CSS3** - Modern styling with custom CSS
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
cartwish-react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   │   ├── basket.png
│   │   ├── cartwish-favicon.svg
│   │   ├── glowing-star.png
│   │   ├── id-button.png
│   │   ├── iphone-14-pro.webp
│   │   ├── iphone.jpg
│   │   ├── locked.png
│   │   ├── mac-system-cut.jfif
│   │   ├── memo.png
│   │   ├── package.png
│   │   ├── react.svg
│   │   ├── remove.png
│   │   ├── rocket.png
│   │   ├── user.webp
│   │   └── white-star.png
│   ├── components/        # React components
│   │   ├── Authentication/
│   │   │   ├── LoginPage.jsx      # User login form
│   │   │   ├── LoginPage.css      # Login page styles
│   │   │   ├── SignupPage.jsx     # User registration form
│   │   │   └── SignupPage.css     # Signup page styles
│   │   ├── Cart/
│   │   │   └── [Cart components]
│   │   ├── Common/
│   │   │   └── [Shared components]
│   │   ├── Home/
│   │   │   ├── HomePage.jsx       # Main homepage
│   │   │   ├── HeroSection.jsx    # Hero banner component
│   │   │   ├── HeroSection.css    # Hero section styles
│   │   │   ├── FeaturedProducts.jsx # Featured products display
│   │   │   ├── FeaturedProducts.css # Featured products styles
│   │   │   ├── FeaturedProduct.jsx  # Individual featured product
│   │   │   └── FeaturedProduct.css  # Featured product styles
│   │   ├── MyOrder/
│   │   │   └── [Order management components]
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx         # Main navigation
│   │   │   ├── Navbar.css         # Navigation styles
│   │   │   └── LinkWithIcon.jsx   # Navigation link component
│   │   ├── Products/
│   │   │   ├── ProductsPage.jsx   # Products listing page
│   │   │   ├── ProductsPage.css   # Products page styles
│   │   │   ├── ProductsList.jsx   # Products grid/list
│   │   │   ├── ProductsList.css   # Products list styles
│   │   │   ├── ProductsSidebar.jsx # Filter sidebar
│   │   │   ├── ProductsSidebar.css # Sidebar styles
│   │   │   ├── ProductCard.jsx    # Individual product card
│   │   │   └── ProductCard.css    # Product card styles
│   │   ├── Routes/
│   │   │   └── Routing.jsx        # Route configuration
│   │   └── SingleProduct/
│   │       └── [Product detail components]
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global application styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and CSS reset
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
├── .eslintrc.cjs          # ESLint rules
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- CartWish backend server running

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cartwish-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Component Architecture

### Authentication Components

- **LoginPage** - User login with email/password validation
- **SignupPage** - User registration with form validation
- Uses React Hook Form with Zod schema validation

### Home Components

- **HomePage** - Main landing page with hero sections
- **HeroSection** - Reusable promotional banner component
- **FeaturedProducts** - Showcase of highlighted products
- **FeaturedProduct** - Individual featured product display

### Product Components

- **ProductsPage** - Main products listing page
- **ProductsList** - Grid/list view of products
- **ProductsSidebar** - Filter and category sidebar
- **ProductCard** - Individual product information card

### Navigation Components

- **Navbar** - Main application navigation
- **LinkWithIcon** - Navigation links with icons

### Routing

- **Routing** - Centralized route configuration using React Router

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and building:

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
});
```

### ESLint Configuration

Code quality is maintained with ESLint:

- React-specific rules
- React Hooks rules
- React Refresh rules
- Custom configuration for optimal development experience

## 🎯 Key Features Implementation

### Form Validation

Uses React Hook Form with Zod for robust form validation:

```javascript
const schema = z.object({
	email: z.string().email({ message: "Please Enter a valid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" }),
});
```

### Routing

Implements client-side routing with React Router:

- Home page (`/`)
- Products page (`/products`)
- Single product page (`/product/:id`)
- Cart page (`/cart`)
- Orders page (`/myorders`)
- Login page (`/login`)
- Signup page (`/signup`)

### Responsive Design

- Mobile-first CSS approach
- Flexible grid layouts
- Responsive images and components
- Touch-friendly interface elements

## 🔗 Backend Integration

The frontend integrates with the CartWish backend API:

- User authentication endpoints
- Product data endpoints
- Cart management endpoints
- Order processing endpoints

## 🎨 Styling Approach

- **CSS Modules** - Component-scoped styling
- **Custom CSS** - Tailored design system
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean and intuitive interface

## 🚀 Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

Test the production build locally before deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Use functional components with hooks
- Implement proper form validation
- Ensure responsive design
- Write clean, readable code
- Follow ESLint rules

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created by [Your Name]

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Contact the development team

---

**Happy Shopping with CartWish! 🛒✨**
