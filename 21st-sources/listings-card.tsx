// 21st.dev source: PropertyCard
// Query: "property listings cards real estate"
// Picked: PropertyCard (card-3 variant) — group hover scale image zoom, clean content layout, motion/framer animation
// Saved: 2026-04-21 for Links Real Estate PS
// Borrowed pattern: group hover image scale-110, aspect ratio image frame, forwarded ref, stacked content with price emphasis
// Translated to vanilla HTML + Tailwind CDN for the site

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  imageAlt?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const PropertyCard = React.forwardRef<HTMLDivElement, PropertyCardProps>(
  ({ className, imageUrl, name, location, price, rating, reviews, imageAlt = "Property Image", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("group w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg", className)}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.03, y: -5 }}
        {...props}
      >
        <div className="overflow-hidden">
          <img src={imageUrl} alt={imageAlt} className="h-60 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
        </div>
        <div className="space-y-3 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
            <p className="text-lg font-bold text-primary">
              ${price}
              <span className="text-sm font-normal text-muted-foreground"> /Night</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
              <span className="font-medium text-foreground">{rating}</span>
              <span>({reviews.toLocaleString()} Reviews)</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";
export { PropertyCard };
