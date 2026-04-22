'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'

interface TikTokEmbedProps {
    username: string
}

export default function TikTokEmbed({ username }: TikTokEmbedProps) {
    useEffect(() => {
        // Re-process TikTok embeds when the component mounts or username changes
        // @ts-ignore
        if (window.tiktok && window.tiktok.embed) {
            // @ts-ignore
            window.tiktok.embed.lib.render()
        }
    }, [username])

    return (
        <div className="flex justify-center w-full min-h-[600px] bg-forest-green/20 rounded-xl p-4 md:p-8">
            <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@${username}`}
                data-unique-id={username}
                data-embed-type="creator"
                style={{ maxWidth: '780px', minWidth: '288px' }}
            >
                <section>
                    <a target="_blank" href={`https://www.tiktok.com/@${username}?refer=creator_embed`}>
                        @{username}
                    </a>
                </section>
            </blockquote>
            <Script
                src="https://www.tiktok.com/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // @ts-ignore
                    if (window.tiktok && window.tiktok.embed) {
                        // @ts-ignore
                        window.tiktok.embed.lib.render()
                    }
                }}
            />
        </div>
    )
}
