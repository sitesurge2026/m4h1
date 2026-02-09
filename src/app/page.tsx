"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  BookOpen,
  ChevronDown,
  Compass,
  Heart,
  Infinity,
  Pause,
  Play,
  Sparkles,
  Users,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const dilemmaCards = [
    {
      title: "The Noise",
      copy:
        "Endless updates, rising anxiety, and constant distraction pull us away from stillness.",
      icon: Activity,
    },
    {
      title: "The Search",
      copy:
        "We chase meaning through success, relationships, and identity, yet feel unfinished.",
      icon: Compass,
    },
    {
      title: "The Gap",
      copy:
        "A quiet spiritual void remains, even when life looks full from the outside.",
      icon: Heart,
    },
  ];

  const bentoCards = [
    {
      title: "One point of focus",
      subtitle: "One God, No partners",
      details: [
        "Ultimate Simplicity: This section is about decluttering the mind. Instead of serving multiple \"masters\"—such as social media validation, career status, or the ego—you center your life on a single, unchanging source of truth.",
        "Freedom from Comparison: When there is only one point of focus, the need to compare yourself to others vanishes. Your worth is no longer determined by societal standards but by your connection to the Divine.",
        "Internal Alignment: By removing \"partners\" or competing priorities, your thoughts, words, and actions begin to move in the same direction. This creates a state of internal peace and reduces the anxiety of trying to please everyone.",
      ],
      icon: Sparkles,
    },
    {
      title: "Why",
      subtitle: "Life After - this life is a Journey and not a destination",
      details: [
        "The Long-Term Perspective: This framework shifts your horizon from the immediate present to an eternal timeline. Understanding that this life is a \"journey\" helps you maintain composure during temporary setbacks.",
        "Purpose Beyond Pleasure: If this life isn't the final destination, then its purpose isn't just about accumulating comfort. It is about growth, testing, and preparing for what comes next.",
        "Justice and Hope: The \"Why\" provides the reassurance that no good deed is wasted and no injustice is ignored. It provides a grounded hope that the final outcome of your journey is based on your sincerity and effort.",
      ],
      icon: Infinity,
    },
    {
      title: "What to do",
      subtitle: "Guidance",
      details: [
        "The Blueprint for Living: Just as an architect needs a blueprint, a human life needs a structured set of values. This section focuses on the objective moral compass provided through divine instruction.",
        "Removing Guesswork: Instead of relying on \"gut feelings\" or shifting cultural norms to decide what is right or wrong, you follow a set of timeless principles. This provides a clear \"north star\" for ethical dilemmas.",
        "Holistic Health: Guidance isn't just about spiritual rituals; it covers how you eat, how you conduct business, how you treat your family, and how you care for your body. It is a total lifestyle system.",
      ],
      icon: BookOpen,
    },
    {
      title: "How to do it",
      subtitle: "Messenger as an example",
      details: [
        "The Human Prototype: Principles can sometimes feel abstract. This section looks at the lived experience of a human example to see how those principles look in the real world—during war, peace, poverty, and leadership.",
        "Practical Emulation: It transforms \"Guidance\" from a list of rules into a way of being. You learn how to speak with kindness, how to lead with humility, and how to practice patience through the actions of the example.",
        "The Bridge to Action: Having a model to follow bridges the gap between knowing what to do and actually doing it. It provides a relatable, human path toward self-improvement, showing that these ideals are actually achievable.",
      ],
      icon: Users,
    },
  ];

  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };


  return (
    <div className="min-h-screen bg-[var(--mfh-bg)] text-[var(--mfh-text)] relative">
      {/* Background Video */}
      <video
        className="fixed inset-0 h-full w-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/40 z-0" />
      
      {/* Logo at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
        <Image
          src="/mfh-logo.png"
          alt="Message for Humanity logo"
          width={120}
          height={96}
          className="h-20 w-24 sm:h-24 sm:w-32"
          unoptimized
          priority
        />
      </div>

      <nav className="fixed inset-x-0 top-28 z-50 mx-auto w-[min(1200px,92%)] rounded-full px-6 py-3 shadow-sm glass">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="mfh-heading text-base font-semibold tracking-tight sm:text-lg">
              Message for Humanity
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-6 text-sm text-[color:var(--mfh-text)]/80 md:flex">
              <a className="transition hover:text-[var(--mfh-text)]" href="#">
                Human Dilemma
              </a>
              <a className="transition hover:text-[var(--mfh-text)]" href="#">
                Solution
              </a>
              <a className="transition hover:text-[var(--mfh-text)]" href="#">
                Talk to us
              </a>
            </div>
            <button className="rounded-full bg-[var(--mfh-accent)] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-[var(--mfh-accent-dark)] hover:shadow-md">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </nav>

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-40 sm:px-10 z-10">
        <motion.section
          className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-start text-left text-white"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="mfh-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block">What if the peace you are</span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            >
              searching for is also....
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, delay: 1.4, ease: "easeOut" }}
            >
              searching for you?
            </motion.span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base italic leading-relaxed text-white/80 sm:text-lg"
          >
            Beyond the noise of the modern world, there is a message. A guide. A
            way of life.
          </motion.p>
          <motion.div
            variants={item}
            className="scroll-indicator mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70"
          >
            <span>Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.section>
      </main>

      <section className="relative bg-[var(--mfh-bg)]/95 backdrop-blur-sm px-6 py-12 sm:px-10 z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4">
          <audio
            ref={audioRef}
            src="/audio.mp3"
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
          />
          <p className="jump-animation text-lg font-bold text-[color:var(--mfh-text)] sm:text-xl">
            Press play to hear us
          </p>
          <button
            onClick={toggleAudio}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--mfh-accent)] text-white transition hover:bg-[var(--mfh-accent-dark)]"
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? (
              <Pause size={24} />
            ) : (
              <Play size={24} className="ml-1" />
            )}
          </button>
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-24 sm:px-10 z-10 bg-[var(--mfh-bg)]/95 backdrop-blur-sm">
        <div className="relative mx-auto w-full max-w-5xl rounded-3xl bg-[var(--mfh-stone)]/70 p-10 text-center sm:p-16">
          <Image
            src="/human-dilemma.png"
            alt="Human dilemma"
            width={80}
            height={80}
            className="absolute -top-8 -right-8 h-16 w-16 rounded-full object-cover border-4 border-[var(--mfh-stone)]/70 sm:-top-10 sm:-right-10 sm:h-20 sm:w-20"
            unoptimized
          />
          <motion.h2
            className="mfh-heading text-3xl font-semibold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            The Human Dilemma
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-relaxed text-[color:var(--mfh-text)]/75 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            In a world overflowing with information, we still feel the ache of
            uncertainty. This space will guide you from curiosity to clarity,
            one calm step at a time.
          </motion.p>
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-10 z-10 bg-[var(--mfh-bg)]/95 backdrop-blur-sm">
        <motion.div
          className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {dilemmaCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={item}
                className="rounded-3xl bg-[var(--mfh-stone)]/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-[var(--mfh-accent)]">
                  <Icon size={22} />
                </div>
                <h3 className="mfh-heading text-xl font-semibold">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--mfh-text)]/75">
                  {card.copy}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="bg-[#1a1a1a] px-6 pb-24 pt-24 text-white sm:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mfh-heading text-3xl font-semibold sm:text-4xl text-white">
              Solution
            </h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              A simple, grounded framework for living with meaning and clarity.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            {bentoCards.map((card, index) => {
              const Icon = card.icon;
              const isExpanded = expandedCards.includes(index);
              return (
                <motion.div
                  key={card.title}
                  variants={item}
                  className="rounded-3xl bg-[#2a2a2a] p-8 shadow-sm transition hover:scale-[1.02]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mfh-heading text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-white/90">
                    {card.subtitle}
                  </p>
                  <button
                    onClick={() => toggleCard(index)}
                    className="mt-4 flex w-full items-center justify-between text-sm text-white/70 transition hover:text-white"
                  >
                    <span>{isExpanded ? "Hide details" : "Show details"}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 pt-4 border-t border-white/10">
                          {card.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-sm leading-relaxed text-white/70"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      <section className="relative bg-[var(--mfh-bg)]/95 backdrop-blur-sm px-6 py-20 sm:px-10 z-10">
        <motion.div
          className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 mfh-heading text-3xl font-semibold text-[var(--mfh-text)] sm:text-4xl">
            Want to know more?
          </h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <button className="rounded-lg bg-[var(--mfh-accent)] px-6 py-3 text-base font-medium text-white transition hover:bg-[var(--mfh-accent-dark)] sm:text-lg">
              Let&apos;s Talk
            </button>
            <button className="rounded-lg bg-[var(--mfh-accent)] px-6 py-3 text-base font-medium text-white transition hover:bg-[var(--mfh-accent-dark)] sm:text-lg">
              Free Guide
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
