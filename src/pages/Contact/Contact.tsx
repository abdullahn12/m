import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال النموذج
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">اتصل بنا</h1>
          <p className="text-xl text-gray-600">نحن هنا لمساعدتك والإجابة على استفساراتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">أرسل رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">الرسالة</label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">معلومات التواصل</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 text-xl ml-4" />
                <div>
                  <h3 className="font-semibold">الهاتف</h3>
                  <p className="text-gray-600">+966 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 text-xl ml-4" />
                <div>
                  <h3 className="font-semibold">البريد الإلكتروني</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-xl ml-4" />
                <div>
                  <h3 className="font-semibold">العنوان</h3>
                  <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
