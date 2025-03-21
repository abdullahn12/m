import { FaCalendar, FaUser, FaTags } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "كيفية تحسين أداء موقعك الإلكتروني",
    excerpt: "تعرف على أفضل الممارسات لتحسين سرعة وأداء موقعك الإلكتروني",
    author: "أحمد محمد",
    date: "2024-01-15",
    category: "تطوير الويب",
    image: "https://via.placeholder.com/600x400"
  },
  {
    id: 2,
    title: "دليلك الشامل لأتمتة التسويق الرقمي",
    excerpt: "اكتشف كيف يمكنك أتمتة عمليات التسويق لتوفير الوقت وزيادة الفعالية",
    author: "سارة أحمد",
    date: "2024-01-10",
    category: "التسويق الرقمي",
    image: "https://via.placeholder.com/600x400"
  }
];

export const Blog = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">المدونة</h1>
          <p className="text-xl text-gray-600">آخر المقالات والنصائح في عالم التقنية</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  <a href={`/blog/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center">
                    <FaUser className="ml-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendar className="ml-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <FaTags className="ml-1" />
                    {post.category}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
