import {
  Header,
  Hero,
  Problema,
  Features,
  Equipo,
  Confianza,
  CtaFinal,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Equipo />
        <Features />
        <Confianza />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
