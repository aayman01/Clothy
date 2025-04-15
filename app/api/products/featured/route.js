export async function GET() {
  try {
    // Mock data - in a real app, this would be fetched from MongoDB
    const featuredProducts = [
      {
        _id: "1",
        name: "Classic T-Shirt",
        price: 29.99,
        description: "Comfortable cotton t-shirt for everyday wear.",
        category: "Men",
        images: ["/placeholder.svg?height=300&width=300"],
        featured: true,
      },
      {
        _id: "3",
        name: "Summer Dress",
        price: 49.99,
        description: "Light and flowy summer dress perfect for warm days.",
        category: "Women",
        images: ["/placeholder.svg?height=300&width=300"],
        featured: true,
      },
      {
        _id: "5",
        name: "Running Shoes",
        price: 89.99,
        description: "Lightweight running shoes with cushioned soles.",
        category: "Footwear",
        images: ["/placeholder.svg?height=300&width=300"],
        featured: true,
      },
      {
        _id: "8",
        name: "Sunglasses",
        price: 29.99,
        description: "UV protection sunglasses with stylish frames.",
        category: "Accessories",
        images: ["/placeholder.svg?height=300&width=300"],
        featured: true,
      },
    ]

    return Response.json(featuredProducts)
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return Response.json({ error: "Failed to fetch featured products" }, { status: 500 })
  }
}
