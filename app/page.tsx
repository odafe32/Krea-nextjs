import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header with theme toggle */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pixel Perfect
          </h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Pixel Perfect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A Next.js application with Tailwind CSS and seamless dark mode
            support.
          </p>

          {/* Sample content to demonstrate theming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Light Theme
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clean and bright interface for daytime use.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Dark Theme
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easy on the eyes for low-light environments.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
