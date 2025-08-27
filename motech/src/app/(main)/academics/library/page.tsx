import Link from "next/link";

export default function LibraryPage() {
  return (
    <section className="lg:mt-[140px] mt-[100px] w-full flex flex-col items-center justify-center p-8 bg-gray-50 pb-8">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Our Virtual Library</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are currently working on setting up our virtual library to provide you with a vast collection of scholarly articles, journals, e-books, and databases. We appreciate your patience as we build this valuable resource.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Please check back soon for updates on our library&apos;s grand opening!
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto mb-12">
        <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-center mb-6">
            The virtual library is currently under construction and will be available soon.
          </p>
        </div>
      </div>
    </section>
  );
}
