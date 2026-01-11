import DashboardSidebar from "../components/DashboardSidebar";

const transactions = [
  {
    title: "دفع ثمن فيلا جزيرة ياس",
    date: "2012-01-14",
    amount: "5,000,000 جنيه مصري",
  },
  {
    title: "تم استرداد قيمة تأمين مزاد السيارات",
    date: "2012-01-14",
    amount: "5,000,000 جنيه مصري",
  },
  {
    title: "دفع ثمن فيلا جزيرة ياس",
    date: "2012-01-14",
    amount: "5,000,000 جنيه مصري",
  },
  {
    title: "دفع ثمن فيلا جزيرة ياس",
    date: "2012-01-14",
    amount: "5,000,000 جنيه مصري",
  },
];

const Payments = () => {
  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12 text-right">
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

          {/* Sidebar - Right */}
          <aside className="order-1 lg:sticky lg:top-32">
            <DashboardSidebar activeKey="wallet" />
          </aside>

          {/* Main Content - Left */}
          <div className="space-y-8 order-2">

            {/* Header with Buttons */}
            <div className="flex items-center justify-between">
              <button className="bg-[#9E7731] text-white px-8 py-3 rounded-lg font-bold text-[18px] shadow-sm hover:bg-[#8A6629] transition-all">
                المحفظة
              </button>
              <h2 className="text-[24px] font-bold text-[#1C1C28]">سجل المعاملات</h2>
            </div>

            {/* Transactions List */}
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex-1 text-right space-y-1">
                    <h3 className="text-[18px] font-bold text-[#1C1C28]">{transaction.title}</h3>
                    <p className="text-[14px] text-gray-500">{transaction.date}</p>
                  </div>
                  <div className="text-[18px] font-bold text-[#D94B4B]">{transaction.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;
