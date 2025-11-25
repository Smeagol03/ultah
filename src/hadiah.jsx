import React, { useMemo, useState } from 'react'

const Hadiah = ({
    title = 'Hadiah',
    description = 'Ni cobak di scan cukup lah beli ayam weny',
    qrSrc = '/qr.jpg',
    downloadFileName = 'qr-hadiah.png'
}) => {
    const [status, setStatus] = useState('loading')
    const [version, setVersion] = useState(0)
    const [copied, setCopied] = useState(false)
    const srcWithVersion = useMemo(() => `${qrSrc}${qrSrc.includes('?') ? '&' : '?'}v=${version}`, [qrSrc, version])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(qrSrc)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch { }
    }
    const handleRetry = () => {
        setStatus('loading')
        setVersion(v => v + 1)
    }

    return (
        <section id="hadiah" className="relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50 to-indigo-50 py-16 md:py-24">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-pink-200/30 blur-2xl" aria-hidden="true"></div>
                <div className="absolute -bottom-12 -right-16 w-56 h-56 rounded-full bg-indigo-200/30 blur-2xl" aria-hidden="true"></div>

                <div className="relative z-10 w-full max-w-md">
                    <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl border border-white/60 p-8 md:p-10">
                        <div className="flex items-center justify-center gap-3 text-pink-500 mb-4">
                            <i className="fas fa-gift text-3xl"></i>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
                        </div>
                        <p className="text-center text-sm md:text-base text-gray-700 mb-6">{description}</p>

                        <div className="flex items-center justify-center">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl border-4 border-indigo-200 bg-gray-50 shadow-xl overflow-hidden">
                                {status === 'loading' && (
                                    <div className="absolute inset-0 bg-linear-to-r from-indigo-50 via-pink-50 to-indigo-50 animate-pulse"></div>
                                )}
                                {status === 'error' && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
                                        <i className="fas fa-exclamation-circle text-red-500 text-2xl"></i>
                                        <span className="text-sm text-gray-600">Gagal memuat gambar QR</span>
                                        <button onClick={handleRetry} className="px-3 py-1.5 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition-colors">Coba Lagi</button>
                                    </div>
                                )}
                                <img
                                    src={srcWithVersion}
                                    alt="Kode QR Hadiah"
                                    className={`w-full h-full object-contain transition-opacity duration-500 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
                                    loading="lazy"
                                    onLoad={() => setStatus('loaded')}
                                    onError={() => setStatus('error')}
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <a href={qrSrc} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors flex items-center gap-2" aria-label="Buka QR di tab baru">
                                <i className="fas fa-external-link-alt"></i>
                                Buka
                            </a>
                            <a href={qrSrc} download={downloadFileName} className="px-4 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors flex items-center gap-2" aria-label="Unduh gambar QR">
                                <i className="fas fa-download"></i>
                                Unduh
                            </a>
                            <button onClick={handleCopy} className="px-4 py-2 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2" aria-label="Salin tautan QR">
                                <i className="fas fa-link"></i>
                                {copied ? 'Disalin' : 'Salin Link'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hadiah
