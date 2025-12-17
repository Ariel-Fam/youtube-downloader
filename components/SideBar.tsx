// components/SideBar.tsx

"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarGroup,
} from "@/components/ui/sidebar"

import Image from "next/image"

import React, {useEffect, useState} from "react"

import SideBarCard from "./SideBardCard"
import Link from "next/link"

type Videos = {
    imgSrc?: string
    titleText?: string
    videoUrl?: string
    videoDescription?: string
}

function SideBar({imgSrc, titleText, videoUrl, videoDescription}: Videos) {
    const [videoItems, setVideoItems] = useState<Videos[]>([]);

    useEffect(() => {
      if (imgSrc && titleText && videoUrl) {
        setVideoItems([{ imgSrc, titleText, videoUrl, videoDescription }]);
      }
    }, [imgSrc, titleText, videoUrl, videoDescription]);

    return ( 
        <Sidebar className="border-sidebar-border bg-sidebar text-sidebar-foreground border-r">
            <SidebarHeader>
                <div className="flex flex-col items-center gap-2 pb-2 text-center">
                  <Image
                      src="/space_pointer.png"
                      alt="Vidlab Logo"
                      height={160}
                      width={160}
                      quality={99}
                      className="h-24 w-24 md:h-28 md:w-28 object-contain drop-shadow"
                  />
                  <h1 className="text-2xl md:text-3xl font-semibold">Downloads</h1>
                  <p className="text-sm text-sidebar-foreground/70">Your saved downloads stay in sync here.</p>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2 pb-4">
                <SidebarGroup className="space-y-3">
                  {videoItems.length === 0 ? (
                    <p className="text-sm text-sidebar-foreground/70 px-2">
                      Submit a video ID to see available downloads here.
                    </p>
                  ) : (
                    videoItems.map((video, index) =>(
                      <div key={index}>
                        {/* Encode URL components to handle special characters */}
                        <Link 
                          href={`/vids/${encodeURIComponent(video.videoUrl || '')}/${encodeURIComponent(video.titleText || '')}/${encodeURIComponent(video.videoDescription || '')}`}
                        >
                          <SideBarCard
                            titleText={video.titleText}
                            imgSrc={video.imgSrc}
                          />
                        </Link>
                      </div>
                    ))
                  )}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
     );
}

export default SideBar;

