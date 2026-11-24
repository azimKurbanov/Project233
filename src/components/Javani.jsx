import { useState } from "react";

const questions = [
  {
    question: "С чего начать работу с 1С-Товары?",
    answer: (
      <p>
        Начните с подключения сервиса 1С-Товары и настройки обмена данными с
        вашей программой 1С. После этого можно анализировать продажи,
        управлять запасами и использовать рекомендации сервиса.
      </p>
    ),
  },
  {
    question: "Как подключить 1С-Ритейл Чекер и 1С-Товары?",
    answer: (
      <>
        <p>
          Для этого подключите бесплатную начальную версию 1С-Ритейл Чекер.
        </p>
        <p className="mt-2">
          Каждый месяц вы получите бесплатный доступ к сервисам с рекомендациями:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли;</li>
          <li>какие товары у вас в избытке, а какие следует держать в минимальном количестве;</li>
          <li>какие товары стоит переместить, чтобы избежать излишков и дефицита.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Средний чек, о чём он может рассказать?",
    answer: (
      <p>
        Средний чек показывает, сколько в среднем покупатель тратит за одну
        покупку. Он помогает оценивать поведение клиентов, эффективность
        продаж и результативность акций.
      </p>
    ),
  },
  {
    question: "Сценарии автозаказа сервиса 1С-Товары",
    answer: (
      <p>
        Автозаказ помогает планировать закупки на основе данных о продажах и
        остатках. Сценарии позволяют учитывать спрос, сроки поставки и
        необходимые запасы товаров.
      </p>
    ),
  },
  {
    question: "Как подключить 1С-Ритейл Чекер и 1С-Товары?",
    answer: (
      <p>
        Подключите сервис в личном кабинете 1С и выполните настройку обмена
        данными. После подключения проверьте, что информация о товарах,
        продажах и остатках обновляется корректно.
      </p>
    ),
  },
  {
    question: "Методы и формулы расчета торговой наценки",
    answer: (
      <p>
        Торговая наценка рассчитывается как разница между розничной ценой и
        себестоимостью товара. В процентах от себестоимости формула выглядит
        так: (розничная цена − себестоимость) / себестоимость × 100%.
      </p>
    ),
  },
];

export default function Javani() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <main className="min-h-screen bg-[#f6f7f7] px-4 py-8 text-[#626969] sm:px-8">
      <section className="mx-auto w-full max-w-3xl">
        <h1 className="mb-7 text-xl font-semibold tracking-tight text-[#5c6464]">
          Ответы на вопросы
        </h1>

        <div className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={`${item.question}-${index}`}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(30,45,45,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-[#626969] transition-colors hover:text-[#3e7770] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7eb6a8]"
                >
                  <span>{item.question}</span>
                  <svg
                    aria-hidden="true"
                    className={`h-4 w-4 shrink-0 text-[#6eaa9c] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m7 10 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs leading-6 text-[#929999]">
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
