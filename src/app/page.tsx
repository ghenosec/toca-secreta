import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionWrapper from "./components/SectionWrapper";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main>
        <HeroSection />

        <SectionWrapper className="bg-gray-800 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">
            Você está cansado de...
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">😡</span>
              <p>Não saber por onde começar no mercado digital?</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">💰</span>
              <p>Ver os outros ganharem dinheiro e você não?</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">⏰</span>
              <p>Perder tempo com estratégias que não funcionam?</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">🚫</span>
              <p>Ser enganado por gurus da internet?</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">📉</span>
              <p>Ter resultados inconsistentes e frustrantes?</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">📚</span>
              <p>Ficar perdido com tanta informação?</p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="pricing" className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Não perca essa oportunidade única!
          </h2>
          <div className="text-3xl font-bold mb-8">
            Oferta expira em: <span className="text-yellow-300">00:00:00</span>
          </div>
          <p className="text-4xl font-extrabold mb-4">
            De: <span className="line-through">R$ 49,90</span>
          </p>
          <p className="text-6xl font-extrabold mb-10 text-yellow-300 drop-shadow-lg">
            Por apenas: R$ 9,90
          </p>
          <a
            href="SEU_LINK_DE_PAGAMENTO_AQUI"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-12 rounded-full text-3xl uppercase transition duration-300 transform hover:scale-105 shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            QUERO ENTRAR PARA A TOCA SECRETA AGORA!
          </a>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-800 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-gray-700 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Como vou ter acesso à Toca Secreta?
              </h3>
              <p className="text-gray-300">
                Após a confirmação do pagamento, você receberá um e-mail com
                todas as instruções para acessar nossa plataforma exclusiva de
                membros.
              </p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Por quanto tempo terei acesso?
              </h3>
              <p className="text-gray-300">
                Seu acesso é vitalício! Uma vez dentro da Toca, você terá acesso
                para sempre a todo o conteúdo e futuras atualizações.
              </p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Preciso ter experiência prévia?
              </h3>
              <p className="text-gray-300">
                Não! A Toca Secreta foi desenvolvida para iniciantes e para
                quem já tem alguma experiência mas não obteve resultados. Tudo é
                ensinado do zero.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <footer className="bg-black py-8 text-gray-400 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Toca Secreta. Todos os direitos
            reservados.
          </p>
          <p className="mt-2">
            <a href="/politica-de-privacidade" className="hover:underline">
              Política de Privacidade
            </a>{" "}
            |{" "}
            <a href="/termos-de-uso" className="hover:underline">
              Termos de Uso
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}