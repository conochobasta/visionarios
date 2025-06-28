export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-indigo-600 text-white font-semibold rounded-full px-6 py-3 hover:bg-indigo-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
