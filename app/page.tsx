/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Fetch featured products
    fetch("/api/products/featured")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching featured products:", err);
        setIsLoading(false);
      });

    // Fetch categories
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              FashionHub
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/products"
                className="text-black hover:text-gray-900"
              >
                Shop
              </Link>
              <Link href="/about" className="text-black hover:text-gray-900">
                About
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <Link href="/cart" className="relative">
                <ShoppingBag className="h-6 w-6 text-black" />
                <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-black" />
                ) : (
                  <Menu className="h-6 w-6 text-black" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-black hover:text-gray-900">
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-black hover:text-gray-900"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-black hover:text-gray-900"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-black hover:text-gray-900"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Discover Your Style
              </h1>
              <p className="text-lg text-black mb-8">
                Explore our latest collection of trendy and comfortable clothing
                for every occasion.
              </p>
              <Link
                href="/products"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
              >
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Fashion collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Shop by Category
          </h2>

          {categories.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-black">
              {categories.map((category, index) => (
                <Link
                  href={`/products?category=${category.slug}`}
                  key={index}
                  className="group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={
                        category.image ||
                        `/placeholder.svg?height=300&width=300`
                      }
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-center text-black">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Men", "Women", "Accessories", "Footwear"].map((cat, index) => (
                <Link
                  href={`/products?category=${cat.toLowerCase()}`}
                  key={index}
                  className="group text-black"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={cat}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-center">{cat}</h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Featured Products
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 animate-pulse"
                >
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <Link
                  href={`/products/${product._id}`}
                  key={index}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden text-black">
                    <div className="relative h-48">
                      <Image
                        src={
                          product.images[0] ||
                          `/placeholder.svg?height=300&width=300`
                        }
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-1 group-hover:text-gray-600">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">
                        {product?.category}
                      </p>
                      <p className="font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt="Product placeholder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">
                      Sample Product {index + 1}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">Category</p>
                    <p className="font-bold text-gray-900">
                      ${(19.99 + index * 10).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg text-white border"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="bg-gray-700 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg text-black mb-4 font-bold">FashionHub</h3>
              <p className="text-gray-600 mb-4">
                Your one-stop destination for trendy and comfortable clothing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products?category=men"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=women"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=accessories"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=footwear"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Footwear
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-gray-600">
                <p>123 Fashion Street</p>
                <p>Styleville, ST 12345</p>
                <p className="mt-2">Email: info@fashionhub.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FashionHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
