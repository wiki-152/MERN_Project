import appstoreLogo from '../../assets/images/app_store.png'
import playstoreLogo from '../../assets/images/playstore.png'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img
                            src={appstoreLogo}
                            alt="GTO Logo"
                            width={150}
                            height={50}
                            className="mb-4"
                        />

                        <p className="text-sm text-gray-400">
                            Your trusted partner in technology and innovation
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">About us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Services</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Consulting</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Development</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Analytics</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Support</Link></li>
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Download Our App</h3>
                        <div className="space-y-3">
                            <Link href="#" className="block">
                                <img
                                    src={appstoreLogo}
                                    alt="GTO Logo"
                                    width={150}
                                    height={50}
                                    className="mb-4"
                                />

                            </Link>
                            <img
                                src={playstoreLogo}
                                alt="GTO Logo"
                                width={150}
                                height={50}
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

