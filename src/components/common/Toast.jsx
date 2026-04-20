import { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={`rounded-xl px-5 py-3 shadow-lg text-white ${
          type === "error" ? "bg-red-500" : "bg-green-600"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;