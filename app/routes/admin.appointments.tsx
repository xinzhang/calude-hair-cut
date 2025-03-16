import { useState } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { supabase } from "~/lib/supabase";
import type { Appointment } from "~/types";

export const loader = async () => {
  try {
    // 从 Supabase 获取所有预约
    console.log('Fetching appointments from Supabase...');
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Appointments data:', data);
    return json({ appointments: data || [] });
  } catch (error) {
    console.error("Error loading appointments:", error);
    return json({ appointments: [], error: "加载预约数据失败" });
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const action = formData.get("action") as string;
  const id = formData.get("id") as string;

  try {
    if (action === "confirm") {
      const { error } = await supabase
        .from("appointments")
        .update({ status: "confirmed" })
        .eq("id", id);

      if (error) throw error;
    } else if (action === "cancel") {
      const { error } = await supabase
        .from("appointments")
        .update({ status: "cancelled" })
        .eq("id", id);

      if (error) throw error;
    } else if (action === "delete") {
      const { error } = await supabase
        .from("appointments")
        .delete()
        .eq("id", id);

      if (error) throw error;
    }

    return json({ success: true });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return json({ success: false, error: "更新预约状态失败" });
  }
};

export default function AppointmentsAdmin() {
  const { appointments, error } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  
  // 筛选条件
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDate, setFilterDate] = useState("");
  
  // 获取服务和造型师名称映射
  const serviceNames: Record<string, string> = {
    "men-haircut": "男士理发",
    "women-haircut": "女士理发",
    "coloring": "染发服务",
    "perm": "烫发服务",
    "treatment": "护发服务",
    "styling": "造型服务"
  };
  
  const stylistNames: Record<string, string> = {
    "any": "任何可用发型师",
    "zhang-wei": "张伟 (创意总监)",
    "li-na": "李娜 (资深设计师)",
    "wang-qiang": "王强 (高级设计师)",
    "chen-mei": "陈美 (设计师)",
    "liu-ming": "刘明 (设计师)"
  };
  
  // 状态显示映射
  const statusDisplay: Record<string, { text: string, className: string }> = {
    "pending": { text: "待确认", className: "bg-yellow-100 text-yellow-800" },
    "confirmed": { text: "已确认", className: "bg-green-100 text-green-800" },
    "cancelled": { text: "已取消", className: "bg-red-100 text-red-800" }
  };
  
  // 应用筛选
  const filteredAppointments = appointments ? appointments.filter(appointment => {
    if (filterStatus !== "all" && appointment.status !== filterStatus) {
      return false;
    }
    
    if (filterDate && appointment.date !== filterDate) {
      return false;
    }
    
    return true;
  }) : [];
  
  // 处理确认预约
  const handleConfirm = (id: number) => {
    if (confirm("确定要确认这个预约吗？")) {
      fetcher.submit(
        { action: "confirm", id: id.toString() },
        { method: "post" }
      );
    }
  };
  
  // 处理取消预约
  const handleCancel = (id: number) => {
    if (confirm("确定要取消这个预约吗？")) {
      fetcher.submit(
        { action: "cancel", id: id.toString() },
        { method: "post" }
      );
    }
  };
  
  // 处理删除预约
  const handleDelete = (id: number) => {
    if (confirm("确定要删除这个预约吗？此操作不可恢复。")) {
      fetcher.submit(
        { action: "delete", id: id.toString() },
        { method: "post" }
      );
    }
  };
  
  // 格式化日期显示
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">预约管理</h1>
        <div className="flex space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">所有状态</option>
            <option value="pending">待确认</option>
            <option value="confirmed">已确认</option>
            <option value="cancelled">已取消</option>
          </select>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      {filteredAppointments.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-gray-600">没有找到符合条件的预约</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">联系方式</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">服务</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">发型师</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAppointments.map((appointment: Appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${statusDisplay[appointment.status].className}`}>
                        {statusDisplay[appointment.status].text}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{formatDate(appointment.date)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{appointment.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{appointment.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>{appointment.phone}</div>
                      <div className="text-xs text-gray-500">{appointment.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{serviceNames[appointment.service] || appointment.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{stylistNames[appointment.stylist] || appointment.stylist || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        {appointment.status === "pending" && (
                          <button
                            onClick={() => handleConfirm(appointment.id)}
                            className="text-xs bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
                          >
                            确认
                          </button>
                        )}
                        {appointment.status !== "cancelled" && (
                          <button
                            onClick={() => handleCancel(appointment.id)}
                            className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded"
                          >
                            取消
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(appointment.id)}
                          className="text-xs bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                        >
                          删除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">预约统计</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="text-blue-800 text-sm font-medium">总预约</div>
              <div className="text-2xl font-bold">{appointments ? appointments.length : 0}</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <div className="text-yellow-800 text-sm font-medium">待确认</div>
              <div className="text-2xl font-bold">
                {appointments ? appointments.filter(a => a.status === "pending").length : 0}
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="text-green-800 text-sm font-medium">已确认</div>
              <div className="text-2xl font-bold">
                {appointments ? appointments.filter(a => a.status === "confirmed").length : 0}
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <div className="text-red-800 text-sm font-medium">已取消</div>
              <div className="text-2xl font-bold">
                {appointments ? appointments.filter(a => a.status === "cancelled").length : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
