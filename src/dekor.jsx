import Carousel from "./komponen/Carousel";
import "./dekor.css";
const Dekor = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-linear-to-br from-pink-300 via-purple-300 to-indigo-400 py-12">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Confetti Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="absolute w-1 h-4 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: [
                "#ff69b4",
                "#ff1493",
                "#c71585",
                "#ffd700",
                "#32cd32",
              ][Math.floor(Math.random() * 5)],
              animation: `fall ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${i * 0.1}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Decorative Circles */}
        <div className="flex justify-center gap-4 mb-8">
          <div
            className="w-4 h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-6 h-6 bg-pink-200 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-4 h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <div className="flex justify-center py-2 relative">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 drop-shadow-md animate-bounce">
            SITI HULLI TSALITSAH
          </h2>
        </div>
        {/* Main Text */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            Selamat Ulang Tahun!
          </h1>
          <p className="text-2xl text-white/90 drop-shadow-md">
            Semoga hari istimewamu penuh dengan kebahagiaan
          </p>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="flex justify-center gap-4 mt-8">
          <div
            className="w-4 h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="w-6 h-6 bg-pink-200 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-4 h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
        </div>

        {/* Star Decorations */}
        <div className="flex justify-center gap-8 mt-12">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="text-4xl animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              ✨
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dekor;
