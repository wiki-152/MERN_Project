import logo from '../../assets/icons/logo.jpg'
import logo_dark from '../../assets/icons/logo_dark.png'
import appstoreLogo from '../../assets/icons/app_store.png'
import playstoreLogo from '../../assets/icons/playstore.png'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

// Import Components to redirect to 
import AboutUs from '../AboutUs/AboutUs'
import Services from '../Services/Services'
import Contact from '../ContactUsCompany/ContactUsCompany'
import Careers from '../Careers/Careers'

import Consulting from '../Consulting/Consulting'
import FAQs from '../FAQs/FAQsComponent'
import NewsArticles from '../NewsAndArticles/NewsAndArticles'
import Support from '../Feedback/Feedback'





export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-2">
                        <img
                            src={logo_dark}
                            alt="GTO Logo"
                            width={200}
                            height={70}
                            className="mb-4"
                        />

                        <p className="text-sm text-gray-400">
                            Your trusted partner in the Market!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mt-12 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition">About us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-white transition">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mt-12 mb-4">More</h3>
                        <ul className="space-y-2">
                            <li><Link to="/consulting" className="text-gray-400 hover:text-white transition">Consulting</Link></li>
                            <li><Link to="/faqs" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
                            <li><Link to="/news" className="text-gray-400 hover:text-white transition">News & Articles</Link></li>
                            <li><Link to="/support" className="text-gray-400 hover:text-white transition">Feedback</Link></li>
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h3 className="font-semibold text-lg mt-6 mb-4">Download Our App</h3>
                        <div className="space-y-3">
                            <Link href="#" className="block">
                                <img
                                    src={appstoreLogo}
                                    alt="GTO Logo"
                                    width={150}
                                    height={20}
                                    className="mb-4"
                                />

                            </Link>
                            <img
                                src={playstoreLogo}
                                alt="GTO Logo"
                                width={150}
                                height={20}
                                className="mb-4"
                            />

                        </div>
                    </div>
                </div>

                {/* Social Media & Language */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition">
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">
                                <Youtube className="w-5 h-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>

                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition">English</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">Français</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">Deutsch</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">Italiano</Link>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-400">
                        <p>© {new Date().getFullYear()} GTO. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

