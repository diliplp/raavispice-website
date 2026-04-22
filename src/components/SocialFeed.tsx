'use client'

import { useState } from 'react'
import { Instagram, Facebook } from 'lucide-react'
import TikTokIcon from './TikTokIcon'
import ScrollReveal from './ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'

// Social media posts data
const instagramPosts = [
    {
        id: 'ig-1',
        image: '/images/instafeed/lahore-to-you.jpg',
        caption: 'If you can’t go to Lahore, let Lahore come to you.',
        link: 'https://www.instagram.com/p/DTyRcXqjexF/',
    },
    {
        id: 'ig-2',
        image: '/images/instafeed/booming-onion.jpg',
        caption: 'this Blooming Onion is almost ready to steal the spotlight',
        link: 'https://www.instagram.com/p/DTVuCenjb_c/',
    },
    {
        id: 'ig-3',
        image: '/images/instafeed/2026.jpg',
        caption: 'A new year, a new journey, and flavours worth waiting for. Your favourite restaurant is coming soon. 🔥',
        link: 'https://www.instagram.com/p/DS7hTFQjSM7/',
    },
    {
        id: 'ig-4',
        image: '/images/instafeed/palak%20gosht.jpg',
        caption: 'That same daig-style palak gosht, usually found only at Punjabi weddings',
        link: 'https://www.instagram.com/p/DS21hfoDRen/',
    },
    {
        id: 'ig-5',
        image: '/images/instafeed/raavi%20okra%20fries.jpg',
        caption: 'Raavi Okra Fries - A new flavour story by Raavi Spice',
        link: 'https://www.instagram.com/p/DSp9_Bzjabz/',
    },
    {
        id: 'ig-6',
        image: '/images/instafeed/kunna.jpg',
        caption: 'Real Chinioti Kunna in the UK? Almost impossible to find… until now.💁♀️ Raavi Spice is bringing you the true, traditional, slow-cooked Kunna the kind you only get in the heart of Chiniot.',
        link: 'https://www.instagram.com/p/DRXlSyjDW3A/',
    },
]

const tiktokPosts = [
    {
        id: 'tt-1',
        image: '/images/instafeed/kunna.jpg',
        caption: 'Wait for the sizzle! Our signature karahi is a must-try. #raavispice #pakistanifood',
        link: 'https://www.tiktok.com/@raavispiceofficial/video/7575624041193655574',
    },
    {
        id: 'tt-2',
        image: '/images/instafeed/raavi%20okra%20fries.jpg',
        caption: 'POV: You just entered the best Pakistani restaurant in London. ✨ #londonfood #hiddengem',
        link: 'https://www.tiktok.com/@raavispiceofficial/video/7587501416718126358',
    },
    {
        id: 'tt-3',
        image: '/images/instafeed/palak%20gosht.jpg',
        caption: 'Chef in action! 👨‍🍳 The secret behind our authentic spices. #chefslife #tradition',
        link: 'https://www.tiktok.com/@raavispiceofficial/video/7589342165914946838',
    },
    {
        id: 'tt-4',
        image: '/images/instafeed/2026.jpg',
        caption: 'Sunday family lunch at Raavi Spice. ❤️ Book your table now! #familytime #foodie',
        link: 'https://www.tiktok.com/@raavispiceofficial/video/7590081616282701078',
    },
    {
        id: 'tt-5',
        image: '/images/instafeed/booming-onion.jpg',
        caption: 'Fresh tandoori roti coming right up! 🫓 #tandoor #freshlybaked',
        link: 'https://www.tiktok.com/@raavispiceofficial/video/7593794610330111254',
    },
    {
        id: 'tt-6',
        image: '/images/instafeed/lahore-to-you.jpg',
        caption: 'Experience the true taste of Lahore. 🇵🇰 #lahorefood #raavispice',
        link: 'https://www.tiktok.com/@raavispiceofficial/video/7598985723689078038',
    },
]

