import React from 'react'
import Groc from '../assets/Grocery shopping-amico 1.png'
import Coffe from '../assets/Coffee shop-amico 1.png'

function oqil() {
  return (
    <div className="min-h-screen bg-[#F7F8F7] px-5 md:px-10 py-6">

      <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        <div>
          <h1 className="text-xl font-bold text-[#292832] mb-7">
            Для розничных магазинов и ресторанов
          </h1>

          <div className="max-w-[500px] mx-auto">
            <img
              src={Groc}
              alt="Grocery shopping"
              className="w-full aspect-square "
            />

            <img src={Coffe} alt="Coffee shop" className="w-full aspect-square"/>

          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div className="bg-white p-7 rounded-[30px] shadow-sm">
            <h2 className="text-lg font-bold text-[#292832]">
              Получайте рекомендации по управлению ассортиментом
            </h2>

            <p className="text-sm text-[#89918D] mt-5">
              Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».
            </p>

            <p className="text-sm text-[#89918D] mt-4 leading-relaxed">
              Каждую неделю вам на почту будет приходить письмо с рекомендациями: <br />

              • какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок; <br />
              • какие товары у вас в избытке, а какие следует отнести к неликвидам; <br />
              • какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.
            </p>

            <p className="text-sm text-[#327F36] mt-5 cursor-pointer">
              Подробнее о 1С-Ритейл Чекер →
            </p>
          </div>

          <div className="bg-white p-7 rounded-[30px] shadow-sm">
            <h2 className="text-lg font-bold text-[#292832]">
              Прогнозируйте спрос и управляйте запасами
            </h2>

            <p className="text-sm text-[#89918D] mt-5 leading-relaxed">
              Используйте 1С-Товары для более точного прогноза спроса.
              1С-Товары учитывают средние продажи, тренды, периоды дефицита
              товара (пробелы на полках), сезонность спроса, праздники,
              распродажи, акции.
              Ежедневно 1С-Товары автоматически проверяют минимальные
              остатки и своевременно отправляют заявку поставщику,
              используя результаты прогноза. Так вы избежите как
              дефицита, так и излишков товара в магазине.
            </p>

            <p className="text-sm text-[#327F36] mt-5 cursor-pointer">
              Подробнее о 1С-Товары →
            </p>
          </div>

          <div className="bg-white p-7 rounded-[30px] shadow-sm">
            <h2 className="text-lg font-bold text-[#292832]">
              Планируйте ассортимент без ошибок
            </h2>

            <p className="text-sm text-[#89918D] mt-5 leading-relaxed">
              Узнайте, какие товары приносят вам прибыль и всегда должны
              быть в ассортименте. И, наоборот, выводите из ассортимента
              товары с низкой наценкой и оборачиваемостью.
            </p>
          </div>

          <div className="bg-white p-7 rounded-[30px] shadow-sm">
            <h2 className="text-lg font-bold text-[#292832]">
              Контролируйте бизнес и повышайте прибыль
            </h2>

            <p className="text-sm text-[#89918D] mt-5 leading-relaxed">
              Для этого используйте блок аналитики.
            </p>

            <p className="text-sm text-[#89918D] mt-4 leading-relaxed">
              Пробуйте разные варианты повышения продаж – новые товары,
              изменение наценки, перераспределение площади. Убедиться
              в правильности действий помогут отчеты. Блок аналитики
              доступен через Интернет и сделан как приборная панель
              индикаторов деятельности, что позволяет быстро заметить
              изменения.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default oqil
