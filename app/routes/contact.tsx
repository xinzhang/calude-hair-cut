import { useState } from "react";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useLanguage } from "~/contexts/LanguageContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - StyleCuts" },
    { name: "description", content: "Contact StyleCuts hair salon to learn more information or provide your suggestions and feedback." },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  // 模拟表单处理
  const formData = await request.formData();
  
  // 实际应用中，这里应该有真实的表单处理逻辑
  return json({ success: true });
};

export default function Contact() {
  const { t } = useLanguage();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  return (
    <div className="w-full">
      {/* 页面标题 */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511345624224-d2e0283e512f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{t('contactTitle')}</h1>
          <p className="text-xl max-w-2xl mx-auto">{t('contactDesc')}</p>
        </div>
      </section>
      
      {/* 联系信息和表单 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* 联系信息 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-6">{t('contactInfo')}</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">{t('address')}</h3>
                <p className="text-gray-600 mb-2">北京市朝阳区时尚大道88号</p>
                <p className="text-gray-600">邮编: 100000</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">{t('phoneNumber')}</h3>
                <p className="text-gray-600 mb-2">{t('frontDesk')}: 010-12345678</p>
                <p className="text-gray-600">{t('appointmentLine')}: 010-87654321</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">{t('emailAddress')}</h3>
                <p className="text-gray-600 mb-2">info@stylecuts.com</p>
                <p className="text-gray-600">appointment@stylecuts.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('businessHours')}</h3>
                <p className="text-gray-600 mb-2">{t('weekdays')}: 10:00 - 20:00</p>
                <p className="text-gray-600 mb-2">{t('saturday')}: 10:00 - 22:00</p>
                <p className="text-gray-600">{t('sunday')}: 12:00 - 18:00</p>
              </div>
            </div>
            
            {/* 联系表单 */}
            <div className="w-full md:w-2/3 px-4">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">{t('sendMessage')}</h2>
                
                {actionData?.success ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-2">{t('messageSent')}</h3>
                      <p>{t('thankYou')}</p>
                    </div>
                    <a 
                      href="/contact"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    >
                      {t('return')}
                    </a>
                  </div>
                ) : (
                  <Form method="post">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t('name')} *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t('email')} *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">{t('phone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">{t('subject')} *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('message')} *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder=""
                      ></textarea>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? '...' : t('send')}
                      </button>
                    </div>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 常见问题 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">{t('faq')}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('howToBook')}</h3>
              <p className="text-gray-600">{t('howToBookAnswer')}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('cancelBooking')}</h3>
              <p className="text-gray-600">{t('cancelBookingAnswer')}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('childrenService')}</h3>
              <p className="text-gray-600">{t('childrenServiceAnswer')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('paymentMethods')}</h3>
              <p className="text-gray-600">{t('paymentMethodsAnswer')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 地图区域 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">{t('address')}</h2>
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
    </div>
  );
}
