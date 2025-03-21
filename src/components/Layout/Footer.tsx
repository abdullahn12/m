import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">عن الشركة</h3>
            <p className="text-gray-400">
              نقدم حلولاً متكاملة لتطوير وتحسين مواقع الويب وأتمتة الأعمال
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {['الرئيسية', 'خدماتنا', 'من نحن', 'اتصل بنا'].map(item => (
                <li key={item}><Link to="/" className="text-gray-400 hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};
