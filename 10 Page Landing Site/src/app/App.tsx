import Page1 from "../imports/1";
import Page2 from "../imports/2";
import Page3 from "../imports/3";
import Page4 from "../imports/4";
import Page5 from "../imports/5";
import Page6 from "../imports/6";
import Page7 from "../imports/7";
import Page8 from "../imports/8";
import Page9 from "../imports/9";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    { number: 1, component: <Page1 />, title: "Обложка" },
    { number: 2, component: <Page2 />, title: "Введение" },
    { number: 3, component: <Page3 />, title: "Бейсбол" },
    { number: 4, component: <Page4 />, title: "Баскетбол" },
    { number: 5, component: <Page5 />, title: "Бокс" },
    { number: 6, component: <Page6 />, title: "Велосипед" },
    { number: 7, component: <Page7 />, title: "Серфинг" },
    { number: 8, component: <Page8 />, title: "Теннис" },
    { number: 9, component: <Page9 />, title: "Финал" },
  ];

  const currentPageData = pages.find(p => p.number === currentPage);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Top Menu */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <h1 className="text-center font-['Unbounded:Bold',sans-serif] text-xl text-[#00b2b7] mb-4">
            Невероятные спортивные приключения Кота-Мурчика
          </h1>
          
          {/* Page Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {pages.map((page) => (
              <button
                key={page.number}
                onClick={() => setCurrentPage(page.number)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === page.number
                    ? "bg-[#00b2b7] text-white shadow-lg"
                    : "bg-gray-100 text-[#2c2c2c] hover:bg-gray-200"
                }`}
              >
                <div className="font-['Unbounded:Medium',sans-serif] text-sm">
                  {page.number}
                </div>
                <div className="text-xs opacity-80">{page.title}</div>
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-4 max-w-[595px] mx-auto">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-6 py-2 rounded-lg font-['Unbounded:Medium',sans-serif] ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#00b2b7] text-white hover:bg-[#009499]"
              }`}
            >
              ← Назад
            </button>
            <span className="font-['Unbounded:Regular',sans-serif] text-sm text-[#2c2c2c]">
              Страница {currentPage} из {pages.length}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(pages.length, currentPage + 1))}
              disabled={currentPage === pages.length}
              className={`px-6 py-2 rounded-lg font-['Unbounded:Medium',sans-serif] ${
                currentPage === pages.length
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#00b2b7] text-white hover:bg-[#009499]"
              }`}
            >
              Вперед →
            </button>
          </div>
        </div>
      </div>

      {/* Current Page Display */}
      <div className="max-w-[595px] mx-auto py-8 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden relative h-[843px]">
          {currentPageData?.component}
        </div>
      </div>
    </div>
  );
}