import firstImg from "@/assets/images/2.jpg";
import secondImg from "@/assets/images/3.jpg";
import thirdImg from "@/assets/images/4.jpg";
import fourthImg from "@/assets/images/5.jpg";
import fifthImg from "@/assets/images/6.jpg";
import sixthImg from "@/assets/images/7.jpg";
import { ArticleCardProps } from "@/components/ArticleCard";

export const sampleArticles: ArticleCardProps[] = [
  {
    title: "Essential Gear for Your First Backpacking Trip",
    description:
      "Discover the must-have items that every beginner backpacker needs before hitting the trail. From choosing the right backpack to selecting appropriate footwear, this guide covers all the essentials.",
    imageUrl: firstImg.src,
    articleUrl: "/articles/essential-backpacking-gear",
    date: "",
  },
  {
    title: "10 Breathtaking Backpacking Destinations in Southeast Asia",
    description:
      "Explore the hidden gems of Southeast Asia that offer unforgettable backpacking experiences. From pristine beaches to ancient temples, these destinations promise adventure on a budget.",
    imageUrl: secondImg.src,
    articleUrl: "/articles/southeast-asia-backpacking",
    date: "",
  },
  {
    title: "How to Pack Light: Tips for Minimalist Backpacking",
    description:
      "Learn the art of traveling light with our comprehensive guide to minimalist backpacking. Reduce weight, save space, and make your journey more enjoyable with these expert packing tips.",
    imageUrl: thirdImg.src,
    articleUrl: "/articles/minimalist-backpacking",
    date: "",
  },
  {
    title: "Budget Backpacking: See the World Without Breaking the Bank",
    description:
      "Discover how to travel extensively on a limited budget. From finding affordable accommodations to eating like a local, these money-saving strategies will help extend your backpacking adventure.",
    imageUrl: fourthImg.src,
    articleUrl: "/articles/budget-backpacking",
    date: "",
  },
  {
    title: "Solo Backpacking Safety: Essential Tips for Traveling Alone",
    description:
      "Stay safe while enjoying the freedom of solo backpacking with these crucial safety tips. Learn how to prepare, stay connected, and handle unexpected situations when traveling by yourself.",
    imageUrl: fifthImg.src,
    articleUrl: "/articles/solo-backpacking-safety",
    date: "",
  },
  {
    title: "Wilderness Backpacking: Surviving and Thriving Off the Grid",
    description:
      "Prepare for remote backpacking adventures with this guide to wilderness survival. Master navigation skills, learn about wildlife safety, and discover how to enjoy nature responsibly.",
    imageUrl: sixthImg.src,
    articleUrl: "/articles/wilderness-backpacking",
    date: "",
  },
];
