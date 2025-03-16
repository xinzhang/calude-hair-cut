import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

// 将管理员首页重定向到预约管理页面
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirect("/admin/appointments");
};
