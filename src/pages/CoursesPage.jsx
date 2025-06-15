import Header from "../components/Header/Header";

const CoursePage = () => {
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800">
      {/* Header */}
      <Header />

      {/* Introduction */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Our Academic Programs</h2>
        <p className="text-lg">
          Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs 
          designed to equip students with the knowledge and skills demanded by today’s dynamic global landscape.
          Our curriculum is regularly updated to reflect industry trends and academic advancements.
        </p>
      </section>

      {/* UG Programs */}
      <section className="p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Undergraduate Programs (UG)</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>B.Sc.</strong> – Computer Science, IT, Biotechnology (3 years)</li>
          <li><strong>B.Com</strong> – Accounting & Finance, Banking & Insurance (3 years)</li>
          <li><strong>B.A.</strong> – English Literature, Psychology (3 years)</li>
        </ul>
      </section>

      {/* PG Programs */}
      <section className="p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Postgraduate Programs (PG)</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>M.Sc.</strong> – Computer Science, IT (2 years)</li>
          <li><strong>M.Com</strong> – Commerce (2 years)</li>
        </ul>
      </section>

      {/* Fee Structure Table */}
      <section className="p-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Program Details & Fee Structure (Annual)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-indigo-100 text-indigo-800">
              <tr>
                <th className="py-2 px-4 text-left">Program Type</th>
                <th className="py-2 px-4 text-left">Course Name</th>
                <th className="py-2 px-4 text-left">Duration</th>
                <th className="py-2 px-4 text-left">Annual Fee (INR)</th>
                <th className="py-2 px-4 text-left">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">UG</td>
                <td className="py-2 px-4">B.Sc. Computer Science</td>
                <td className="py-2 px-4">3 Years</td>
                <td className="py-2 px-4">₹85,000</td>
                <td className="py-2 px-4">10+2 with PCM (50%)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">UG</td>
                <td className="py-2 px-4">B.Com Accounting & Finance</td>
                <td className="py-2 px-4">3 Years</td>
                <td className="py-2 px-4">₹70,000</td>
                <td className="py-2 px-4">10+2 Commerce (45%)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">PG</td>
                <td className="py-2 px-4">M.Sc. Information Technology</td>
                <td className="py-2 px-4">2 Years</td>
                <td className="py-2 px-4">₹95,000</td>
                <td className="py-2 px-4">B.Sc. IT/CS (50%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Vocational Courses */}
      <section className="p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Specialized & Vocational Courses</h3>
        <p>
          We offer certificate and diploma courses in Digital Marketing, Web Development, Data Analytics, and Soft Skills Development.
        </p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Inquire About Courses</button>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white text-center py-4 mt-8">
        <p>© 2025 Vivekanand College. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoursePage;
