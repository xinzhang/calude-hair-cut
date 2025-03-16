import { useState } from "react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "管理员登录 - StyleCuts" },
    { name: "description", content: "StyleCuts 理发店管理员登录" },
  ];
};

// 这是一个简化的管理员认证
// 在实际应用中，应该使用更安全的认证方式，如 Supabase Auth、Remix Auth 等
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  
  // 简单的硬编码验证，仅用于演示
  // 在实际应用中，应该使用加密存储的密码和安全的验证方式
  if (username === "admin" && password === "stylecuts123") {
    // 创建一个新的响应对象，用于设置 cookie
    const response = new Response(null, {
      status: 302,
      headers: {
        Location: "/admin/appointments",
      },
    });
    
    // 设置一个简单的 cookie 来标记用户已登录
    // 注意：这只是示例，实际应用中应使用更安全的方法
    response.headers.append("Set-Cookie", "isLoggedIn=true; Path=/; HttpOnly");
    
    return response;
  }
  
  return json(
    { error: "用户名或密码错误" },
    { status: 401 }
  );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 这里可以添加验证用户是否已登录的逻辑
  // 如果已登录，则重定向到管理后台
  
  return null;
};

export default function AdminLogin() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">StyleCuts 管理员登录</h1>
          <p className="text-gray-600 mt-2">请输入您的管理员凭据</p>
        </div>
        
        {actionData?.error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {actionData.error}
          </div>
        )}
        
        <Form method="post">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">用户名</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">密码</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? '登录中...' : '登录'}
          </button>
        </Form>
        
        <div className="mt-6 text-center">
          <a href="/" className="text-orange-500 hover:underline">返回网站</a>
        </div>
      </div>
    </div>
  );
}
