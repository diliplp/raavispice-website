'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'

interface InstagramEmbedProps {
    username: string
}

export default function InstagramEmbed({ username }: InstagramEmbedProps) {
    useEffect(() => {
        // Re-process Instagram embeds when the component mounts
        // @ts-ignore
        if (window.instgrm) {
            // @ts-ignore
            window.instgrm.Embeds.process()
        }
    }, [username])

    return (
        <div className="flex justify-center w-full min-h-[450px] bg-forest-green/20 rounded-xl p-4 md:p-8">
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`https://www.instagram.com/${username}/`}
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 13px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: 'calc(100% - 2px)',
                }}
            >
                <div style={{ padding: '16px' }}>
                    <a
                        href={`https://www.instagram.com/${username}/`}
                        style={{
                            background: '#FFFFFF',
                            lineHeight: '0',
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div
                                style={{
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: '50%',
                                    flexGrow: '0',
                                    height: '40px',
                                    marginRight: '14px',
                                    width: '40px',
                                }}
                            ></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                                <div
                                    style={{
                                        backgroundColor: '#F4F4F4',
                                        borderRadius: '4px',
                                        flexGrow: '0',
                                        height: '14px',
                                        marginBottom: '6px',
                                        width: '100px',
                                    }}
                                ></div>
                                <div
                                    style={{
                                        backgroundColor: '#F4F4F4',
                                        borderRadius: '4px',
                                        flexGrow: '0',
                                        height: '14px',
                                        width: '60px',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                            <svg
                                width="50px"
                                height="50px"
                                viewBox="0 0 60 60"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                {/* SVG path for Instagram icon */}
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                        <g transform="translate(511.000000, 20.000000)">
                                            <path d="M30,0 C13.431,0 0,13.431 0,30 C0,46.569 13.431,60 30,60 C46.569,60 60,46.569 60,30 C60,13.431 46.569,0 30,0 Z M30,54 C16.745,54 6,43.255 6,30 C6,16.745 16.745,6 30,6 C43.255,6 54,16.745 54,30 C54,43.255 43.255,54 30,54 Z M45,30 C45,38.284 38.284,45 30,45 C21.716,45 15,38.284 15,30 C15,21.716 21.716,15 30,15 C38.284,15 45,21.716 45,30 Z M30,19.2 C24.035,19.2 19.2,24.035 19.2,30 C19.2,35.965 24.035,40.8 30,40.8 C35.965,40.8 40.8,35.965 40.8,30 C40.8,24.035 35.965,19.2 30,19.2 Z M45,15 C46.657,15 48,13.657 48,12 C48,10.343 46.657,9 45,9 C43.343,9 42,10.343 42,12 C42,13.657 43.343,15 45,15 Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                            <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: '550', lineHeight: '18px' }}>
                                View Profile
                            </div>
                        </div>
                    </a>
                </div>
            </blockquote>
            <Script
                src="//www.instagram.com/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // @ts-ignore
                    if (window.instgrm) {
                        // @ts-ignore
                        window.instgrm.Embeds.process()
                    }
                }}
            />
        </div>
    )
}
