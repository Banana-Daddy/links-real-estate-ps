// 21st.dev source: ProfileCard (agent bio page)
// Query: "team member cards portrait editorial"
// Picked: ProfileCard with large square image + overlapping card pattern
// Saved: 2026-04-21 for Links Real Estate PS
// Borrowed pattern: desktop — large square portrait + overlapping offset card with bio and social row; mobile — stacked aspect-square + centered card
// Translated to vanilla HTML + Tailwind CDN for Axel's dedicated bio page

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Youtube, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const { name, title, description, imageUrl, githubUrl, twitterUrl, youtubeUrl, linkedinUrl, className } = props;

  const socialIcons = [
    { icon: Github, url: githubUrl, label: "GitHub" },
    { icon: Twitter, url: twitterUrl, label: "Twitter" },
    { icon: Youtube, url: youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      <div className='hidden md:flex relative items-center'>
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center'>
          <Image src={imageUrl} alt={name} width={470} height={470} className='w-full h-full object-cover' draggable={false} priority />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'
        >
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>{name}</h2>
          <p className='text-sm font-medium text-gray-700 dark:text-gray-500'>{title}</p>
          <p className='text-black dark:text-white text-base leading-relaxed mb-8'>{description}</p>
          <div className='flex space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Link key={label} href={url} target='_blank' rel='noopener noreferrer' className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105' aria-label={label}>
                <Icon className='w-5 h-5 text-white dark:text-gray-900' />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
