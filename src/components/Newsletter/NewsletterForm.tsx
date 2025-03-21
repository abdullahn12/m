import { useState } from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // محاكاة إرسال البريد الإلكتروني
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-blue-600 text-white py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">اشترك في نشرتنا البريدية</h3>
          <p>احصل على آخر الأخبار والتحديثات</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {status === 'loading' ? 'جاري الإرسال...' : 'اشترك الآن'}
            </button>
          </div>
          {status === 'success' && (
            <p className="text-sm mt-2 text-center">تم الاشتراك بنجاح!</p>
          )}
        </form>
      </div>
    </div>
  );
};
