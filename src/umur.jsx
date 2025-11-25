import CountUp from './komponen/CountUp.jsx'
import ScrollFloat from './komponen/ScrollFloat.jsx'

const Umur = () => {
    return (
        <section id="umur" className="relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50 to-indigo-50 py-16 md:py-24">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-pink-200/30 blur-2xl" aria-hidden="true"></div>
                <div className="absolute -bottom-12 -right-16 w-56 h-56 rounded-full bg-indigo-200/30 blur-2xl" aria-hidden="true"></div>

                <div className="relative px-8 z-10 w-full">
                    <div className="group transition-all duration-300 hover:shadow-3xl hover:-translate-y-0.5">
                        <div className="flex items-center justify-center gap-3 text-indigo-500 mb-4">
                            <i className="fas fa-birthday-cake text-3xl"></i>
                            <span className="text-lg md:text-xl font-semibold text-gray-700">Terverifikasi</span>
                        </div>

                        <div className="text-center select-none">
                            <CountUp
                                from={-50}
                                to={25}
                                separator=","
                                direction="up"
                                duration={3}
                                className="count-up-text text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
                            />
                            <span className="ml-2 align-middle text-base md:text-lg font-medium text-gray-600">tahun</span>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <span className="transition-colors group-hover:text-gray-700 text-center">“Age carves wisdom into the soul”</span>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                        >
                            Hari ini adalah hari di mana dunia resmi bertambah satu orang yang lebih dewasa… dan semoga juga lebih bijak, meskipun kadang kita semua tau, kebijaksanaan itu sering datangnya belakangan—kadang belakangan banget 😁😂.
                        </ScrollFloat>
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                        >
                            Semoga di usia baru ini kamu bisa lebih sabar menghadapi hidup, lebih kuat menghadapi masalah, dan lebih tegar menghadapi… notifikasi WA yang nyuruh nerusin surat disposisi. Kamu hebat, kamu kuat, kamu tahan banting—bahkan kadang tahan lapar juga kalau dompet lagi protes.
                        </ScrollFloat>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Umur
