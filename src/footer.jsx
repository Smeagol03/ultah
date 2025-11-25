import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    // Daftar gambar untuk marquee; duplikasi akan dilakukan agar looping mulus
    const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png', '/8.png', '/9.png']
    return (
        <footer className="relative overflow-hidden bg-linear-to-r from-pink-200 via-purple-200 to-indigo-200">
            <div className="container mx-auto px-4 py-8 md:py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-pink-700">
                        <i className="fas fa-birthday-cake text-2xl"></i>
                        <span className="font-bold text-lg">Selamat Ulang Tahun!</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-indigo-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-gift"></i>
                        <i className="fas fa-music"></i>
                    </div>
                    <div className="text-gray-700 text-sm md:text-base text-center md:text-right">
                        © {year} Dibuat dengan teliti 🎉
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <div className="h-px w-full max-w-3xl bg-linear-to-r from-transparent via-white to-transparent" aria-hidden="true"></div>
                </div>
                {/* Marquee gambar: bergerak horizontal, halus, dan tidak membuat browser lemot */}
                {/* Container dengan overflow:hidden untuk mencegah scroll horizontal */}
                <div className="mt-4 relative overflow-hidden" aria-hidden="true">
                    {/* Keyframes lokal untuk kontrol animasi; 20s per siklus, linear, infinite */}
                    <style>{`
                        @keyframes footer-marquee {
                          0% { transform: translateX(0); }
                          100% { transform: translateX(-50%); }
                        }
                      `}</style>
                    {/* Track: dua kali deretan gambar agar transisi loop mulus; will-change optimize transform */}
                    <div
                        className="flex items-center gap-6"
                        style={{
                            animation: 'footer-marquee 20s linear infinite',
                            willChange: 'transform'
                        }}
                    >
                        {[...images, ...images].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="Dekorasi ulang tahun"
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain shrink-0"
                                loading="lazy"
                                decoding="async"
                                fetchpriority="low"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
