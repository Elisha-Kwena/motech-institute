export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Tailwind CSS Complete Test
        </h1>
        
        {/* Test Section 1: Basic Tailwind Classes */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Basic Tailwind CSS Test</h2>
          
          <div className="mb-4 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p>This should have a blue background and blue left border if Tailwind is working.</p>
          </div>
          
          <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
            <p>This should have a green background and green left border if Tailwind is working.</p>
          </div>
          
          <div className="p-4 bg-red-100 border-l-4 border-red-500">
            <p className="text-red-700">This should have red text if Tailwind is working.</p>
          </div>
        </div>
        
        {/* Test Section 2: Manual CSS Test */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Manual CSS Test</h2>
          <p className="manual-test">If this text is red and bold, manual CSS is working.</p>
          <p className="text-gray-600 mt-2">If the boxes above are not styled but this text is gray, Tailwind is partially working.</p>
        </div>
        
        {/* Test Section 3: Configuration Status */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Configuration Status</h2>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2 text-green-400">Current Configuration</h3>
            <p>Using standard Tailwind CSS plugin (not @tailwindcss/postcss)</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">If Tailwind is still not working:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Stop the dev server (Ctrl+C)</li>
              <li>Delete <code className="bg-gray-700 px-1 rounded">.next</code> folder</li>
              <li>Run <code className="bg-gray-700 px-1 rounded">npm run dev</code> again</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Package Versions</h3>
            <p>Tailwind CSS: 3.3.6</p>
            <p>PostCSS: 8.4.32</p>
            <p>Autoprefixer: 10.4.16</p>
          </div>
        </div>
      </div>
    </div>
  );
}