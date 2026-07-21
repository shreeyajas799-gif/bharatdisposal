import type { FAQItem, GalleryImage, Highlight, ProductCategory, Testimonial } from "@/types";

export const businessInfo = {
  name: "Bharat Disposal",
  owner: "Mr. Adarsh Jaiswal",
  tagline: "Complete Disposable Solutions for Every Occasion",
  address: "Alfsteenganj, In Front of Head Post Office, Jaunpur, Uttar Pradesh, India",
  phoneNumbers: ["+91 9616919294", "+91 7007259564"],
  hours: "Monday - Sunday • 9:00 AM - 9:00 PM",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Bharat+Disposal+Jaunpur+Uttar+Pradesh",
};

export const products: ProductCategory[] = [
  { title: "CRYSTLE Mineral Water Cups", description: "Premium branded disposable cups for packaged drinking water with added minerals. Perfect for water dispensers and retail outlets.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyjwdw8HXv9-r7Ocloa77xPW0Nb7mrL-R8FT-ZZMNmw&s=10" },
  { title: "Paper Cups", description: "Premium single-use paper cups for tea, coffee, and cold beverages. Durable and eco-friendly.", image: "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/disposables/paper-cups/FUR.PAP.233503492_1749810358373.webp" },
  { title: "Tea Cups", description: "Disposable tea cups perfect for busy service counters and tea stalls. Durable and affordable.", image: "https://tiimg.tistatic.com/fp/1/008/896/plastic-tea-cups-972.jpg" },
  { title: "Paper Plates", description: "Strong and attractive disposable paper plates for catering and events.", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQq9zzysXdmVO6cjb_RMqY1Qme49Pxy42rtCQ0zJKv46EVPcFo4VAVpyBihCAYxU0VgL0veWScVYdfPD8gLNciZnCJpo1qrpXnhIM23FpizogwDwOchPz9uWKO0R6hBAko77VcRnPTpB-I&usqp=CAc" },
  { title: "Food Packaging Boxes", description: "Reliable disposable boxes for restaurants, cloud kitchens, and food delivery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0gby5_9OxiEhTBIh-6rJwa2kSomhx_l0mxgxVVCYEg&s=10" },
  { title: "Tissue Paper", description: "Soft and hygienic disposable tissue rolls for hospitality and daily use.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMBDxgDPLU7_QskQavVlf_MB_tdTwWq4b7v21ib3CXQ&s=10" },
];

export const highlights: Highlight[] = [
  { title: "Premium Quality Products", description: "Selected for strength, finish, and consistent performance.", icon: "Sparkles" },
  { title: "Affordable Wholesale Prices", description: "Competitive pricing for wholesalers and retail buyers alike.", icon: "BadgePercent" },
  { title: "Retail & Bulk Orders", description: "Flexible order sizes for small shops and large events.", icon: "Boxes" },
  { title: "Trusted Local Business", description: "A dependable supplier rooted in the Jaunpur community.", icon: "ShieldCheck" },
  { title: "Wide Product Variety", description: "Everything from cups and plates to packaging and cutlery.", icon: "Layers3" },
  { title: "Timely Delivery", description: "Fast service that keeps your operations running smoothly.", icon: "Truck" },
  { title: "Friendly Customer Support", description: "Prompt guidance for product selection and order planning.", icon: "Headphones" },
  { title: "Reliable Service", description: "Consistent quality and customer-first support every time.", icon: "Handshake" },
];

export const servedFor = [
  "Restaurants",
  "Hotels",
  "Tea Shops",
  "Cafes",
  "Street Food Vendors",
  "Catering Services",
  "Wedding Events",
  "Birthday Parties",
  "Corporate Offices",
  "Schools",
  "Colleges",
  "Households",
];

export const galleryImages: GalleryImage[] = [
  { title: "CRYSTLE Mineral Water Cups", image: "https://images.unsplash.com/photo-1608270861620-7c38b15fd387?auto=format&fit=crop&w=900&q=80", category: "Drinkware" },
  { title: "Paper Cups", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80", category: "Cups" },
  { title: "Tea & Coffee Cups", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80", category: "Drinkware" },
  { title: "Plastic Containers", image: "https://images.unsplash.com/photo-1585432760694-d7f3f6d2a15d?auto=format&fit=crop&w=900&q=80", category: "Containers" },
  { title: "Wooden Cutlery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80", category: "Cutlery" },
  { title: "Plastic Plates & Bowls", image: "https://images.unsplash.com/photo-1578926314433-ed2fc6a32937?auto=format&fit=crop&w=900&q=80", category: "Plates" },
  { title: "Packaging Boxes", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80", category: "Packaging" },
  { title: "Carry Bags", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80", category: "Bags" },
];

export const testimonials: Testimonial[] = [
  { name: "Ravi Verma", role: "Hotel Owner", message: "Excellent quality and dependable supply. Bharat Disposal has become our go-to supplier for all disposable needs.", rating: 5 },
  { name: "Anita Sharma", role: "Caterer", message: "Their wholesale pricing and fast service helped us manage large wedding events smoothly.", rating: 5 },
  { name: "Mohit Gupta", role: "Tea Stall Owner", message: "Premium cups and plates at very reasonable rates. The support team is always responsive.", rating: 5 },
  { name: "Poonam Singh", role: "Event Planner", message: "Beautiful presentation, excellent durability, and timely delivery every single time.", rating: 5 },
  { name: "Aman Yadav", role: "Office Admin", message: "We trust Bharat Disposal for daily office supplies and special event orders.", rating: 5 },
  { name: "Sana Khan", role: "Sweet Shop Owner", message: "Consistent quality and a wide range of products made our work easier.", rating: 5 },
];

export const faqItems: FAQItem[] = [
  { question: "Do you provide wholesale pricing?", answer: "Yes. We offer competitive wholesale pricing for small outlets and large bulk buyers alike." },
  { question: "Do you accept bulk orders?", answer: "Absolutely. We handle bulk orders for weddings, catering, offices, hotels, and retailers." },
  { question: "Can I order through WhatsApp?", answer: "Yes. You can contact us on either phone number or via WhatsApp for quick quotations and order placement." },
  { question: "Do you provide delivery?", answer: "Yes. We provide delivery support for orders across the region and can coordinate based on your location and volume." },
  { question: "What products are available?", answer: "We stock paper cups, plastic cutlery, aluminium containers, food packaging, carry bags, and many other disposable essentials." },
];
