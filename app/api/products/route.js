export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const sort = searchParams.get("sort") || "newest"
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const color = searchParams.get("color")
    const size = searchParams.get("size")
    const limit = 12

    // Mock data - in a real app, this would be fetched from MongoDB
    const allProducts = [
      {
        _id: "1",
        name: "Classic T-Shirt",
        price: 29.99,
        description: "Comfortable cotton t-shirt for everyday wear.",
        category: "Men",
        colors: ["Black", "White", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: true,
        date: "2023-05-15",
      },
      {
        _id: "2",
        name: "Slim Fit Jeans",
        price: 59.99,
        description: "Modern slim fit jeans with stretch fabric for comfort.",
        category: "Men",
        colors: ["Blue", "Black"],
        sizes: ["30", "32", "34", "36"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-06-20",
      },
      {
        _id: "3",
        name: "Summer Dress",
        price: 49.99,
        description: "Light and flowy summer dress perfect for warm days.",
        category: "Women",
        colors: ["Red", "Yellow", "White"],
        sizes: ["XS", "S", "M", "L"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: true,
        date: "2023-04-10",
      },
      {
        _id: "4",
        name: "Leather Wallet",
        price: 39.99,
        description: "Genuine leather wallet with multiple card slots.",
        category: "Accessories",
        colors: ["Brown", "Black"],
        sizes: [],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-07-05",
      },
      {
        _id: "5",
        name: "Running Shoes",
        price: 89.99,
        description: "Lightweight running shoes with cushioned soles.",
        category: "Footwear",
        colors: ["Black", "Blue", "Red"],
        sizes: ["7", "8", "9", "10", "11"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: true,
        date: "2023-03-25",
      },
      {
        _id: "6",
        name: "Hooded Sweatshirt",
        price: 45.99,
        description: "Warm and comfortable hooded sweatshirt for casual wear.",
        category: "Men",
        colors: ["Gray", "Black", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-08-12",
      },
      {
        _id: "7",
        name: "Denim Jacket",
        price: 79.99,
        description: "Classic denim jacket that never goes out of style.",
        category: "Women",
        colors: ["Blue"],
        sizes: ["XS", "S", "M", "L"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-09-01",
      },
      {
        _id: "8",
        name: "Sunglasses",
        price: 29.99,
        description: "UV protection sunglasses with stylish frames.",
        category: "Accessories",
        colors: ["Black", "Brown"],
        sizes: [],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: true,
        date: "2023-06-15",
      },
      {
        _id: "9",
        name: "Casual Sneakers",
        price: 69.99,
        description: "Comfortable casual sneakers for everyday wear.",
        category: "Footwear",
        colors: ["White", "Black", "Gray"],
        sizes: ["7", "8", "9", "10", "11"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-07-20",
      },
      {
        _id: "10",
        name: "Formal Shirt",
        price: 54.99,
        description: "Crisp formal shirt for professional settings.",
        category: "Men",
        colors: ["White", "Blue", "Pink"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-05-05",
      },
      {
        _id: "11",
        name: "Pleated Skirt",
        price: 39.99,
        description: "Elegant pleated skirt for a sophisticated look.",
        category: "Women",
        colors: ["Black", "Navy", "Gray"],
        sizes: ["XS", "S", "M", "L"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-08-05",
      },
      {
        _id: "12",
        name: "Leather Belt",
        price: 34.99,
        description: "Genuine leather belt with classic buckle.",
        category: "Accessories",
        colors: ["Brown", "Black"],
        sizes: ["S", "M", "L"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-04-25",
      },
      {
        _id: "13",
        name: "Winter Boots",
        price: 99.99,
        description: "Waterproof winter boots with warm lining.",
        category: "Footwear",
        colors: ["Black", "Brown"],
        sizes: ["7", "8", "9", "10", "11"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-09-15",
      },
      {
        _id: "14",
        name: "Polo Shirt",
        price: 34.99,
        description: "Classic polo shirt for a smart casual look.",
        category: "Men",
        colors: ["Blue", "Red", "Black", "White"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-06-10",
      },
      {
        _id: "15",
        name: "Floral Blouse",
        price: 42.99,
        description: "Elegant floral blouse for a feminine look.",
        category: "Women",
        colors: ["White", "Pink", "Blue"],
        sizes: ["XS", "S", "M", "L"],
        images: ["/placeholder.svg?height=300&width=300"],
        inStock: true,
        featured: false,
        date: "2023-07-10",
      },
    ]

    // Filter products
    let filteredProducts = [...allProducts]

    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    if (search) {
      const searchLower = search.toLowerCase()
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
      )
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price >= Number.parseFloat(minPrice))
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price <= Number.parseFloat(maxPrice))
    }

    if (color) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors.some((c) => c.toLowerCase() === color.toLowerCase()),
      )
    }

    if (size) {
      filteredProducts = filteredProducts.filter((product) =>
        product.sizes.some((s) => s.toLowerCase() === size.toLowerCase()),
      )
    }

    // Sort products
    switch (sort) {
      case "price_low":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price_high":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "name_asc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name_desc":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
        break
      default: // newest
        filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    // Paginate
    const total = filteredProducts.length
    const totalPages = Math.ceil(total / limit)
    const offset = (page - 1) * limit
    const paginatedProducts = filteredProducts.slice(offset, offset + limit)

    return Response.json({
      products: paginatedProducts,
      total,
      totalPages,
      currentPage: page,
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    return Response.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
