'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar scrollToSection={scrollToSection} />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 mt-6 text-center flex items-center justify-center">
        Projeto Criança Feliz
      </h1>
      <main className="flex-grow py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-8" id="home">
          <div className="text-left max-w-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              O Projeto Criança Feliz (PCF) é uma associação socioeducativa sem
              fins lucrativos que, através do voluntariado, busca despertar o
              protagonismo de crianças, jovens e adultos de comunidades periféricas
              por meio de ações que promovam acesso a novas perspectivas para que
              eles possam reinventar seu lugar no mundo. Com tudo isso, visamos ser
              referência no impacto social através do voluntariado, sempre dando o
              nosso 110%, tratando cada detalhe com integridade e honestidade, e
              vestindo a camisa laranja sempre.
            </p>
          </div>
          <div className="hidden md:block w-1/2">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczPBUpVQ4Mi0IYP8xsNlEclYqYf-GtkVc7DJ7tNeehpJgXKQhEOcS8WeWHS9tGQxRyMalpDPpOmdYBowOVWN6wIN0XU27dh9GZJkqLj6Z_sUL7_GSyY_PeSZ3kIbWN2YfxRjvbLH641T-Z_uGv-PyfdXBA=w1723-h969-s-no-gm?authuser=0"
              alt="Imagem do Projeto"
              className="rounded-lg shadow-lg"
              width={800}
              height={450}
            />
          </div>
        </div>

        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
            <div className="hidden md:block w-1/2">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPKw3XwInPU130nJvjH3KscpkYn59EECvPVoXAVsLjep_VoeNabp7Z3LTcPIUF80inrNcNP0WuvMXvSuPyGMte9wbhAu1PF5tpNbdL8F8Tf6CZE8uCpN2ULTkLa79X0UBH9zi3re1q_zKRqCgvfsqTkjg=w1455-h969-s-no-gm?authuser=0"
                alt="Imagem da Missão"
                className="rounded-lg shadow-lg"
                width={800}
                height={450}
              />
            </div>
            <div className="text-left max-w-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Qual a nossa missão, visão e valores?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Missão: Despertar o protagonismo em nossas crianças, jovens e pais.
                Visão: Ser referência no impacto social através do voluntariado.
                Valores: Camisa laranja, 110%, não existe ideia perdida, integridade e honestidade, você também é dono e Pampararã-pã.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
            <div className="text-left max-w-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Quais são as áreas do PCF?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O Projeto Criança Feliz é dividido em duas grandes gestões: ADMINISTRATIVA e OPERACIONAL, ambas têm o mesmo propósito de impactar a vida dos nossos atendidos e suas famílias, entretanto, a forma como trabalham para atingi-lo é diferente.
              </p>
            </div>
            <div className="hidden md:block w-1/2">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczP6nLzk-mrPJoSBqv6-5I8urmFmjgBnWEqKHDY9mdp1VCzw9xXfCvlvUYIjUgrAlXX7SXtlNdkLmo_LDS6SWLONY89Kacn-asbtn1Ib37L8V_Mg6YSkA9UR8fRpuJJPq15StCbzTfAXUugcFt3Aix6AHw=w1456-h969-s-no-gm?authuser=0"
                alt="Imagem das Áreas"
                className="rounded-lg shadow-lg"
                width={800}
                height={450}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">Contato</h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-6">
            Entre em contato com a gente nas redes sociais:
          </p>
          <div className="flex justify-center space-x-8">
            <a href="https://www.instagram.com/criancafelizprojeto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-8 w-8 text-orange-500 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/criancafelizprojeto" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-8 w-8 text-orange-500 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.facebook.com/criancafelizprojeto" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-8 w-8 text-orange-500 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
