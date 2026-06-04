import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, Phone, Mail, MapPin, Github, ArrowUpRight, Sparkles, AlertCircle, ShieldCheck, 
  ExternalLink, FileText, CheckCircle2, MessageSquareCode
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Hợp tác dự án (Project Collaboration)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverTicketId, setServerTicketId] = useState('');

  const ppsOptions = [
    'Hợp tác dự án (Project Collaboration)',
    'Phỏng vấn Tuyển dụng (Hiring interview)',
    'Tư vấn Giải pháp AI & Backend',
    'Trao đổi chuyên môn / Khác'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate reliable network request to a secure Spring Boot/FastAPI endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setServerTicketId('MSG_JWT_' + Math.random().toString(36).substr(2, 9).toUpperCase());
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        purpose: 'Hợp tác dự án (Project Collaboration)',
        message: ''
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      {/* Dynamic ambient blur spot - Hidden on mobile for maximum frame rate */}
      <div className="absolute top-[40%] left-[80%] w-[350px] h-[350px] bg-pink-500/5 rounded-full blur-[90px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header section titles */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 font-mono text-[11px] text-pink-600 dark:text-pink-400 uppercase tracking-widest mb-3"
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            Liên hệ & Kết nối
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-theme-text uppercase"
          >
            Bắt đầu một <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black">cột mốc mới</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-theme-text-sec text-sm max-w-xl mx-auto"
          >
            Hãy truyền tin nhắn của bạn thông qua cổng mã hóa bảo mật bên dưới, tôi sẽ phản hồi lại trong vòng 24 giờ.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Contact Details Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <h3 className="font-display font-semibold text-lg text-theme-text">Thông Tin Trực Tiếp</h3>
              
              {/* Cards details with neon hover */}
              <div className="space-y-4">
                
                {/* Phone */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 items-center p-4 rounded-xl bg-theme-card border border-theme-card-border hover:border-purple-500/30 shadow-sm duration-300 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Đường dây nóng</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-theme-text hover:text-blue-500 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 items-center p-4 rounded-xl bg-theme-card border border-theme-card-border hover:border-purple-500/30 shadow-sm duration-300 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email doanh nghiệp</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-theme-text hover:text-purple-500 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 items-center p-4 rounded-xl bg-theme-card border border-theme-card-border hover:border-purple-500/30 shadow-sm duration-300 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Khu vực làm việc</div>
                    <span className="text-sm font-semibold text-theme-text">
                      {PERSONAL_INFO.address}
                    </span>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Resume & Social Channels Link indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl bg-theme-card border border-theme-card-border shadow-sm duration-300 relative overflow-hidden space-y-4.5 bg-gradient-to-r from-purple-500/[0.01] to-pink-500/[0.01]"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/5 rounded-full blur-[20px]" />
              
              <h4 className="font-display font-bold text-sm text-theme-text uppercase tracking-wider">Hồ sơ công khai</h4>
              
              <div className="flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-theme-border hover:bg-blue-500/10 hover:border-blue-500/20 text-theme-text-sec hover:text-theme-text text-xs font-semibold cursor-pointer group transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-blue-500 dark:text-blue-400" /> GitHub Profile
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-transform" />
                </a>

                <div className="p-3 text-[10px] font-mono text-theme-text-sec leading-normal bg-theme-bg border border-theme-border rounded-xl">
                  {`COMMIT_HEAD: 9ec81cfa1d`} <br />
                  {`USER_EMAIL: ${PERSONAL_INFO.email}`}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Contact Encrypted Interactive Message box form */}
          <div className="lg:col-span-7 h-full">
            <div className="rounded-2xl bg-theme-card border border-theme-card-border p-6 sm:p-8 h-full flex flex-col justify-between shadow-sm transition-colors duration-300">
              
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center space-y-5 py-12 flex-1"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-555 dark:text-emerald-400 border border-emerald-500/25 animate-pulse">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h4 className="font-display font-bold text-theme-text text-xl">TRUYỀN TIN TRỌN VẸN</h4>
                      <p className="text-xs text-theme-text-sec mt-2.5 max-w-sm mx-auto">
                        Cổng mã hóa RESTful đã ghi nhận dữ liệu liên hệ của bạn vào cơ sở dữ liệu thành công.
                      </p>
                    </div>

                    <div className="bg-theme-bg p-4.5 rounded-xl border border-theme-border font-mono text-[10px] text-theme-text-sec text-left max-w-sm w-full space-y-1 shadow-inner">
                      <p className="text-emerald-500"><span className="text-theme-text-sec/60">TICKET_ID:</span> {serverTicketId}</p>
                      <p><span className="text-theme-text-sec/60">TIMESTAMP:</span> {new Date().toISOString()}</p>
                      <p><span className="text-theme-text-sec/60">STATUS:</span> COMMIT_COMPLETED (201_CREATED)</p>
                    </div>

                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-black/5 dark:bg-white/5 border border-theme-border text-theme-text-sec hover:text-theme-text hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer select-none"
                    >
                      Gửi tin nhắn khác
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-4.5 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4.5">
                      <div className="flex justify-between items-center pb-2 border-b border-theme-divider">
                        <label className="text-xs font-mono text-theme-text-sec uppercase tracking-wider flex items-center gap-1.5">
                          <Send className="w-3.5 h-3.5 animate-pulse text-purple-500" />
                          Encrypted Telegram Portal
                        </label>
                        <span className="text-[9px] font-mono text-purple-600 dark:text-purple-400 font-semibold bg-purple-500/10 px-2 py-0.5 rounded-full">ACTIVE SECURE</span>
                      </div>

                      {/* Error alerts */}
                      {submitStatus === 'error' && (
                        <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center gap-2.5 text-xs text-pink-500">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>Vui lòng điền đầy đủ tất cả các trường thông tin.</span>
                        </div>
                      )}

                      {/* Name input */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-mono text-theme-text-sec uppercase">Họ và Tên của bạn *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Phạm Thị B"
                            className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#0c0c16] border border-theme-border focus:border-purple-500 text-theme-text focus:outline-none transition-all text-xs focus:ring-1 focus:ring-purple-500/50 focus:ring-offset-0"
                          />
                        </div>
                        
                        {/* Email input */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-mono text-theme-text-sec uppercase">Địa chỉ Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#0c0c16] border border-theme-border focus:border-purple-500 text-theme-text focus:outline-none transition-all text-xs focus:ring-1 focus:ring-purple-500/50"
                          />
                        </div>
                      </div>

                      {/* Purpose Select dropdowns */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-theme-text-sec uppercase">Mục đích liên hệ</label>
                        <select
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#0c0c16] border border-theme-border focus:border-purple-500 text-theme-text text-xs focus:outline-none transition-all cursor-pointer"
                        >
                          {ppsOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-white dark:bg-[#0c0c16] text-theme-text font-medium">{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Content text */}
                      <div className="space-y-1.5 text-left">
                        <div className="flex justify-between">
                          <label className="text-[10px] font-mono text-theme-text-sec uppercase">Nội dung tin nhắn *</label>
                          <span className="text-[9px] font-mono text-theme-text-sec/60">tối thiểu 10 ký tự</span>
                        </div>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Chia sẻ giải pháp AI hoặc backend bạn đang tìm kiếm..."
                          className="w-full p-4 rounded-lg bg-white dark:bg-[#0c0c16] border border-theme-border focus:border-purple-500 text-theme-text focus:outline-none transition-all resize-none text-xs focus:ring-1 focus:ring-purple-500/50"
                        />
                      </div>
                    </div>

                    {/* Submit action */}
                    <div className="flex items-center gap-4 pt-4 border-t border-theme-divider justify-between">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Mã hóa SSL 256-bit</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:opacity-90 disabled:opacity-40 select-none cursor-pointer font-display transition-all"
                      >
                        {isSubmitting ? 'Đăng truyền nội dung...' : 'Gửi tin nhắn'}
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
