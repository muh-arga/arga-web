export default function Footer() {
  return (
    <div className="w-full mt-16 sm:mt-50">
      <footer className="bg-white rounded-lg shadow-sm">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-4 sm:my-6 border-gray-400 sm:mx-auto lg:my-8" />
          <span className="block text-xs sm:text-sm text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Arga
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}