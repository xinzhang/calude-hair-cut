import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];



export default function App() {
  return (
    <Document>
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    </Document>
  );
}

function Layout() {
  const { language } = useLanguage();
  
  // Update the html lang attribute and titles when language changes
  React.useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    
    // Get the current page route
    const path = window.location.pathname;
    
    // Update the title based on the route and language
    if (language === 'zh') {
      if (path === '/') {
        document.title = 'StyleCuts - 专业理发造型服务';
      } else if (path === '/services') {
        document.title = '服务项目 - StyleCuts';
      } else if (path === '/stylists') {
        document.title = '发型师团队 - StyleCuts';
      } else if (path === '/appointment') {
        document.title = '在线预约 - StyleCuts';
      } else if (path === '/contact') {
        document.title = '联系我们 - StyleCuts';
      }
    }
  }, [language]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
