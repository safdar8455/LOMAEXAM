import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award, BookOpen, AlertCircle, LayoutGrid } from 'lucide-react';
import { Question, Chapter } from './types';
import { chapter1Questions } from './data/chapter1';
import { chapter2Questions } from './data/chapter2';
import { chapter3Questions } from './data/chapter3';

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1: Introduction to Risk",
    description: "Fundamental concepts of risk, risk management methods, and insurable interest.",
    questions: chapter1Questions
  },
  {
    id: 2,
    title: "Chapter 2: The Life and Health Insurance Industry",
    description: "Business organizations, insurer types, and the financial services landscape.",
    questions: chapter2Questions
  },
  {
    id: 3,
    title: "Chapter 3: The Insurance Contract",
    description: "Legal principles, contract formation, and property rights in a policy.",
    questions: chapter3Questions
  }
];

export default function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const currentChapter = useMemo(() => 
    chapters.find(c => c.id === selectedChapterId) || null
  , [selectedChapterId]);

  const questions = currentChapter?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleOptionSelect = (index: number) => {
    if (isLocked) return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null || isLocked || !currentQuestion) return;
    const isCorrect = selectedOption === currentQuestion.answer;
    if (isCorrect) setScore(prev => prev + 1);
    setIsLocked(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsLocked(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsLocked(false);
    setScore(0);
    setShowResults(false);
  };

  const goHome = () => {
    setSelectedChapterId(null);
    restartQuiz();
  };

  const getAccuracy = () => questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  // Chapter Selection Page
  if (selectedChapterId === null) {
    return (
      <div className="min-h-screen bg-bg p-8 md:p-24">
        <div className="max-w-5xl mx-auto">
          <header className="mb-20">
            <h1 className="font-serif italic text-5xl text-ink mb-4">LOMA 280 Exam Master</h1>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Principles of Insurance Study Suite</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map(chapter => (
              <motion.button
                key={chapter.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedChapterId(chapter.id)}
                className="group text-left bg-white border border-border p-10 relative overflow-hidden transition-all hover:border-accent"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-border group-hover:bg-accent transition-colors" />
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted mb-6 font-bold font-sans">Chapter {chapter.id}</span>
                <h2 className="font-serif text-2xl text-ink mb-4 leading-tight">{chapter.title}</h2>
                <p className="font-serif italic text-xs text-muted leading-relaxed mb-8">{chapter.description}</p>
                <div className="flex items-center gap-2 text-accent font-sans text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                  Start Assessment <ChevronRight className="w-3 h-3" />
                </div>
              </motion.button>
            ))}
          </div>

          <footer className="mt-32 pt-12 border-t border-border flex justify-between items-center text-muted text-[10px] uppercase tracking-widest font-bold">
             <span>LOMA 280 Principles of Insurance</span>
             <span>© 2026 Study Master</span>
          </footer>
        </div>
      </div>
    );
  }

  // Quiz Results
  if (showResults) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white border border-border p-12 text-center relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-ink" />
          <Award className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h1 className="font-serif italic text-4xl mb-4 text-ink">Results: Ch. {selectedChapterId}</h1>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted mb-12">Performance Summary</p>
          
          <div className="grid grid-cols-2 gap-px bg-border mb-12 border border-border">
            <div className="bg-white p-8">
              <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Score</span>
              <span className="font-serif text-4xl text-ink">{score} / {questions.length}</span>
            </div>
            <div className="bg-white p-8">
              <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Accuracy</span>
              <span className={`font-serif text-4xl ${getAccuracy() >= 70 ? 'text-ink' : 'text-accent'}`}>{getAccuracy()}%</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={restartQuiz}
              className="w-full py-4 border border-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-ink hover:text-white transition-colors flex items-center justify-center gap-3"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Exam
            </button>
            <button 
              onClick={goHome}
              className="w-full py-4 bg-ink text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-ink border border-ink transition-all flex items-center justify-center gap-3"
            >
              <LayoutGrid className="w-4 h-4" />
              Select Different Chapter
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Quiz Interface
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-bg flex flex-col md:grid md:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <aside className="border-b md:border-b-0 md:border-r border-border p-10 flex flex-col justify-between bg-bg">
        <div>
          <button onClick={goHome} className="font-serif italic text-2xl tracking-tighter mb-16 text-ink block hover:text-accent transition-colors">
            LOMA 280 Prep
          </button>

          <div className="mb-12">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Module Progress</span>
            <div className="font-serif text-xl text-ink leading-tight">{currentChapter.title}</div>
          </div>

          <div className="mb-16">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-4 font-bold font-sans">Current Progress</span>
            <div className="h-[2px] w-full bg-border relative overflow-hidden">
              <motion.div 
                className="h-full bg-accent absolute left-0 top-0"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <ul className="hidden md:block space-y-0 text-muted">
            {chapters.map(c => (
              <li key={c.id} className={`py-4 border-b border-border flex justify-between items-center ${c.id === selectedChapterId ? 'text-ink font-semibold' : 'opacity-40'}`}>
                <button onClick={() => { setSelectedChapterId(c.id); restartQuiz(); }} className="text-[13px] font-sans hover:text-accent">
                  Ch. {c.id} Exam
                </button>
                {c.id === selectedChapterId && <span className="text-[11px] font-sans opacity-60">{Math.round(progress)}%</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-8 border-t border-border hidden md:block">
          <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Status</span>
          <div className="text-[13px] font-sans text-ink">Question {currentQuestionIndex + 1} of {questions.length}</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative p-8 md:p-24 flex-1 flex flex-col bg-bg overflow-y-auto">
        <div className="max-w-3xl w-full mx-auto relative h-full flex flex-col">
          {/* Decorative Number */}
          <div className="absolute -top-12 -left-12 md:-top-20 md:-left-20 font-serif text-[120px] md:text-[200px] leading-none text-ink opacity-[0.05] select-none pointer-events-none">
            {currentQuestionIndex + 1}
          </div>

          <div className="relative z-10 flex-1">
            <div className="font-serif italic text-accent mb-4 text-base md:text-lg">
              Section {currentQuestion.lo} &bull; Principles
            </div>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink leading-tight mb-16 max-w-2xl">
              {currentQuestion.question}
            </h1>

            <div className="grid grid-cols-1 gap-4 max-w-2xl mb-24">
              <AnimatePresence mode="popLayout">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.answer;
                  const showFeedback = isLocked;

                  let borderColor = "border-border";
                  let bgOverlay = "transparent";
                  let markerStyles = "border border-border text-muted";

                  if (showFeedback) {
                    if (isCorrect) {
                      borderColor = "border-accent";
                      bgOverlay = "#fdfaf5";
                      markerStyles = "border border-accent text-accent bg-bg";
                    } else if (isSelected) {
                      borderColor = "border-ink";
                      markerStyles = "border border-ink bg-ink text-white";
                    } else {
                      borderColor = "border-border opacity-50";
                    }
                  } else if (isSelected) {
                    borderColor = "border-ink";
                    markerStyles = "border border-ink text-ink";
                  }

                  return (
                    <motion.button
                      key={`${currentQuestionIndex}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isLocked}
                      style={{ backgroundColor: bgOverlay }}
                      className={`group w-full text-left flex items-center p-5 border ${borderColor} transition-all duration-200 relative`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold mr-5 flex-shrink-0 transition-colors ${markerStyles}`}>
                        {idx + 1}
                      </div>
                      <span className={`text-[15px] leading-relaxed font-sans ${isLocked && !isCorrect && !isSelected ? 'text-muted' : 'text-ink'}`}>
                        {option}
                      </span>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Explanation Overlay */}
          <AnimatePresence>
            {isLocked && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className="md:absolute bottom-32 right-0 w-full md:w-80 bg-white border border-accent p-8 p-shadow z-20"
                style={{ boxShadow: '20px 20px 0px rgba(178, 139, 92, 0.1)' }}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-3 font-sans">
                  {selectedOption === currentQuestion.answer ? 'Confirmation' : 'Concept Revision'}
                </div>
                <p className="text-[13px] leading-[1.6] text-ink/80 font-serif">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Bar */}
          <div className="mt-auto pt-10 border-t border-border flex justify-between items-center pb-8">
            <button onClick={goHome} className="text-muted font-sans text-[10px] uppercase tracking-widest font-bold hover:text-ink transition-colors">
              Quit Exam
            </button>
            
            <div className="flex gap-x-4">
              {!isLocked ? (
                <button
                  onClick={handleConfirm}
                  disabled={selectedOption === null}
                  className={`px-10 py-3 uppercase tracking-widest text-[11px] font-bold transition-all border ${
                    selectedOption === null 
                      ? 'border-border text-muted cursor-not-allowed'
                      : 'border-ink bg-ink text-white hover:bg-transparent hover:text-ink shadow-sm'
                  }`}
                >
                  Confirm Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-10 py-3 bg-ink text-white border border-ink uppercase tracking-widest text-[11px] font-bold transition-all flex items-center gap-3 hover:bg-transparent hover:text-ink shadow-sm"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Finish Results' : 'Next Question'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
