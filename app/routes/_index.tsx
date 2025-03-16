import type { MetaFunction } from "@remix-run/node";
import { useLanguage } from "~/contexts/LanguageContext";

export const meta: MetaFunction = () => {
  // Don't use hooks in the meta function as it runs before the React tree is rendered
  return [
    { title: "StyleCuts - Professional Hair Styling Services" },
    { name: "description", content: "StyleCuts offers professional haircut and styling services to give you a fresh new look." },
  ];
};

export default function Index() {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* 英雄区域 */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-xl md:text-2xl mb-8">{t('heroSubtitle')}</p>
            <a href="/appointment" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">{t('bookNow')}</a>
          </div>
        </div>
      </section>
      
      {/* 我们的优势 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('whyChooseUs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('professionalTeam')}</h3>
              <p className="text-gray-600">{t('professionalTeamDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('qualityProducts')}</h3>
              <p className="text-gray-600">{t('qualityProductsDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('convenientService')}</h3>
              <p className="text-gray-600">{t('convenientServiceDesc')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 热门服务 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('ourServices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="男士理发" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('menHaircut')}</h3>
                <p className="text-gray-600 mb-4">包括剪发、造型和洗发服务。</p>
                <p className="text-orange-500 font-bold">¥88 起</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="女士理发" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('womenHaircut')}</h3>
                <p className="text-gray-600 mb-4">包括剪发、造型和护理服务。</p>
                <p className="text-orange-500 font-bold">¥118 起</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="染发服务" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('coloringService')}</h3>
                <p className="text-gray-600 mb-4">专业染发，多种颜色可选。</p>
                <p className="text-orange-500 font-bold">¥238 起</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="烫发服务" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('permService')}</h3>
                <p className="text-gray-600 mb-4">专业烫发，打造不同风格。</p>
                <p className="text-orange-500 font-bold">¥298 起</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300">{t('viewAllServices')}</a>
          </div>
        </div>
      </section>
      
      {/* 客户评价 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-6">&quot;在这里理发已经三年了，一直很满意。发型师们都很专业，服务很贴心，每次都能得到满意的效果。&quot;</p>
              <div className="font-medium">李先生</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-6">&quot;染发效果很好，颜色很自然，发质也没有受到损伤。而且店内环境很舒适，服务人员也很热情。&quot;</p>
              <div className="font-medium">王女士</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-6">&quot;在线预约系统很方便，不用排队等候。每次理发服务也都很准时，发型师的技术很好。&quot;</p>
              <div className="font-medium">张先生</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 预约部分 */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('bookAppointment')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('bookAppointmentDesc')}</p>
          <a href="/appointment" className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg inline-block transition duration-300">{t('onlineBooking')}</a>
        </div>
      </section>
    </div>
  );
}
