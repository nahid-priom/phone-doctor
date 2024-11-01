import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import FloatingCallButton from "./components/FloatingCall";

const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Contact = lazy(() => import("./pages/Contact"));
const BodyOils = lazy(() => import("./pages/BodyOils"));
const BlogDetails = lazy(() => import("./components/BlogDetails"));
const Subcategory = lazy(() => import("./components/Subcategory"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Appointment = lazy(() => import("./components/Appoinment"));
const ChildCategory = lazy(() => import("./components/ChildCategory"));
const ClearCache = lazy(() => import("./components/ClearCache"));

const LoadingFallback = ({ children }) => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-600"></div>
        <p className="ml-4 text-red-600">Loading...</p>
      </div>
    }
  >
    {children}
  </Suspense>
);

const App = () => (
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <LoadingFallback>
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
          <Route path="/service/:category" element={<Subcategory />} />
          <Route path="/product/:category/:model" element={<ProductDetails />} />
          <Route path="/appointment/:model/:service" element={<Appointment />} />
          <Route path="/subcategory/:category/:subcategorySlug" element={<ChildCategory />} />

          <Route path="/clear-cache" element={<ClearCache />} />
        </Routes>
      </LoadingFallback>
    </Router>
    <FloatingCallButton />
  </HelmetProvider>
);

export default App;
