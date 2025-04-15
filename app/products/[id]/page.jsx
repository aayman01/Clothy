"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Star } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { id } = params

  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    // Fetch product details
    setIsLoading(true)

    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setIsLoading(false)

        // Set default selected options if available
        if (data.sizes && data.sizes.length > 0) {
          setSelectedSize(data.sizes[0])
        }
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0])
        }

        // Fetch related products
        return fetch(`/api/products/related?category=${data.category}&id=${id}`)
      })
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data || [])
      })
      .catch((err) => {
        console.error("Error fetching product:", err)
        setIsLoading(false)

        // Mock data for preview
        const mockProduct = {
          _id: id,
          name: "Sample Product",
          price: 49.99,
          description:
            "This is a sample product description. This product is made with high-quality materials and designed for comfort and style.",
          category: "Men",
          images: [
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
          ],
          sizes: ["S", "M", "L", "XL"],
          colors: ["Black", "White", "Blue"],
          inStock: true,
          rating: 4.5,
          reviews: 12,
        }
        setProduct(mockProduct)
        setSelectedSize(mockProduct.sizes[0])
        setSelectedColor(mockProduct.colors[0])

        // Mock related products
        setRelatedProducts(
          [...Array(4)].map((_, i) => ({
            _id: `related-${i}`,
            name: `Related Product ${i + 1}`,
            price: 29.99 + i * 10,
            category: mockProduct.category,
            images: ["/placeholder.svg?height=300&width=300"],
          })),
        )
      })
  }, [id])

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }

    // Add to cart logic
    console.log("Adding to cart:", {
      productId: id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
    })

    // Navigate to cart page
    router.push("/cart")
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return
    setQuantity(newQuantity)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-black">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link
          href="/products"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">
              Products
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/products?category=${product.category}`} className="text-gray-500 hover:text-gray-700">
              {product.category}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="font-medium text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="relative h-96 bg-white rounded-lg overflow-hidden mb-4">
              <Image
                src={product.images?.[selectedImage] || "/placeholder.svg?height=600&width=600"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            {product.images && product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? "border-gray-900" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=100&width=100"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center mb-4">
              {product.rating && (
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviews || 0} reviews)
                  </span>
                </div>
              )}
            </div>

            <p className="text-2xl font-bold mb-6">${product.price?.toFixed(2)}</p>

            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color: {selectedColor}</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === color ? "border-gray-900" : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === "white" ? "1px solid #e5e7eb" : "",
                      }}
                      aria-label={color}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium">Size: {selectedSize}</h3>
                  <button className="text-sm text-gray-600 underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-md border ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 hover:border-gray-900"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number.parseInt(e.target.value) || 1)}
                  className="w-12 h-10 text-center border-x border-gray-300 focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition duration-300 flex items-center justify-center gap-2"
                disabled={!product.inStock}
              >
                <ShoppingBag className="h-5 w-5" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
              <button className="sm:w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-900 transition duration-300">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Product Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">SKU</p>
                  <p>{product.sku || `SKU-${id.slice(0, 8)}`}</p>
                </div>
                <div>
                  <p className="text-gray-500">Category</p>
                  <p>{product.category}</p>
                </div>
                <div>
                  <p className="text-gray-500">Tags</p>
                  <p>{product.tags?.join(", ") || "Fashion, Clothing"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Availability</p>
                  <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="border-b-2 border-gray-900 py-4 px-1 text-sm font-medium text-gray-900">
                Description
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Additional Information
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Reviews ({product.reviews || 0})
              </button>
            </nav>
          </div>
          <div className="py-6">
            <div className="prose max-w-none">
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <h3>Features</h3>
              <ul>
                <li>High-quality fabric</li>
                <li>Comfortable fit</li>
                <li>Durable construction</li>
                <li>Easy to care for</li>
                <li>Versatile style</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <Link href={`/products/${product._id}`} key={index} className="group">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={product.images?.[0] || `/placeholder.svg?height=300&width=300`}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-1 group-hover:text-gray-700">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                      <p className="font-bold text-gray-900">${product.price?.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
