import { Metadata } from 'next'
import { ArrowRight, Users, Target, Zap, Heart, Shield, Globe } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
    title: 'About Us - rkivee',
    description: 'Learn about rkivee, our mission to empower creative professionals, and the team behind the innovative tools that are transforming the creative industry.',
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            About rkivee
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We're building the future of creative collaboration, one innovative tool at a time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6 lg:px-12 border-t border-gray-800">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed text-xl">
                                <p className='leading-relaxed'>
                                    It all started in our college film club's editing room. I was the lead, and while I loved the creative energy, the way we actually made anything was just… broken. We were a team of 20 people who were passionate about making videos, but we spent more time passing around hard drives than actually creating.
                                </p>
                                <p className='leading-relaxed'>
                                    One person would sort clips, then literally hand their entire laptop to the next person to build a timeline. That person would pass it on for effects, then sound, then color. The whole thing was a clunky relay race that ended with someone's high-powered PC chugging away for hours to render the final cut. We had so many cool ideas that just died on a hard drive somewhere because getting them done was too much of a headache.
                                </p>
                                <p className='leading-relaxed'>
                                    As someone who codes, it drove me crazy. In the programming world, we have tools like Git that let everyone work on the same project without tripping over each other. I couldn't get the question out of my head: "Why isn't there something like this for video?"
                                </p>
                                <p>
                                    So, that summer, I decided to stop asking and try to build it myself. I started sketching out an idea that uses the same change-tracking logic from the coding world but is built for the massive files that video requires. It's a passion project, plain and simple, born from a frustration my friends and I knew all too well. My only hope is that it helps other creators stay in that creative flow and spend less time wondering whose laptop has the latest version.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 hidden px-6 lg:px-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Mission
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            To empower creative professionals with cutting-edge tools that streamline workflows,
                            enhance collaboration, and unlock their full creative potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                            <p className="text-gray-400">
                                We constantly push the boundaries of what's possible, creating tools that
                                anticipate and exceed creative needs.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Community</h3>
                            <p className="text-gray-400">
                                We believe in the power of collaboration and building tools that bring
                                creative minds together.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Efficiency</h3>
                            <p className="text-gray-400">
                                We eliminate friction from creative workflows, letting creators focus on
                                what matters most - their art.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 hidden px-6 lg:px-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            The principles that guide everything we do and every decision we make.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Passion</h3>
                            <p className="text-gray-400">
                                We're driven by our love for creativity and the desire to make a difference
                                in the creative industry.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Trust</h3>
                            <p className="text-gray-400">
                                We build reliable, secure tools that creators can depend on for their
                                most important projects.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                            <p className="text-gray-400">
                                We believe great tools should be available to creators everywhere,
                                regardless of their background or resources.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                            <p className="text-gray-400">
                                We strive for excellence in everything we do, from product design to
                                customer support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 hidden px-6 lg:px-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            The passionate individuals behind rkivee who are dedicated to transforming
                            the creative industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold">H</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Harshit Raj</h3>
                            <p className="text-blue-400 mb-4">Founder & CEO</p>
                            <p className="text-gray-400 text-sm">
                                Visionary leader passionate about empowering creators with innovative tools
                                and seamless workflows.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold">D</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Design Team</h3>
                            <p className="text-green-400 mb-4">UX/UI Designers</p>
                            <p className="text-gray-400 text-sm">
                                Creative minds crafting beautiful, intuitive interfaces that enhance
                                the user experience.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold">E</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Engineering Team</h3>
                            <p className="text-purple-400 mb-4">Developers</p>
                            <p className="text-gray-400 text-sm">
                                Skilled engineers building robust, scalable solutions that power
                                creative workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-12 border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Join Us on This Journey
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Ready to transform your creative workflow? Start using rkivee today and
                        experience the future of creative collaboration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/"
                            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-colors"
                        >
                            Get Started
                            <ArrowRight size={20} className="ml-2" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
} 