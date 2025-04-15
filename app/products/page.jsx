"use client";

import { useState, useEffect } from "react";
import {  useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Filter, X, Search } from "lucide-react";

export default function ProductsPage() {
//   const searchParams = useSearchParams();
  const router = useRouter();

  // Get query parameters
  const categoryParam = searchParams.get("category") || "";
  const searchParam = searchParams.get("search") || "";
  const pageParam = Number.parseInt(searchParams.get("page") || "1");
  const sortParam = searchParams.get("sort") || "newest";
  const minPriceParam = searchParams.get("minPrice") || "";
  const maxPriceParam = searchParams.get("maxPrice") || "";
  const colorParam = searchParams.get("color") || "";
  const sizeParam = searchParams.get("size") || "";

  // State
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([
    "Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
  ]);
  const [sizes, setSizes] = useState(["XS", "S", "M", "L", "XL", "XXL"]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Form state
  const [searchValue, setSearchValue] = useState(searchParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedSort, setSelectedSort] = useState(sortParam);
  const [selectedColor, setSelectedColor] = useState(colorParam);
  const [selectedSize, setSelectedSize] = useState(sizeParam);
  const [minPrice, setMinPrice] = useState(minPriceParam);
  const [maxPrice, setMaxPrice] = useState(maxPriceParam);

  // Fetch products based on filters
  useEffect(() => {
    setIsLoading(true);

    // Build query string
    const queryParams = new URLSearchParams();
    if (categoryParam) queryParams.append("category", categoryParam);
    if (searchParam) queryParams.append("search", searchParam);
    if (pageParam > 1) queryParams.append("page", pageParam.toString());
    if (sortParam !== "newest") queryParams.append("sort", sortParam);
    if (minPriceParam) queryParams.append("minPrice", minPriceParam);
    if (maxPriceParam) queryParams.append("maxPrice", maxPriceParam);
    if (colorParam) queryParams.append("color", colorParam);
    if (sizeParam) queryParams.append("size", sizeParam);

    // Fetch products
    fetch(`/api/products?${queryParams.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotalProducts(data.total || 0);
        setTotalPages(data.totalPages || 1);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setIsLoading(false);

        // Mock data for preview
        setProducts(
          [...Array(12)].map((_, i) => ({
            _id: i.toString(),
            name: `Sample Product ${i + 1}`,
            price: 19.99 + i * 10,
            category: i % 2 === 0 ? "Men" : "Women",
            images: ["/placeholder.svg?height=300&width=300"],
          }))
        );
        setTotalProducts(50);
        setTotalPages(5);
      });

    // Fetch categories
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setCategories(["Men", "Women", "Accessories", "Footwear"]);
      });
  }, [
    categoryParam,
    searchParam,
    pageParam,
    sortParam,
    minPriceParam,
    maxPriceParam,
    colorParam,
    sizeParam,
  ]);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    updateFilters({ search: searchValue, page: "1" });
  };

  // Handle filter changes
  const updateFilters = (newFilters) => {
    const queryParams = new URLSearchParams();

    // Current filters
    if (categoryParam && !("category" in newFilters))
      queryParams.append("category", categoryParam);
    if (searchParam && !("search" in newFilters))
      queryParams.append("search", searchParam);
    if (sortParam !== "newest" && !("sort" in newFilters))
      queryParams.append("sort", sortParam);
    if (minPriceParam && !("minPrice" in newFilters))
      queryParams.append("minPrice", minPriceParam);
    if (maxPriceParam && !("maxPrice" in newFilters))
      queryParams.append("maxPrice", maxPriceParam);
    if (colorParam && !("color" in newFilters))
      queryParams.append("color", colorParam);
    if (sizeParam && !("size" in newFilters))
      queryParams.append("size", sizeParam);
    if (pageParam > 1 && !("page" in newFilters))
      queryParams.append("page", pageParam.toString());

    // New filters
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    // Update URL
    router.push(`/products?${queryParams.toString()}`);
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    updateFilters({ page: newPage.toString() });
    window.scrollTo(0, 0);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchValue("");
    setSelectedCategory("");
    setSelectedSort("newest");
    setSelectedColor("");
    setSelectedSize("");
    setMinPrice("");
    setMaxPrice("");
    router.push("/products");
  };

  // Clear individual filter
  const clearFilter = (filterName) => {
    const newFilters = { page: "1" };
    newFilters[filterName] = "";
    updateFilters(newFilters);

    // Update local state
    if (filterName === "search") setSearchValue("");
    if (filterName === "category") setSelectedCategory("");
    if (filterName === "sort") setSelectedSort("newest");
    if (filterName === "minPrice") setMinPrice("");
    if (filterName === "maxPrice") setMaxPrice("");
    if (filterName === "color") setSelectedColor("");
    if (filterName === "size") setSelectedSize("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Header with breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="font-medium text-gray-900">Products</span>
            {categoryParam && (
              <>
                <span className="mx-2 text-gray-400">/</span>
                <span className="font-medium text-gray-900">
                  {categoryParam}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
          >
            <Filter className="h-5 w-5" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block md:w-64 lg:w-72`}
          >
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Filters</h2>
                {(categoryParam ||
                  searchParam ||
                  minPriceParam ||
                  maxPriceParam ||
                  colorParam ||
                  sizeParam ||
                  sortParam !== "newest") && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Search</h3>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <button type="submit" className="sr-only">
                    Search
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.length > 0 ? (
                    categories.map((category, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={
                            selectedCategory ===
                            (typeof category === "string"
                              ? category
                              : category.name)
                          }
                          onChange={() => {
                            const categoryValue =
                              typeof category === "string"
                                ? category
                                : category.name;
                            setSelectedCategory(categoryValue);
                            updateFilters({
                              category: categoryValue,
                              page: "1",
                            });
                          }}
                          className="mr-2"
                        />
                        <span>
                          {typeof category === "string"
                            ? category
                            : category.name}
                        </span>
                      </label>
                    ))
                  ) : (
                    <p className="text-gray-500">Loading categories...</p>
                  )}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <button
                  onClick={() =>
                    updateFilters({ minPrice, maxPrice, page: "1" })
                  }
                  className="mt-2 w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  Apply
                </button>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Colors</h3>
                <div className="grid grid-cols-3 gap-2">
                  {colors.map((color, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="color"
                        checked={selectedColor === color}
                        onChange={() => {
                          setSelectedColor(color);
                          updateFilters({ color, page: "1" });
                        }}
                        className="mr-2"
                      />
                      <span>{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Sizes</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="size"
                        checked={selectedSize === size}
                        onChange={() => {
                          setSelectedSize(size);
                          updateFilters({ size, page: "1" });
                        }}
                        className="mr-2"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product listing */}
          <div className="flex-1">
            {/* Active filters and sort */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Active filters */}
                <div className="flex flex-wrap gap-2">
                  {categoryParam && (
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      Category: {categoryParam}
                      <button
                        onClick={() => clearFilter("category")}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {searchParam && (
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      Search: {searchParam}
                      <button
                        onClick={() => clearFilter("search")}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {minPriceParam && (
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      Min Price: ${minPriceParam}
                      <button
                        onClick={() => clearFilter("minPrice")}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {maxPriceParam && (
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      Max Price: ${maxPriceParam}
                      <button
                        onClick={() => clearFilter("maxPrice")}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {colorParam && (
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      Color: {colorParam}
                      <button
                        onClick={() => clearFilter("color")}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {sizeParam && (
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      Size: {sizeParam}
                      <button
                        onClick={() => clearFilter("size")}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Sort dropdown */}
                <div className="flex items-center">
                  <label htmlFor="sort" className="text-sm font-medium mr-2">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={selectedSort}
                    onChange={(e) => {
                      setSelectedSort(e.target.value);
                      updateFilters({ sort: e.target.value, page: "1" });
                    }}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                    <option value="name_asc">Name: A to Z</option>
                    <option value="name_desc">Name: Z to A</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {products.length} of {totalProducts} products
              </p>
            </div>

            {/* Products grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, index) => (
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
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Link
                    href={`/products/${product._id}`}
                    key={index}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={
                            product.images?.[0] ||
                            `/placeholder.svg?height=300&width=300`
                          }
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium mb-1 group-hover:text-gray-700">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-2">
                          {product.category}
                        </p>
                        <p className="font-bold text-gray-900">
                          ${product.price?.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your filters or search term
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-1">
                  <button
                    onClick={() => handlePageChange(pageParam - 1)}
                    disabled={pageParam === 1}
                    className={`p-2 rounded-md ${
                      pageParam === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {[...Array(totalPages)].map((_, i) => {
                    const pageNumber = i + 1;
                    // Show first page, last page, current page, and pages around current page
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= pageParam - 1 &&
                        pageNumber <= pageParam + 1)
                    ) {
                      return (
                        <button
                          key={i}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-md ${
                            pageNumber === pageParam
                              ? "bg-gray-900 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      (pageNumber === 2 && pageParam > 3) ||
                      (pageNumber === totalPages - 1 &&
                        pageParam < totalPages - 2)
                    ) {
                      return (
                        <span key={i} className="px-1">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}

                  <button
                    onClick={() => handlePageChange(pageParam + 1)}
                    disabled={pageParam === totalPages}
                    className={`p-2 rounded-md ${
                      pageParam === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