const facebookPosts = [
    {
        id: 'fb-1',
        image: '/images/instafeed/lahore-to-you.jpg',
        caption: 'If you can’t go to Lahore, let Lahore come to you.💁‍♀️',
        link: 'https://www.facebook.com/reel/1435364904665199',
    },
    {
        id: 'fb-2',
        image: '/images/instafeed/booming-onion.jpg',
        caption: 'Get ready… this Blooming Onion is almost ready to steal the spotlight 😍',
        link: 'https://www.facebook.com/reel/817136451361814',
    },
    {
        id: 'fb-3',
        image: '/images/instafeed/2026.jpg',
        caption: '2026 tastes better already ✨ A new year, a new journey, and flavours worth waiting for.',
        link: 'https://www.facebook.com/reel/814428171647718',
    },
    {
        id: 'fb-4',
        image: '/images/instafeed/palak%20gosht.jpg',
        caption: 'That same daig-style palak gosht, usually found only at Punjabi weddings, is now on our menu. 💁‍♀️',
        link: 'https://www.facebook.com/reel/2761366344196777',
    },
    {
        id: 'fb-5',
        image: '/images/instafeed/raavi%20okra%20fries.jpg',
        caption: 'Raavi Okra Fries - A new flavour story by Raavi Spice',
        link: 'https://www.facebook.com/reel/1515579649541210',
    },
    {
        id: 'fb-6',
        image: '/images/instafeed/kunna.jpg',
        caption: 'Real Chinioti Kunna in the UK? Almost impossible to find… until now.💁‍♀️ Raavi Spice is bringing you the true, traditional, slow-cooked Kunna the kind you only get in the heart of Chiniot.',
        link: 'https://www.facebook.com/reel/1135277128676268',
    },
]

type Platform = 'instagram' | 'tiktok' | 'facebook'

export default function SocialFeed() {
    const [activePlatform, setActivePlatform] = useState<Platform>('instagram')

    const getPlatformData = () => {
        switch (activePlatform) {
            case 'instagram':
                return {
                    posts: instagramPosts,
                    name: 'Instagram',
                    link: 'https://www.instagram.com/raavispiceofficial/',
                    handle: '@raavispiceofficial',
                    icon: Instagram
                }
            case 'tiktok':
                return {
                    posts: tiktokPosts,
                    name: 'TikTok',
                    link: 'https://www.tiktok.com/@raavispiceofficial',
                    handle: '@raavispiceofficial',
                    icon: TikTokIcon
                }
            case 'facebook':
                return {
                    posts: facebookPosts,
                    name: 'Facebook',
                    link: 'https://www.facebook.com/profile.php?id=61577859524244',
                    handle: 'Raavi Spice',
                    icon: Facebook
                }
        }
    }

    const { posts, name: platformName, link: platformLink, handle, icon: Icon } = getPlatformData()

    return (
        <section className="section bg-deep-green overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Content */}
                <div className="flex flex-col items-center mb-12">
                    <ScrollReveal>
                        <h2 className="text-h2 text-antique-gold text-center mb-4">Follow Our Journey</h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <div className="flex p-1 bg-forest-green rounded-full mb-8 flex-wrap justify-center gap-1">
                            <button
                                onClick={() => setActivePlatform('instagram')}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${activePlatform === 'instagram'
                                    ? 'bg-antique-gold text-forest-green shadow-lg'
                                    : 'text-cream/60 hover:text-cream'
                                    }`}
                            >
                                <Instagram size={18} />
                                <span className="font-medium">Instagram</span>
                            </button>
                            <button
                                onClick={() => setActivePlatform('tiktok')}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${activePlatform === 'tiktok'
                                    ? 'bg-antique-gold text-forest-green shadow-lg'
                                    : 'text-cream/60 hover:text-cream'
                                    }`}
                            >
                                <TikTokIcon size={18} />
                                <span className="font-medium">TikTok</span>
                            </button>
                            <button
                                onClick={() => setActivePlatform('facebook')}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${activePlatform === 'facebook'
                                    ? 'bg-antique-gold text-forest-green shadow-lg'
                                    : 'text-cream/60 hover:text-cream'
                                    }`}
                            >
                                <Facebook size={18} />
                                <span className="font-medium">Facebook</span>
                            </button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="text-center">
                            <a
                                href={platformLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-champagne-gold hover:text-antique-gold transition-colors group mb-2"
                            >
                                <Icon size={28} />
                                <span className="font-heading text-2xl">{handle}</span>
                            </a>
                            <p className="text-cream/70">Join our community for the latest updates and culinary inspiration</p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Feed Grid with Animation */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePlatform}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posts.map((post) => (
                                    <a
                                        key={post.id}
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative aspect-square overflow-hidden rounded-xl bg-forest-green/20"
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.caption}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 via-forest-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <div className="text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <p className="font-medium line-clamp-2">{post.caption}</p>
                                                <div className="flex items-center gap-2 mt-2 text-antique-gold text-sm font-bold">
                                                    <Icon size={16} />
                                                    <span>View on {platformName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Main CTA */}
                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-12">
                        <a
                            href={platformLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2 group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-antique-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <div className="relative z-10 flex items-center gap-2 group-hover:text-forest-green transition-colors duration-300">
                                <Icon size={18} />
                                <span>Follow us on {platformName}</span>
                            </div>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
