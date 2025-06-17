import React from 'react';

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-xl p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="text-gray-700 max-h-[60vh] overflow-y-auto">{content}</div>
        <div className="mt-6 text-right">
          <button onClick={onClose} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
