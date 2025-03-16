import { Link, Outlet, Form } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "管理后台 - StyleCuts" },
    { name: "description", content: "StyleCuts 理发店管理后台" },
  ];
};

// 保护管理员路由
// 在实际应用中，应该使用更安全的方式，如 session cookie 或 JWT token
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 获取当前 URL 路径
  const url = new URL(request.url);
  const path = url.pathname;
  
  // 如果是登录页，则不需要验证
  if (path === "/admin/login") {
    return null;
  }
  
  // 简单验证示例
  // 在实际应用中，应该验证 cookie 或 token
  
  // 从 cookie 中获取登录状态
  const cookieHeader = request.headers.get("Cookie") || "";
  const isLoggedIn = cookieHeader.includes("isLoggedIn=true");
  
  if (!isLoggedIn) {
    return redirect("/admin/login");
  }
  
  return null;
};

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold mr-10">StyleCuts 管理后台</Link>
              <div className="flex space-x-6 items-center">
                <Link to="/admin/appointments" className="hover:text-orange-300">预约管理</Link>
                <Link to="/" className="hover:text-orange-300">返回网站</Link>
                <Form method="post" action="/admin/logout">
                  <button type="submit" className="hover:text-orange-300">登出</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} StyleCuts 管理系统</p>
        </div>
      </footer>
    </div>
  );
}
