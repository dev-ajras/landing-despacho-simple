import {
  Header,
  Hero,
  Problema,
  ComoFunciona,
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
        <ComoFunciona />
        <Features />
        <Confianza />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
