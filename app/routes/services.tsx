import type { MetaFunction } from "@remix-run/node";
import { useLanguage } from "~/contexts/LanguageContext";

export const meta: MetaFunction = () => {
  // Don't use hooks in meta function
  return [
    { title: "Services - StyleCuts" },
    { name: "description", content: "StyleCuts offers a variety of professional haircut and styling services to meet your needs." },
  ];
};

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full">
      {/* 页面标题 */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{t('servicePageTitle')}</h1>
          <p className="text-xl max-w-2xl mx-auto">{t('servicePageDesc')}</p>
        </div>
      </section>
      
      {/* 服务分类 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">{t('menServices')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="男士经典理发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('classicHaircut')}</h3>
                  <p className="text-gray-600 mb-4">{t('classicHaircutDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥88</p>
                    <span className="text-sm text-gray-500">{t('about')}45{t('minutes')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="男士精致造型" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('premiumStyling')}</h3>
                  <p className="text-gray-600 mb-4">{t('premiumStylingDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥128</p>
                    <span className="text-sm text-gray-500">{t('about')}60{t('minutes')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="男士胡须修整" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('beardTrim')}</h3>
                  <p className="text-gray-600 mb-4">{t('beardTrimDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥58</p>
                    <span className="text-sm text-gray-500">{t('about')}30{t('minutes')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">{t('womenServices')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="女士精剪" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('precisionCut')}</h3>
                  <p className="text-gray-600 mb-4">{t('precisionCutDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥118</p>
                    <span className="text-sm text-gray-500">{t('about')}60{t('minutes')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1562594980-47eb2d78c55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="女士高级造型" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('advancedStyling')}</h3>
                  <p className="text-gray-600 mb-4">{t('advancedStylingDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥188</p>
                    <span className="text-sm text-gray-500">{t('about')}90{t('minutes')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="女士护发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('deepTreatment')}</h3>
                  <p className="text-gray-600 mb-4">{t('deepTreatmentDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥168</p>
                    <span className="text-sm text-gray-500">{t('about')}75{t('minutes')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">{t('coloringServices')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1605980625600-88d6635c992a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="单色染发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('singleColor')}</h3>
                  <p className="text-gray-600 mb-4">{t('singleColorDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥238 起</p>
                    <span className="text-sm text-gray-500">{t('about')}120{t('minutes')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="挑染" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('highlights')}</h3>
                  <p className="text-gray-600 mb-4">{t('highlightsDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥358 起</p>
                    <span className="text-sm text-gray-500">{t('about')}150{t('minutes')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="烫发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t('permServicePage')}</h3>
                  <p className="text-gray-600 mb-4">{t('permServiceDesc')}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥298 起</p>
                    <span className="text-sm text-gray-500">{t('about')}180{t('minutes')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 预约提示 */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('lookingForService')}</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">{t('serviceQuestion')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/appointment" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">{t('bookNow')}</a>
            <a href="/contact" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300">{t('contact')}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
