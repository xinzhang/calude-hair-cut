import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "服务项目 - StyleCuts" },
    { name: "description", content: "StyleCuts 提供多种专业理发和造型服务，满足您的各种需求。" },
  ];
};

export default function Services() {
  return (
    <div className="w-full">
      {/* 页面标题 */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">我们的服务</h1>
          <p className="text-xl max-w-2xl mx-auto">探索 StyleCuts 提供的专业理发和造型服务，为您带来全新风格。</p>
        </div>
      </section>
      
      {/* 服务分类 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">男士服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="男士经典理发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">经典理发</h3>
                  <p className="text-gray-600 mb-4">包括洗发、剪发和简单造型，适合各种场合。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥88</p>
                    <span className="text-sm text-gray-500">约45分钟</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="男士精致造型" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">精致造型</h3>
                  <p className="text-gray-600 mb-4">包括洗发、剪发和专业造型，让您在重要场合更加出彩。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥128</p>
                    <span className="text-sm text-gray-500">约60分钟</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="男士胡须修整" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">胡须修整</h3>
                  <p className="text-gray-600 mb-4">专业胡须修剪和造型，打造完美面部线条。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥58</p>
                    <span className="text-sm text-gray-500">约30分钟</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">女士服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="女士精剪" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">精剪服务</h3>
                  <p className="text-gray-600 mb-4">包括洗发、剪发和吹风造型，适合日常造型需求。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥118</p>
                    <span className="text-sm text-gray-500">约60分钟</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1562594980-47eb2d78c55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="女士高级造型" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">高级造型</h3>
                  <p className="text-gray-600 mb-4">由资深设计师为您提供量身定制的剪发和造型服务。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥188</p>
                    <span className="text-sm text-gray-500">约90分钟</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="女士护发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">深层护理</h3>
                  <p className="text-gray-600 mb-4">专业护发疗程，修复受损发质，让秀发恢复健康光泽。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥168</p>
                    <span className="text-sm text-gray-500">约75分钟</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">染烫服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1605980625600-88d6635c992a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="单色染发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">单色染发</h3>
                  <p className="text-gray-600 mb-4">基础染发服务，提供多种颜色选择，让您焕然一新。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥238 起</p>
                    <span className="text-sm text-gray-500">约120分钟</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="挑染" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">挑染/渐变染</h3>
                  <p className="text-gray-600 mb-4">创意染发服务，打造个性时尚的发色效果。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥358 起</p>
                    <span className="text-sm text-gray-500">约150分钟</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="烫发" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">烫发服务</h3>
                  <p className="text-gray-600 mb-4">根据脸型和需求，为您打造自然卷曲或波浪发型。</p>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-bold">¥298 起</p>
                    <span className="text-sm text-gray-500">约180分钟</span>
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
          <h2 className="text-2xl font-bold mb-4">寻找您需要的服务？</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">如果您对我们的服务有任何疑问，或需要个性化的服务建议，请随时联系我们。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/appointment" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">立即预约</a>
            <a href="/contact" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300">联系我们</a>
          </div>
        </div>
      </section>
    </div>
  );
}
