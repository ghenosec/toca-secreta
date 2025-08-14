export default function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-black via-gray-950 to-gray-900 text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-yellow-400 drop-shadow-lg">
            Transforme sua vida financeira com{" "}
            <span className="block mt-2">A TOCA SECRETA</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
            Descubra os segredos que os ratos mais experientes usam para
            multiplicar seus ganhos no mercado digital.
          </p>
  
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-gray-900 rounded-xl shadow-2xl overflow-hidden mb-12 border-4 border-yellow-500">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?controls=0&modestbranding=1&rel=0"
              title="Vídeo de Vendas - A Toca Secreta"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
  
          <a
            href="#pricing"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full text-2xl md:text-3xl uppercase transition duration-300 transform hover:scale-105 shadow-lg animate-pulse"
          >
            QUERO ENTRAR PARA A TOCA SECRETA!
          </a>
          <p className="mt-6 text-base md:text-lg text-gray-300">
            (Acesso imediato e vitalício após a inscrição)
          </p>
        </div>
      </section>
    );
  }