export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const id = searchParams.get("id")

    if (!category) {
      return Response.json({ error: "Category is required" }, { status: 400 })
    }

    // Mock data - in a real app, this would be fetched from MongoDB
    const allProducts = [
      {
        _id: "1",
        name: "Classic T-Shirt",
        price: 29.99,
        category: "Men",
        images: ["/placeholder.svg?height=300&width=300"],
      },
      {
        _id: "2",
        name: "Slim Fit Jeans",
        price: 59.99,
        category: "Men",
        images: ["/placeholder.svg?height=300&width=300"],
      },
      {
        _id: "3",
        name: "Summer Dress",
        price: 49.99,
        category: "Women",
        images: ["/placeholder.svg?height=300&width=300"],
      },
      {
        _id: "4",
        name: "Leather Wallet",
        price: 39.99,
        category: "Accessories",
        images: ["/placeholder.svg?height=300&width=300"],
      },
      {
        _id: "5",
        name: "Running Shoes",
        price: 89.99,
        category: "Footwear",
        images: ["/placeholder.svg?height=300&width=300"],
      },
      {
        _id: "6",
        name: "Hooded Sweatshirt",
        price: 45.99,
        category: "Men",
        images: ["/placeholder.svg?height=300&width=300"],
      },
    ]

    // Filter by category and exclude current product
    const relatedProducts = allProducts
      .filter((product) => product.category === category && product._id !== id)
      .slice(0, 4) // Limit to 4 related products

    return Response.json(relatedProducts)
  } catch (error) {
    console.error("Error fetching related products:", error)
    return Response.json({ error: "Failed to fetch related products" }, { status: 500 })
  }
}
