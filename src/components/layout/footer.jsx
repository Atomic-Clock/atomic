export default function footer() {
  return (
    <footer className="h-12 bg-gray-900 border-t border-gray-800 flex items-center justify-center text-gray-400 text-xs">
      © {new Date().getFullYear()} USAC Virtual Lab — From Atom to Stabilized Time
    </footer>
  );
}