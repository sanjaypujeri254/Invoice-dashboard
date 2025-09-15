import React from "react";
import { FaBell } from "react-icons/fa";

const statusStyles = {
  "Update Status": "bg-[#7E2CC2] text-white",
  Unpaid: "bg-gray-300 text-gray-700",
  Disputed: "bg-red-200 text-red-800",
  Paid: "bg-green-200 text-green-800",
  "Partially Paid": "bg-yellow-200 text-yellow-800",
  Overdue: "bg-red-200 text-red-800",
};

const InvoiceList = ({ invoices }) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-300 mt-6">
      <div className="text-gray-600 font-medium mb-3 flex items-center justify-between cursor-pointer">
        <span>Your Invoices</span>
        <span>&#9660;</span>
      </div>
      <div className="space-y-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="bg-white rounded-xl p-4 border border-gray-200 flex justify-between items-center"
          >
            <div>
              <div className="font-medium text-gray-800">{invoice.title}</div>
              <div className="text-sm text-gray-500">
                {invoice.amount}, Due: {invoice.due}
              </div>
            </div>
            {invoice.isDropdown ? (
              <button className="bg-[#7E2CC2] text-white text-sm px-3 py-1 rounded-full hover:bg-[#6b22aa] transition">
                {invoice.status} &#9660;
              </button>
            ) : (
              <div className={`text-sm px-3 py-1 rounded-full ${statusStyles[invoice.status]}`}>
                {invoice.status}
                {invoice.showIcon && <FaBell className="inline-block ml-2 text-red-600" />}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;
