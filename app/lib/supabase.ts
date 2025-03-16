import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://knjkhtfcxwnakwobfxkk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuamtodGZjeHduYWt3b2JmeGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwODcyMzcsImV4cCI6MjA1NzY2MzIzN30.LwZx6ZaMe8jBTuoARtSh6ImSxpuYxmKhe0qUJpLA0oQ';

// 创建 Supabase 客户端实例
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 注意：在实际应用中，你可能想要将这些密钥放在环境变量中
