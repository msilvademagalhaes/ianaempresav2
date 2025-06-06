
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sobre o Score de Maturidade em IA</h1>
        <Link href="/" legacyBehavior><a className="hover:underline">Início</a></Link>
      </header>

      <main className="flex-grow p-6 max-w-3xl mx-auto space-y-4 text-gray-800">
        <p>
          O Score de Maturidade em Inteligência Artificial ajuda empresas a entenderem como estão adotando IA no seu dia a dia.
          O questionário é simples e voltado para todos os colaboradores, independentemente da área de atuação.
        </p>
        <p>Os níveis de maturidade são:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Iniciante:</strong> primeiros passos, pouco uso de IA na empresa.</li>
          <li><strong>Em progresso:</strong> práticas emergentes, projetos em andamento, cultura em formação.</li>
          <li><strong>Maturidade avançada:</strong> uso consolidado, práticas éticas, visão estratégica para IA.</li>
        </ul>
        <p>
          Incentivamos que empresas usem este score como base para criar planos de ação para evoluir no uso responsável e eficaz da IA.
        </p>
      </main>

      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-700">
        © 2025 - Projeto AI Maturity Score
      </footer>
    </div>
  );
}
