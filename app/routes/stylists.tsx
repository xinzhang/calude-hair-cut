import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "发型师团队 - StyleCuts" },
    { name: "description", content: "认识 StyleCuts 的专业发型师团队，每位成员都拥有丰富的经验和独特的专长。" },
  ];
};

export default function Stylists() {
  return (
    <div className="w-full">
      {/* 页面标题 */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">我们的发型师团队</h1>
          <p className="text-xl max-w-2xl mx-auto">每位发型师都拥有独特的风格和专业技能，致力于为您带来最佳的理发体验。</p>
        </div>
      </section>
      
      {/* 高级设计师 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">高级设计师</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="张伟" className="w-full h-80 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">张伟</h3>
                <p className="text-gray-500 mb-3">创意总监 / 15年经验</p>
                <p className="text-gray-600 mb-4">擅长时尚剪裁、创意染发和高级造型，曾获得多项国际发型大赛奖项。</p>
                <div className="flex gap-3">
                  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">男士发型</span>
                  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">染发</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="李娜" className="w-full h-80 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">李娜</h3>
                <p className="text-gray-500 mb-3">资深设计师 / 12年经验</p>
                <p className="text-gray-600 mb-4">专注于女性时尚发型和色彩设计，擅长根据客户面部特点打造个性化发型。</p>
                <div className="flex gap-3">
                  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">女士发型</span>
                  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">烫发</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="王强" className="w-full h-80 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">王强</h3>
                <p className="text-gray-500 mb-3">高级设计师 / 8年经验</p>
                <p className="text-gray-600 mb-4">专精于男士精致剪裁和造型，对当代流行男士发型有独到见解。</p>
                <div className="flex gap-3">
                  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">男士发型</span>
                  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">胡须造型</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 设计师 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">设计师团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="陈美" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">陈美</h3>
                <p className="text-gray-500 mb-2">设计师 / 6年经验</p>
                <p className="text-gray-600 text-sm">擅长女士时尚剪裁和烫发。</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="刘明" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">刘明</h3>
                <p className="text-gray-500 mb-2">设计师 / 5年经验</p>
                <p className="text-gray-600 text-sm">专注于男士流行发型和造型。</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="杨丽" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">杨丽</h3>
                <p className="text-gray-500 mb-2">设计师 / 4年经验</p>
                <p className="text-gray-600 text-sm">擅长染发和护发疗程。</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="赵阳" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">赵阳</h3>
                <p className="text-gray-500 mb-2">设计师 / 3年经验</p>
                <p className="text-gray-600 text-sm">专注于创意剪裁和年轻人时尚发型。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 加入团队 */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">加入我们的团队</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">我们始终欢迎有激情、有才华的发型师加入我们的团队。如果您热爱理发事业并希望在专业环境中发展，请与我们联系。</p>
          <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">了解更多</a>
        </div>
      </section>
    </div>
  );
}
