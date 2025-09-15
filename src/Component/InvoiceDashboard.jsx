import React, { useState } from "react";
import IncomeTrendChart from "./IncomeTrendChart";
import TimePeriodSelector from "./TimePeriodSelector";
import InvoiceList from "./InvoiceList";
import Logo from "./Logo";

const InvoiceDashboard = () => {
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState(false);
  const [newInvoice, setNewInvoice] = useState({ title: "", amount: "" });

  const [invoices, setInvoices] = useState([
    { id: 1, title: "Client Name", amount: "₹1,25,000", due: "2024-06-15", status: "Update Status", isDropdown: true },
    { id: 2, title: "Client Name", amount: "₹1,25,000", due: "2024-06-15", status: "Unpaid" },
    { id: 3, title: "Income Trend", amount: "₹1,25,000", due: "2024-06-15", status: "Disputed" },
  ]);

  const handleToggleInvoiceForm = () => setShowNewInvoiceForm(!showNewInvoiceForm);

  const handleCreateInvoice = () => {
    if (!newInvoice.title || !newInvoice.amount) return;
    const id = invoices.length + 1;
    const today = new Date().toISOString().split("T")[0];
    setInvoices([
      ...invoices,
      { id, title: newInvoice.title, amount: `₹${newInvoice.amount}`, due: today, status: "Update Status", isDropdown: true },
    ]);
    setNewInvoice({ title: "", amount: "" });
    setShowNewInvoiceForm(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-purple-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg ">
        <div className="text-2xl font-medium cursor-pointer hover:text-purple-700">&#10216; Back</div>
        <div className="text-2xl font-semibold">Dashboard</div>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="max-w-md mx-auto p-4 bg-white rounded-tl-4xl rounded-tr-4xl mt-4">
        {/* Create New Invoice Card */}
        <div
          className="bg-white rounded-3xl shadow-md p-6 text-center mt-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={handleToggleInvoiceForm}
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-[#A64AC9] to-[#7E2CC2] text-white rounded-full flex items-center justify-center text-3xl mb-3">
            +
          </div>
          <h2 className="text-[#7E2CC2] font-medium text-lg">Create New Invoice</h2>
          <p className="text-gray-600 text-sm mt-1">Start by creating and sending new invoice</p>
          <p className="text-[#7E2CC2] text-sm mt-3 hover:underline">Or Upload an existing invoice and set payment reminder</p>
        </div>

        {/* New Invoice Form */}
        {showNewInvoiceForm && (
          <div className="bg-gray-50 rounded-3xl p-4 mt-4 border border-gray-200">
            <input
              type="text"
              placeholder="Invoice Name"
              value={newInvoice.title}
              onChange={(e) => setNewInvoice({ ...newInvoice, title: e.target.value })}
              className="w-full p-2 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="number"
              placeholder="Amount"
              value={newInvoice.amount}
              onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
              className="w-full p-2 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={handleCreateInvoice}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Create Invoice
            </button>
          </div>
        )}

        <TimePeriodSelector />
        <IncomeTrendChart />
        {/* Invoice List */}
        <InvoiceList invoices={invoices} />
        <Logo />
      </div>
    </div>
  );
};

export default InvoiceDashboard;
