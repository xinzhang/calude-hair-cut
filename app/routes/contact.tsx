import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "联系我们 - StyleCuts" },
    { name: "description", content: "与 StyleCuts 理发店取得联系，了解更多信息或提出您的建议和反馈。" },
  ];
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单验证和提交逻辑
    console.log(formData);
    // 模拟表单提交成功
    setSubmitted(true);
  };
  
  return (
    <div className="w-full">
      {/* 页面标题 */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511345624224-d2e0283e512f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-xl max-w-2xl mx-auto">如有任何问题或建议，请随时与我们联系，我们将尽快回复您。</p>
        </div>
      </section>
      
      {/* 联系信息和表单 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* 联系信息 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-6">联系方式</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">地址</h3>
                <p className="text-gray-600 mb-2">北京市朝阳区时尚大道88号</p>
                <p className="text-gray-600">邮编: 100000</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">联系电话</h3>
                <p className="text-gray-600 mb-2">前台: 010-12345678</p>
                <p className="text-gray-600">预约专线: 010-87654321</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">电子邮箱</h3>
                <p className="text-gray-600 mb-2">info@stylecuts.com</p>
                <p className="text-gray-600">appointment@stylecuts.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">营业时间</h3>
                <p className="text-gray-600 mb-2">周一至周五: 10:00 - 20:00</p>
                <p className="text-gray-600 mb-2">周六: 10:00 - 22:00</p>
                <p className="text-gray-600">周日: 12:00 - 18:00</p>
              </div>
            </div>
            
            {/* 联系表单 */}
            <div className="w-full md:w-2/3 px-4">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">发送信息</h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-2">信息已发送！</h3>
                      <p>感谢您的留言，我们将尽快回复您。</p>
                    </div>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    >
                      返回
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名 *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱 *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">电话</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">主题 *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">留言内容 *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="请输入您的留言内容..."
                      ></textarea>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                      >
                        发送信息
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 地图区域 */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">我们的位置</h2>
          {/* 这里通常会放置一个地图，可以使用谷歌地图或百度地图的嵌入代码 */}
          <div className="bg-gray-300 h-96 w-full rounded-lg flex items-center justify-center">
            <p className="text-gray-600 text-lg">地图加载中...</p>
            {/* 实际使用时，这里可以替换为真实的地图嵌入代码 */}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">我们位于市中心，交通便利，欢迎光临。</p>
          </div>
        </div>
      </section>
      
      {/* 常见问题 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">常见问题</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">1. 如何预约理发服务？</h3>
              <p className="text-gray-600">您可以通过我们的在线预约系统、电话或直接来店预约。建议提前预约以确保您心仪的发型师有空。</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">2. 如果需要取消预约怎么办？</h3>
              <p className="text-gray-600">请至少提前 24 小时通知我们，您可以通过电话或邮件取消预约。</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">3. 是否提供儿童理发服务？</h3>
              <p className="text-gray-600">是的，我们为各个年龄段的客户提供服务，包括儿童。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">4. 可以使用什么支付方式？</h3>
              <p className="text-gray-600">我们接受现金、信用卡、微信支付和支付宝等多种支付方式。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
