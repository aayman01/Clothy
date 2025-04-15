export async function GET(request, { params }) {
  try {
    const { id } = params

    // Mock data - in a real app, this would be fetched from MongoDB
    const products = [
      {
        _id: "1",
        name: "Classic T-Shirt",
        price: 29.99,
        description:
          "Comfortable cotton t-shirt for everyday wear. Made with 100% organic cotton that is soft on the skin and environmentally friendly. This versatile piece can be dressed up or down for any occasion.",
        category: "Men",
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        images: [
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
        ],
        inStock: true,
        featured: true,
        date: "2023-05-15",
        rating: 4.5,
        reviews: 24,
      },
      {
        _id: "2",
        name: "Slim Fit Jeans",
        price: 59.99,
        description:
          "Modern slim fit jeans with stretch fabric for comfort. These jeans are designed to move with you while maintaining their shape throughout the day. Perfect for casual outings or semi-formal events.",
        category: "Men",
        colors: ["Blue", "Black"],
        sizes: ["30", "32", "34", "36"],
        images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
        inStock: true,
        featured: false,
        date: "2023-06-20",
        rating: 4.2,
        reviews: 18,
      },
      {
        _id: "3",
        name: "Summer Dress",
        price: 49.99,
        description:
          "Light and flowy summer dress perfect for warm days. This dress features a flattering silhouette and breathable fabric that keeps you cool even on the hottest days. Pair with sandals for a complete summer look.",
        category: "Women",
        colors: ["Red", "Yellow", "White"],
        sizes: ["XS", "S", "M", "L"],
        images: [
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
          "/placeholder.svg?height=600&width=600",
        ],
        inStock: true,
        featured: true,
        date: "2023-04-10",
        rating: 4.7,
        reviews: 32,
      },
    ]

    const product = products.find((p) => p._id === id)

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 })
    }

    return Response.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return Response.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}
