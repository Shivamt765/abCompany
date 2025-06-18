// components/Modal.tsx
import React from 'react';

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
        <h2 className="text-xl font-bold mb-4">{'Privacy Policy'}</h2>
        <div className="text-gray-700 mb-6">{'We value your privacy and are committed to protecting your personal information.We only collect the information you provide, such as name, email, and contact number.We do not sell or share your information with third-party services without your consent.All data is stored securely and used solely to improve our services and customer experience.You may request deletion or review of your data at any time by contacting us at info@abhishekcompany.com.This policy is subject to change and we encourage you to review it periodically.'}</div>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
