import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

// Lazy load pages for performance optimization
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Contact = lazy(() => import("./pages/Contact"));
const BodyOils = lazy(() => import("./pages/BodyOils"));

const BlogDetails = lazy(() => import("./components/BlogDetails"));
const Subcategory = lazy(() => import("./components/Subcategory"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Appointment = lazy(() => import("./components/Appoinment")); // Corrected spelling
const ChildCategory = lazy(() => import("./components/ChildCategory"));

// Error Boundary Component (optional for catching lazy load errors)
const ErrorBoundary = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-600"></div>
          <p className="ml-4 text-red-600">Loading...</p>
        </div>
      }
    >
      {children}
    </React.Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-screen">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-600"></div>
            <p className="ml-4 text-red-600">Loading...</p>
          </div>
        }
      >
        <ErrorBoundary>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bodyoils" element={<BodyOils />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />

            {/* Dynamic Routes */}
            <Route path="/blog/:slug" element={<BlogDetails />} />

            <Route path="/services/:category" element={<Subcategory />} />
            <Route path="/service/:category" element={<Subcategory />} />

            <Route
              path="/product/:category/:model"
              element={<ProductDetails />}
            />
            {/* Updated appointment route to include service */}
            <Route path="/appointment/:model/:service" element={<Appointment />} />
            <Route path="/subcategory/:category/:subcategorySlug" element={<ChildCategory />} />

          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  </HelmetProvider>
);

export default App;
