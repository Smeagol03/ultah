import Carousel from './komponen/Carousel'

const berkas = () => {
    return (
        <div className="relative my-8">
            <div className="flex items-center justify-center">
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" aria-hidden="true"></div>
                <div className="mx-4 relative">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg border-4 border-pink-300 flex items-center justify-center">
                        <i className="fas fa-gift text-pink-500 text-xl" aria-hidden="true"></i>
                    </div>
                    <div className="absolute inset-0 rounded-full ring-2 ring-pink-300/40 animate-pulse" aria-hidden="true"></div>
                </div>
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-purple-300 to-transparent" aria-hidden="true"></div>
            </div>
            <div className="mt-2 flex justify-center gap-2" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-300"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-300"></span>
            </div>
            <div className="flex justify-center py-12 relative">
                <Carousel
                    baseWidth={300}
                    autoplay={false}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={false}
                    round={true}
                />
            </div>
            <div className="flex justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 drop-shadow-md">
                    SITI HULLI TSALITSAH
                </h2>
            </div>
        </div>
    )
}

export default berkas
