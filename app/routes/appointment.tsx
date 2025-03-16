import { useState } from "react";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { supabase } from "~/lib/supabase";
import type { AppointmentFormData } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "在线预约 - StyleCuts" },
    { name: "description", content: "在 StyleCuts 预约您的理发服务，快速便捷，随时随地。" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  const appointmentData: AppointmentFormData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    date: formData.get("date") as string,
    time: formData.get("time") as string,
    service: formData.get("service") as string,
    stylist: formData.get("stylist") as string || "",
    message: formData.get("message") as string || ""
  };

  // 验证必填字段
  const errors: Partial<Record<keyof AppointmentFormData, string>> = {};
  
  if (!appointmentData.name) errors.name = "姓名是必填项";
  if (!appointmentData.phone) errors.phone = "电话是必填项";
  if (!appointmentData.email) errors.email = "电子邮箱是必填项";
  if (!appointmentData.date) errors.date = "日期是必填项";
  if (!appointmentData.time) errors.time = "时间是必填项";
  if (!appointmentData.service) errors.service = "服务项目是必填项";
  
  // 如果有错误，返回错误信息
  if (Object.keys(errors).length > 0) {
    return json({ errors, values: appointmentData }, { status: 400 });
  }

  try {
    // 插入数据到 Supabase
    const { data, error } = await supabase
      .from('appointments')
      .insert([{
        ...appointmentData,
        status: 'pending'
      }]);

    if (error) throw error;

    // 成功提交
    return json({ success: true });
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return json({ 
      errors: { form: "提交预约时出错，请稍后再试" },
      values: appointmentData 
    }, { status: 500 });
  }
}

export default function Appointment() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  const services = [
    { id: "men-haircut", name: "男士理发" },
    { id: "women-haircut", name: "女士理发" },
    { id: "coloring", name: "染发服务" },
    { id: "perm", name: "烫发服务" },
    { id: "treatment", name: "护发服务" },
    { id: "styling", name: "造型服务" }
  ];
  
  const stylists = [
    { id: "any", name: "任何可用发型师" },
    { id: "zhang-wei", name: "张伟 (创意总监)" },
    { id: "li-na", name: "李娜 (资深设计师)" },
    { id: "wang-qiang", name: "王强 (高级设计师)" },
    { id: "chen-mei", name: "陈美 (设计师)" },
    { id: "liu-ming", name: "刘明 (设计师)" }
  ];
  
  // 生成时间选项
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 10; hour <= 19; hour++) {
      options.push(`${hour}:00`);
      if (hour !== 19) {
        options.push(`${hour}:30`);
      }
    }
    return options;
  };
  
  const timeOptions = generateTimeOptions();

  // 获取表单默认值（如果有）
  const defaultValues = actionData?.values || {};
  const errors = actionData?.errors || {};
  
  // 获取当前日期作为最小日期
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div className="w-full">
      {/* 页面标题 */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">在线预约</h1>
          <p className="text-xl max-w-2xl mx-auto">选择您喜欢的日期、时间和服务，快速预约理发服务。</p>
        </div>
      </section>
      
      {/* 预约表单 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-orange-500 text-white p-8 py-12">
                <h2 className="text-2xl font-bold mb-6">预约信息</h2>
                <div className="mb-8">
                  <h3 className="font-semibold mb-2">营业时间</h3>
                  <p className="text-sm">周一至周五: 10:00 - 20:00</p>
                  <p className="text-sm">周六: 10:00 - 22:00</p>
                  <p className="text-sm">周日: 12:00 - 18:00</p>
                </div>
                <div className="mb-8">
                  <h3 className="font-semibold mb-2">联系方式</h3>
                  <p className="text-sm">电话: 010-12345678</p>
                  <p className="text-sm">邮箱: info@stylecuts.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">地址</h3>
                  <p className="text-sm">北京市朝阳区时尚大道88号</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                {actionData?.success ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-2">预约成功！</h3>
                      <p>我们已收到您的预约请求，将很快与您联系确认。</p>
                    </div>
                    <p className="mb-6">预约详情已发送至您的邮箱。</p>
                    <a 
                      href="/appointment"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    >
                      返回
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">填写预约信息</h2>
                    {errors.form && (
                      <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                        {errors.form}
                      </div>
                    )}
                    <Form method="post">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名 *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={defaultValues.name}
                            className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">电话 *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            defaultValue={defaultValues.phone}
                            className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱 *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          defaultValue={defaultValues.email}
                          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">日期 *</label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            min={today}
                            defaultValue={defaultValues.date}
                            className={`w-full px-4 py-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          />
                          {errors.date && (
                            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-gray-700 font-medium mb-2">时间 *</label>
                          <select
                            id="time"
                            name="time"
                            defaultValue={defaultValues.time}
                            className={`w-full px-4 py-2 border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          >
                            <option value="">选择时间</option>
                            {timeOptions.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                          {errors.time && (
                            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">服务项目 *</label>
                          <select
                            id="service"
                            name="service"
                            defaultValue={defaultValues.service}
                            className={`w-full px-4 py-2 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          >
                            <option value="">选择服务</option>
                            {services.map(service => (
                              <option key={service.id} value={service.id}>{service.name}</option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="stylist" className="block text-gray-700 font-medium mb-2">发型师</label>
                          <select
                            id="stylist"
                            name="stylist"
                            defaultValue={defaultValues.stylist}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          >
                            <option value="">选择发型师</option>
                            {stylists.map(stylist => (
                              <option key={stylist.id} value={stylist.id}>{stylist.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">附加信息</label>
                        <textarea
                          id="message"
                          name="message"
                          defaultValue={defaultValues.message}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="请告诉我们您的特殊要求或其他需要了解的信息..."
                        ></textarea>
                      </div>
                      
                      <div className="text-right">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? '提交中...' : '提交预约'}
                        </button>
                      </div>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 预约提示 */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">预约指南</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-500 font-bold text-xl mb-3">1. 选择服务</div>
                <p className="text-gray-600">选择您需要的服务类型，从简单的剪发到专业的染烫服务，我们提供多种选择。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-500 font-bold text-xl mb-3">2. 选择时间</div>
                <p className="text-gray-600">选择您方便的日期和时间，我们会根据您的选择安排发型师。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-500 font-bold text-xl mb-3">3. 确认预约</div>
                <p className="text-gray-600">提交预约后，我们会通过电话或邮件联系您确认预约详情。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
