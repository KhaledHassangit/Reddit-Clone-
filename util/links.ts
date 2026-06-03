import { Flame, Home, LayoutGrid } from "lucide-react";

export const nav = [
    { href: "/", label: "Home", icon: Home, match: "home" as const },
    { href: "/?sort=hot", label: "Popular", icon: Flame, match: "hot" as const },
    {
        href: "/?sort=new",
        label: "All Posts",
        icon: LayoutGrid,
        match: "new" as const,
    },
];