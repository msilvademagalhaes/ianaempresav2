
import { useState } from "react";
import Link from "next/link";

const questions = [
  "Você já ouviu falar de Inteligência Artificial (IA)?",
  "Sua empresa incentiva o uso de ferramentas baseadas em IA no dia a dia?",
  "Você já participou de algum treinamento ou workshop sobre IA na empresa?",
  "Você já utiliza ferramentas de IA no seu trabalho?",
  "Com que frequência você utiliza ferramentas de IA no trabalho?",
  "Você já percebeu ganhos de produtividade com o uso de IA?",
  "A liderança da empresa incentiva a experimentação com novas tecnologias como IA?",
  "Existem diretrizes claras sobre como usar IA de forma ética e segura na empresa?",
  "Você se sente confortável em sugerir novas aplicações de IA para o seu trabalho?",
  "A empresa já possui projetos que utilizam IA de forma estruturada?",
  "Existem equipes ou pessoas dedicadas ao tema de IA na empresa?",
  "Você sabe a quem recorrer na empresa se quiser aprender mais sobre IA?",
  "A empresa oferece materiais ou treinamentos regulares sobre IA?",
  "Você acredita que o uso de IA será cada vez mais importante para o sucesso da empresa?",
  "Sua empresa tem um plano ou estratégia para o uso de IA nos próximos anos?"
];

const options = [
  { label: "Não conheço", value: 0 },
  { label: "Pouco uso", value: 1 },
  { label: "Uso médio", value: 2 },
  { label: "Uso frequente", value: 3 }
];

export default function Home() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const totalScore = answers.reduce((sum, value) => sum + (value !== null ? value : 0), 0);

  const getResultText = (score) => {
    if (score <= 15) return "Iniciante";
    if (score <= 30) return "Em progresso";
    return "Maturidade avançada";
  };

  const getResultMessage = (score) => {
    if (score <= 15) return "Sua empresa está no início da jornada de adoção de IA. Considere promover treinamentos e incentivar a experimentação.";
    if (score <= 30) return "Sua empresa está em progresso no uso de IA. Busque consolidar práticas e criar uma estratégia formal.";
    return "Sua empresa demonstra maturidade avançada no uso de IA. Continue inovando e compartilhando as melhores práticas internamente.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Score de Maturidade em IA</h1>
        <Link href="/about" legacyBehavior><a className="hover:underline">Sobre</a></Link>
      </header>

      <main className="flex-grow flex flex-col items-center p-6">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium mb-4">{index + 1}. {question}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {options.map((option) => (
                    <button
                      type="button"
                      key={option.value}
                      className={\`py-2 px-4 rounded-lg border \${answers[index] === option.value ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-blue-100'}\`}
                      onClick={() => handleOptionChange(index, option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Calcular Score
            </button>
          </form>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow w-full max-w-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Seu Score: {totalScore} / 45</h2>
            <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
              <div
                className="bg-green-500 h-6 rounded-full transition-all duration-500"
                style={{ width: \`\${(totalScore / 45) * 100}%\` }}
              ></div>
            </div>
            <p className="text-xl font-semibold mb-4">Nível: {getResultText(totalScore)}</p>
            <p className="text-gray-700 mb-6">{getResultMessage(totalScore)}</p>
            <button
              className="mt-6 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              onClick={() => {
                setSubmitted(false);
                setAnswers(Array(questions.length).fill(null));
              }}
            >
              Refazer Avaliação
            </button>
          </div>
        )}
      </main>

      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-700">
        © 2025 - Projeto AI Maturity Score | <a href="https://github.com/seu-github" target="_blank" className="underline">GitHub</a> | <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" className="underline">LinkedIn</a>
      </footer>
    </div>
  );
}
