# StyleCuts 理发网站

这是一个使用 Remix.js 和 Tailwind CSS 构建的理发店网站，具有预约功能和管理后台。

## 功能

- 响应式设计，适配桌面和移动设备
- 展示理发店服务和发型师团队
- 在线预约系统，与 Supabase 数据库集成
- 管理后台，用于管理预约

## 技术栈

- [Remix.js](https://remix.run/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 样式
- [Supabase](https://supabase.com/) - 数据库和后端服务

## 设置

1. 克隆仓库
```
git clone <repository-url>
```

2. 安装依赖
```
npm install
```

3. 设置 Supabase

在 Supabase 中创建一个名为 `appointments` 的表，包含以下字段：
- `id` (int, primary key, auto-increment)
- `created_at` (timestamp with time zone, default: now())
- `name` (text)
- `phone` (text)
- `email` (text)
- `date` (text)
- `time` (text)
- `service` (text)
- `stylist` (text)
- `message` (text)
- `status` (text, default: 'pending')

4. 配置环境变量：

在项目根目录创建一个 `.env` 文件，包含 Supabase 凭据：
```
SUPABASE_URL=https://knjkhtfcxwnakwobfxkk.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 运行项目

开发环境：
```
npm run dev
```

生产构建：
```
npm run build
npm start
```

## 使用管理后台

1. 访问 `/admin/login` 路径
2. 使用以下凭据登录：
   - 用户名: admin
   - 密码: stylecuts123
3. 登录后，您将能够查看和管理预约

## 项目结构

- `/app/routes/` - 页面路由
  - `_index.tsx` - 首页
  - `services.tsx` - 服务页面
  - `stylists.tsx` - 发型师团队页面
  - `appointment.tsx` - 预约页面
  - `contact.tsx` - 联系我们页面
  - `/admin/` - 管理后台路由
- `/app/components/` - 可复用组件
- `/app/lib/` - 工具和库
- `/app/types/` - TypeScript 类型定义
