'use client';

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Settings,
  HelpCircle,
  Bug,
  HistoryIcon,
  BookmarkIcon,
  NotebookTextIcon,
  GlobeIcon,
  StepForwardIcon,
  HomeIcon,
} from 'lucide-react';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';
import Image from 'next/image';
import { NavPrimary } from './nav-primary';
import logoImage from '@/public/logo.png';

const data = {
  navMain: [
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: <TerminalSquareIcon />,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: <BotIcon />,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: <BookOpenIcon />,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: <Settings2Icon />,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  secondary: [
    {
      title: 'Settings',
      url: '#',
      icon: <Settings />,
    },
    {
      title: 'Help',
      url: '#',
      icon: <HelpCircle />,
    },
    {
      title: 'Bug Report',
      url: '#',
      icon: <Bug />,
    },
  ],
  primary: [
    {
      title: 'Home',
      url: '#',
      icon: <HomeIcon />,
    },
    {
      title: 'Continue Watching',
      url: '#',
      icon: <StepForwardIcon />,
    },
    {
      title: 'Browse',
      url: '#',
      icon: <GlobeIcon />,
    },
    {
      title: 'My Notes',
      url: '#',
      icon: <NotebookTextIcon />,
    },
    {
      title: 'Bookmarks',
      url: '#',
      icon: <BookmarkIcon />,
    },
    {
      title: 'Recently Watched',
      url: '#',
      icon: <HistoryIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <Image src={logoImage} alt="HikmaPlay Logo" className="size-8" />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">HikmaPlay</span>
                  <span className="truncate text-xs">Learn Islam with Easy!</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavPrimary items={data.primary} />
        <NavSecondary items={data.secondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
