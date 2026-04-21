// 21st.dev source: Floating Header
// Query: "nav sticky transparent minimal editorial"
// Picked: FloatingHeader — elegant sticky nav, rounded, backdrop-blur, pill-style, small logo, ghost links
// Saved: 2026-04-21 for Links Real Estate PS
// Borrowed pattern: sticky top-5 z-50, max-width pill, border + shadow, supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg
// Translated to vanilla HTML + Tailwind CDN for the site

import React from 'react';
import { Grid2x2PlusIcon, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ label: 'Features', href: '#' },
		{ label: 'Pricing', href: '#' },
		{ label: 'About', href: '#' },
	];

	return (
		<header
			className={cn(
				'sticky top-5 z-50',
				'mx-auto w-full max-w-3xl rounded-lg border shadow',
				'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
					<Grid2x2PlusIcon className="size-5" />
					<p className="font-mono text-base font-bold">Asme</p>
				</div>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a className={buttonVariants({ variant: 'ghost', size: 'sm' })} href={link.href}>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Button size="sm">Login</Button>
				</div>
			</nav>
		</header>
	);
}
