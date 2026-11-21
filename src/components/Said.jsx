import React, { useState, useRef, useEffect, useCallback } from "react";

const GAP = 24;

const ARTICLES = [
    {
        id: 1,
        title: "Методы и формулы расчета торговой наценки",
        href: "#",
        bg: `radial-gradient(circle at 20% 70%, #ff7ad9 0%, transparent 35%),
         radial-gradient(circle at 45% 30%, #7cf3ff 0%, transparent 40%),
         radial-gradient(circle at 75% 60%, #ffd86b 0%, transparent 35%),
         radial-gradient(circle at 90% 20%, #8a6bff 0%, transparent 40%),
         linear-gradient(120deg, #3b2a8c, #1fc8b8)`,
    },
    {
        id: 2,
        title: "Ассортимент продуктового ассортимента",
        href: "#",
        bg: `radial-gradient(ellipse at 15% 40%, #0f4c5c 0 18%, transparent 19%),
         radial-gradient(ellipse at 40% 75%, #14323d 0 16%, transparent 17%),
         radial-gradient(ellipse at 62% 30%, #1d6a73 0 15%, transparent 16%),
         radial-gradient(ellipse at 85% 65%, #0b3140 0 20%, transparent 21%),
         radial-gradient(ellipse at 50% 50%, #cfe7ea 0 40%, #ffffff 70%)`,
    },
    {
        id: 3,
        title: "Что такое сезонность продаж",
        href: "#",
        bg: `repeating-linear-gradient(115deg, #e8ac2c 0 10px, #e2531f 10px 20px, #1c1c1c 20px 26px, #f3efe6 26px 34px, #2b3a8f 34px 44px, #c8321c 44px 52px)`,
    },
    {
        id: 4,
        title: "Как рассчитать оборачиваемость товара",
        href: "#",
        bg: `conic-gradient(from 200deg at 30% 60%, #34d399, #3b82f6, #a855f7, #f472b6, #34d399)`,
    },
    {
        id: 5,
        title: "ABC-анализ: как выделить самые прибыльные позиции",
        href: "#",
        bg: `radial-gradient(circle at 70% 30%, #fde68a 0%, transparent 45%),
         linear-gradient(135deg, #f97316, #be123c 70%, #4c1d95)`,
    },
    {
        id: 6,
        title: "Управление запасами на складе",
        href: "#",
        bg: `repeating-linear-gradient(90deg, #0f766e 0 14px, #5eead4 14px 22px, #134e4a 22px 40px),
         linear-gradient(#000, #000)`,
    },
];

