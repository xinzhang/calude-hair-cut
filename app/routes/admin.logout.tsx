import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

// 当访问此路由时自动重定向到登录页
export const loader = async () => {
  return redirect("/admin/login");
};

// 处理登出操作
export const action = async ({ request }: ActionFunctionArgs) => {
  // 创建响应并清除登录 cookie
  const response = new Response(null, {
    status: 302,
    headers: {
      Location: "/admin/login",
    },
  });
  
  // 设置同名 cookie 但设置为空值和过期时间来删除 cookie
  response.headers.append("Set-Cookie", "isLoggedIn=; Path=/; HttpOnly; Max-Age=0");
  
  return response;
};
