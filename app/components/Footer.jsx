export default function Footer() {
    return (
        <footer className="bg-white border-t border-emerald-100">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} New Beginnings. All rights reserved.
            </div>
        </footer>
    );
}