function useVisibleCount() {
    const get = () =>
        typeof window === "undefined" ? 3 : window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const [n, setN] = useState(get);
    useEffect(() => {
        const onResize = () => setN(get());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return n;
}

const Chevron = ({ dir }) => (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="transition-transform duration-300">
        <path
            d={dir === "left" ? "M6.5 1 1.5 6l5 5" : "M1.5 1l5 5-5 5"}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function KnowledgeBase() {
    const visible = useVisibleCount();
    const maxIndex = Math.max(0, ARTICLES.length - visible);
    const [index, setIndex] = useState(0);
    const [dx, setDx] = useState(0);
    const [dragging, setDragging] = useState(false);
    const start = useRef({ x: 0, id: null });
    const moved = useRef(false);
    const trackRef = useRef(null);

    const safeIndex = Math.min(index, maxIndex);
    const go = useCallback(
        (d) => setIndex((i) => Math.min(maxIndex, Math.max(0, Math.min(i, maxIndex) + d))),
        [maxIndex]
    );

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [go]);

    const onDown = (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        start.current = { x: e.clientX, id: e.pointerId };
        moved.current = false;
        setDragging(true);
    };
    const onMove = (e) => {
        if (!dragging) return;
        let d = e.clientX - start.current.x;
        if (Math.abs(d) > 6) moved.current = true;
        // rubber-band at the edges
        if ((safeIndex === 0 && d > 0) || (safeIndex === maxIndex && d < 0)) d *= 0.3;
        setDx(d);
    };
    const onUp = () => {
        if (!dragging) return;
        setDragging(false);
        const w = trackRef.current ? trackRef.current.offsetWidth / visible : 300;
        const threshold = Math.min(80, w / 4);
        if (dx < -threshold) go(1);
        else if (dx > threshold) go(-1);
        setDx(0);
    };

    return (
        <section className="min-h-screen w-full bg-[#f5f7f6] px-4 py-16 font-['Montserrat',sans-serif] sm:px-8">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
        @keyframes kbFadeUp { from { opacity: 0; transform: translateY(24px) scale(.98); } to { opacity: 1; transform: none; } }
        @keyframes kbFadeDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: none; } }
        .kb-card { animation: kbFadeUp .7s cubic-bezier(.2,.7,.2,1) both; }
        .kb-head { animation: kbFadeDown .6s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .kb-card, .kb-head { animation: none; } }
      `}</style>

            <div className="mx-auto max-w-[1000px]">
                {/* Header */}
                <div className="kb-head mb-9 flex items-center justify-between">
                    <h2 className="text-[26px] font-medium tracking-tight text-[#3a3a3a]">База знаний</h2>
                    <a
                        href="#"
                        className="rounded-full bg-[#43a047] px-6 py-2.5 text-[11px] font-medium text-white shadow-[0_6px_16px_-6px_rgba(67,160,71,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#388e3c] hover:shadow-[0_10px_22px_-6px_rgba(67,160,71,.8)] active:translate-y-0 active:scale-95"
                    >
                        Все статьи
                    </a>
                </div>

                {/* Carousel */}
                <div className="relative flex items-center">
                    <button
                        onClick={() => go(-1)}
                        disabled={safeIndex === 0}
                        aria-label="Назад"
                        className="group absolute -left-1 z-10 flex h-8 w-8 -translate-x-full items-center justify-center rounded-full text-[#2f6b3a] transition-all duration-300 hover:scale-125 hover:bg-white hover:text-[#43a047] hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-30 max-sm:left-1 max-sm:translate-x-0 max-sm:bg-white/90 max-sm:shadow"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                            <Chevron dir="left" />
                        </span>
                    </button>

                    <div className="w-full overflow-hidden px-1 py-4 -my-4">
                        <div
                            ref={trackRef}
                            onPointerDown={onDown}
                            onPointerMove={onMove}
                            onPointerUp={onUp}
                            onPointerCancel={onUp}
                            onPointerLeave={onUp}
                            onClickCapture={(e) => {
                                if (moved.current) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            }}
                            onDragStart={(e) => e.preventDefault()}
                            className={`flex select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
                            style={{
                                gap: GAP,
                                touchAction: "pan-y",
                                transform: `translateX(calc(${-safeIndex} * (100% + ${GAP}px) / ${visible} + ${dx}px))`,
                                transition: dragging ? "none" : "transform .6s cubic-bezier(.22,.8,.24,1)",
                            }}
                        >
                            {ARTICLES.map((a, i) => (
                                <article
                                    key={a.id}
                                    className="kb-card group shrink-0"
                                    style={{
                                        flex: `0 0 calc((100% - ${GAP * (visible - 1)}px) / ${visible})`,
                                        animationDelay: `${i * 90}ms`,
                                    }}
                                >
                                    <a
                                        href={a.href}
                                        draggable={false}
                                        className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_40px_-14px_rgba(46,125,50,.35)]"
                                    >
                                        <div className="h-[90px] overflow-hidden sm:h-[90px]">
                                            <div
                                                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rotate-2"
                                                style={{ background: a.bg }}
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between px-5 pb-4 pt-5">
                                            <h3 className="min-h-[40px] text-[13px] font-medium leading-[1.55] text-[#333] transition-colors duration-300 group-hover:text-[#43a047]">
                                                {a.title}
                                            </h3>
                                            <span className="mt-4 flex items-center justify-end gap-1 text-[10px] font-medium text-[#43a047]">
                                                <span className="relative">
                                                    Читать статью
                                                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#43a047] transition-all duration-300 group-hover:w-full" />
                                                </span>
                                                <span className="-ml-1 w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-3 group-hover:translate-x-0 group-hover:opacity-100">
                                                    →
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => go(1)}
                        disabled={safeIndex === maxIndex}
                        aria-label="Вперёд"
                        className="group absolute -right-1 z-10 flex h-8 w-8 translate-x-full items-center justify-center rounded-full text-[#2f6b3a] transition-all duration-300 hover:scale-125 hover:bg-white hover:text-[#43a047] hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-30 max-sm:right-1 max-sm:translate-x-0 max-sm:bg-white/90 max-sm:shadow"
                    >
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                            <Chevron dir="right" />
                        </span>
                    </button>
                </div>

                {/* Progress bar */}
                <div className="mx-auto mt-8 h-1 w-24 overflow-hidden rounded-full bg-[#dfe7e1]">
                    <div
                        className="h-full rounded-full bg-[#43a047] transition-all duration-500"
                        style={{
                            width: `${100 / (maxIndex + 1)}%`,
                            marginLeft: `${(safeIndex * 100) / (maxIndex + 1)}%`,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}