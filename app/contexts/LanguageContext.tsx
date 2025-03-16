import React, { createContext, useState, useContext, ReactNode } from 'react';

// 定义语言类型
type Language = 'zh' | 'en';

// 定义上下文类型
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// 创建上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译字典
const translations: Record<Language, Record<string, string>> = {
  zh: {
    // 导航
    'home': '首页',
    'services': '服务项目',
    'stylists': '发型师',
    'appointment': '预约服务',
    'contact': '联系我们',
    'switchLanguage': '英文',
    'Menu': '菜单',
    
    // 首页
    'heroTitle': 'StyleCuts 理发店',
    'heroSubtitle': '专业的理发和造型服务，让您焕然一新',
    'bookNow': '立即预约',
    'whyChooseUs': '为什么选择 StyleCuts',
    'professionalTeam': '专业团队',
    'professionalTeamDesc': '我们的发型师都经过严格培训，拥有丰富的经验和专业的技能。',
    'qualityProducts': '优质产品',
    'qualityProductsDesc': '我们只使用高品质的护发和造型产品，确保您的头发健康亮丽。',
    'convenientService': '便捷服务',
    'convenientServiceDesc': '在线预约系统让您可以随时预约服务，不用排队等候。',
    'ourServices': '我们的热门服务',
    'menHaircut': '男士理发',
    'womenHaircut': '女士理发',
    'coloringService': '染发服务',
    'permService': '烫发服务',
    'viewAllServices': '查看全部服务',
    'testimonials': '客户评价',
    'bookAppointment': '立即预约您的专业理发服务',
    'bookAppointmentDesc': '无论您需要简单的修剪还是全新的造型，我们的专业团队都能满足您的需求。',
    'onlineBooking': '在线预约',
    
    // 服务页面
    'servicePageTitle': '我们的服务',
    'servicePageDesc': '探索 StyleCuts 提供的专业理发和造型服务，为您带来全新风格。',
    'menServices': '男士服务',
    'classicHaircut': '经典理发',
    'classicHaircutDesc': '包括洗发、剪发和简单造型，适合各种场合。',
    'premiumStyling': '精致造型',
    'premiumStylingDesc': '包括洗发、剪发和专业造型，让您在重要场合更加出彩。',
    'beardTrim': '胡须修整',
    'beardTrimDesc': '专业胡须修剪和造型，打造完美面部线条。',
    'womenServices': '女士服务',
    'precisionCut': '精剪服务',
    'precisionCutDesc': '包括洗发、剪发和吹风造型，适合日常造型需求。',
    'advancedStyling': '高级造型',
    'advancedStylingDesc': '由资深设计师为您提供量身定制的剪发和造型服务。',
    'deepTreatment': '深层护理',
    'deepTreatmentDesc': '专业护发疗程，修复受损发质，让秀发恢复健康光泽。',
    'coloringServices': '染烫服务',
    'singleColor': '单色染发',
    'singleColorDesc': '基础染发服务，提供多种颜色选择，让您焕然一新。',
    'highlights': '挑染/渐变染',
    'highlightsDesc': '创意染发服务，打造个性时尚的发色效果。',
    'permServicePage': '烫发服务',
    'permServiceDesc': '根据脸型和需求，为您打造自然卷曲或波浪发型。',
    'lookingForService': '寻找您需要的服务？',
    'serviceQuestion': '如果您对我们的服务有任何疑问，或需要个性化的服务建议，请随时联系我们。',
    'about': '约',
    'minutes': '分钟',
    
    // 发型师页面
    'stylistsTitle': '我们的发型师团队',
    'stylistsDesc': '每位发型师都拥有独特的风格和专业技能，致力于为您带来最佳的理发体验。',
    'seniorDesigners': '高级设计师',
    'designerTeam': '设计师团队',
    'experience': '经验',
    'joinOurTeam': '加入我们的团队',
    'joinDesc': '我们始终欢迎有激情、有才华的发型师加入我们的团队。如果您热爱理发事业并希望在专业环境中发展，请与我们联系。',
    'learnMore': '了解更多',
    
    // 联系页面
    'contactTitle': '联系我们',
    'contactDesc': '如有任何问题或建议，请随时与我们联系，我们将尽快回复您。',
    'contactInfo': '联系方式',
    'address': '地址',
    'phoneNumber': '联系电话',
    'emailAddress': '电子邮箱',
    'frontDesk': '前台',
    'appointmentLine': '预约专线',
    'businessHours': '营业时间',
    'weekdays': '周一至周五',
    'saturday': '周六',
    'sunday': '周日',
    'sendMessage': '发送信息',
    'messageSent': '信息已发送！',
    'thankYou': '感谢您的留言，我们将尽快回复您。',
    'return': '返回',
    'name': '姓名',
    'email': '电子邮箱',
    'phone': '电话',
    'subject': '主题',
    'message': '留言内容',
    'send': '发送信息',
    'faq': '常见问题',
    'howToBook': '如何预约理发服务？',
    'howToBookAnswer': '您可以通过我们的在线预约系统、电话或直接来店预约。建议提前预约以确保您心仪的发型师有空。',
    'cancelBooking': '如果需要取消预约怎么办？',
    'cancelBookingAnswer': '请至少提前 24 小时通知我们，您可以通过电话或邮件取消预约。',
    'childrenService': '是否提供儿童理发服务？',
    'childrenServiceAnswer': '是的，我们为各个年龄段的客户提供服务，包括儿童。',
    'paymentMethods': '可以使用什么支付方式？',
    'paymentMethodsAnswer': '我们接受现金、信用卡、微信支付和支付宝等多种支付方式。',
    'followUs': '关注我们',
    'rightsReserved': '保留所有权利。',
    
    // 预约页面
    'appointmentTitle': '在线预约',
    'appointmentDesc': '选择您喜欢的日期、时间和服务，快速预约理发服务。',
    'appointmentInfo': '预约信息',
    'fillInfo': '填写预约信息',
    'requiredField': '是必填项',
    'date': '日期',
    'time': '时间',
    'selectTime': '选择时间',
    'serviceItem': '服务项目',
    'selectService': '选择服务',
    'stylist': '发型师',
    'selectStylist': '选择发型师',
    'additionalInfo': '附加信息',
    'submit': '提交预约',
    'submitting': '提交中...',
    'appointmentSuccess': '预约成功！',
    'appointmentReceived': '我们已收到您的预约请求，将很快与您联系确认。',
    'appointmentDetails': '预约详情已发送至您的邮箱。',
    'appointmentGuide': '预约指南',
    'step1': '1. 选择服务',
    'step1Desc': '选择您需要的服务类型，从简单的剪发到专业的染烫服务，我们提供多种选择。',
    'step2': '2. 选择时间',
    'step2Desc': '选择您方便的日期和时间，我们会根据您的选择安排发型师。',
    'step3': '3. 确认预约',
    'step3Desc': '提交预约后，我们会通过电话或邮件联系您确认预约详情。'
  },
  en: {
    // 导航
    'home': 'Home',
    'services': 'Services',
    'stylists': 'Stylists',
    'appointment': 'Appointment',
    'contact': 'Contact',
    'switchLanguage': 'Chinese',
    'Menu': 'Menu',
    
    // 首页
    'heroTitle': 'StyleCuts Hair Salon',
    'heroSubtitle': 'Professional haircut and styling services to give you a fresh new look',
    'bookNow': 'Book Now',
    'whyChooseUs': 'Why Choose StyleCuts',
    'professionalTeam': 'Professional Team',
    'professionalTeamDesc': 'Our stylists are rigorously trained and have rich experience and professional skills.',
    'qualityProducts': 'Quality Products',
    'qualityProductsDesc': 'We only use high-quality hair care and styling products to ensure your hair stays healthy and beautiful.',
    'convenientService': 'Convenient Service',
    'convenientServiceDesc': 'The online booking system allows you to make appointments anytime without waiting in line.',
    'ourServices': 'Our Popular Services',
    'menHaircut': 'Men\'s Haircut',
    'womenHaircut': 'Women\'s Haircut',
    'coloringService': 'Hair Coloring',
    'permService': 'Perm Service',
    'viewAllServices': 'View All Services',
    'testimonials': 'Testimonials',
    'bookAppointment': 'Book Your Professional Haircut Service Now',
    'bookAppointmentDesc': 'Whether you need a simple trim or a whole new style, our professional team can meet your needs.',
    'onlineBooking': 'Book Online',
    
    // 服务页面
    'servicePageTitle': 'Our Services',
    'servicePageDesc': 'Explore the professional haircut and styling services offered by StyleCuts to bring you a brand new style.',
    'menServices': 'Men\'s Services',
    'classicHaircut': 'Classic Haircut',
    'classicHaircutDesc': 'Includes washing, cutting, and simple styling, suitable for various occasions.',
    'premiumStyling': 'Premium Styling',
    'premiumStylingDesc': 'Includes washing, cutting, and professional styling, making you stand out on important occasions.',
    'beardTrim': 'Beard Trim',
    'beardTrimDesc': 'Professional beard trimming and styling, creating perfect facial contours.',
    'womenServices': 'Women\'s Services',
    'precisionCut': 'Precision Cut',
    'precisionCutDesc': 'Includes washing, cutting, and blow-drying, suitable for daily styling needs.',
    'advancedStyling': 'Advanced Styling',
    'advancedStylingDesc': 'Senior stylists provide tailored cutting and styling services for you.',
    'deepTreatment': 'Deep Treatment',
    'deepTreatmentDesc': 'Professional hair care treatment to repair damaged hair and restore healthy shine.',
    'coloringServices': 'Coloring & Perm Services',
    'singleColor': 'Single Color',
    'singleColorDesc': 'Basic coloring service, offering a variety of color options to give you a fresh look.',
    'highlights': 'Highlights/Ombre',
    'highlightsDesc': 'Creative coloring service, creating unique and fashionable color effects.',
    'permServicePage': 'Perm Service',
    'permServiceDesc': 'Create natural curls or waves based on your face shape and needs.',
    'lookingForService': 'Looking for a Service?',
    'serviceQuestion': 'If you have any questions about our services or need personalized service recommendations, please feel free to contact us.',
    'about': 'About',
    'minutes': 'minutes',
    
    // 发型师页面
    'stylistsTitle': 'Our Stylist Team',
    'stylistsDesc': 'Each stylist has a unique style and professional skills, dedicated to bringing you the best haircut experience.',
    'seniorDesigners': 'Senior Designers',
    'designerTeam': 'Designer Team',
    'experience': 'Experience',
    'joinOurTeam': 'Join Our Team',
    'joinDesc': 'We always welcome passionate and talented stylists to join our team. If you love hairdressing and wish to develop in a professional environment, please contact us.',
    'learnMore': 'Learn More',
    
    // 联系页面
    'contactTitle': 'Contact Us',
    'contactDesc': 'If you have any questions or suggestions, please feel free to contact us, and we will reply to you as soon as possible.',
    'contactInfo': 'Contact Information',
    'address': 'Address',
    'phoneNumber': 'Phone Number',
    'emailAddress': 'Email Address',
    'frontDesk': 'Front Desk',
    'appointmentLine': 'Appointment Line',
    'businessHours': 'Business Hours',
    'weekdays': 'Monday to Friday',
    'saturday': 'Saturday',
    'sunday': 'Sunday',
    'sendMessage': 'Send Message',
    'messageSent': 'Message Sent!',
    'thankYou': 'Thank you for your message, we will reply to you as soon as possible.',
    'return': 'Return',
    'name': 'Name',
    'email': 'Email',
    'phone': 'Phone',
    'subject': 'Subject',
    'message': 'Message',
    'send': 'Send Message',
    'faq': 'FAQ',
    'howToBook': 'How to book a haircut service?',
    'howToBookAnswer': 'You can book through our online reservation system, by phone, or by visiting our store. We recommend booking in advance to ensure your preferred stylist is available.',
    'cancelBooking': 'What if I need to cancel an appointment?',
    'cancelBookingAnswer': 'Please notify us at least 24 hours in advance. You can cancel by phone or email.',
    'childrenService': 'Do you provide haircut services for children?',
    'childrenServiceAnswer': 'Yes, we provide services for customers of all ages, including children.',
    'paymentMethods': 'What payment methods do you accept?',
    'paymentMethodsAnswer': 'We accept cash, credit cards, WeChat Pay, and Alipay, among other payment methods.',
    'followUs': 'Follow Us',
    'rightsReserved': 'All rights reserved.',
    
    // 预约页面
    'appointmentTitle': 'Online Booking',
    'appointmentDesc': 'Choose your preferred date, time, and service for a quick haircut appointment.',
    'appointmentInfo': 'Appointment Information',
    'fillInfo': 'Fill in Appointment Information',
    'requiredField': 'is required',
    'date': 'Date',
    'time': 'Time',
    'selectTime': 'Select Time',
    'serviceItem': 'Service Item',
    'selectService': 'Select Service',
    'stylist': 'Stylist',
    'selectStylist': 'Select Stylist',
    'additionalInfo': 'Additional Information',
    'submit': 'Submit Appointment',
    'submitting': 'Submitting...',
    'appointmentSuccess': 'Appointment Success!',
    'appointmentReceived': 'We have received your appointment request and will contact you soon to confirm.',
    'appointmentDetails': 'Appointment details have been sent to your email.',
    'appointmentGuide': 'Appointment Guide',
    'step1': '1. Choose a Service',
    'step1Desc': 'Choose the type of service you need, from simple haircuts to professional coloring and perm services.',
    'step2': '2. Choose a Time',
    'step2Desc': 'Select a date and time that is convenient for you, and we will arrange a stylist based on your choice.',
    'step3': '3. Confirm Appointment',
    'step3Desc': 'After submitting your appointment, we will contact you by phone or email to confirm the details.'
  }
};

// 提供者组件
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to detect browser language
  const detectBrowserLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const browserLang = window.navigator.language;
      if (browserLang.startsWith('zh')) {
        return 'zh';
      }
    }
    return 'en';
  };
  
  const [language, setLanguage] = useState<Language>(() => detectBrowserLanguage());
  
  // 翻译函数
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 使用上下文的钩子
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};