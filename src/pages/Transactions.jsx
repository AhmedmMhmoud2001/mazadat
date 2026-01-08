import DashboardSidebar from "../components/DashboardSidebar";
import StatusPill from "../components/StatusPill";

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
];

const participation = [
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "lost", label: "تم تجاوزك" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "win", label: "فزت" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "pending", label: "انتظار" },
    time: "2 ساعة",
  },
];

const notifications = [
  {
    title: "فزت بالمزاد!",
    description:
      "لوريم إيبسوم دولار سيت أميت، كونسيكتتور أديسبسكينغ إيليت.",
    status: "success",
    time: "6 دقائق",
  },
  {
    title: "خسرت بالمزاد!",
    description:
      "لوريم إيبسوم دولار سيت أميت، كونسيكتتور أديسبسكينغ إيليت.",
    status: "warning",
    time: "6 دقائق",
  },
];

const Transactions = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <div className="section-card p-6 space-y-4">
          <h3 className="text-xl">سجل المعاملات</h3>
          {transactions.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="bg-white/70 rounded-2xl p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-muted">{item.date}</div>
              </div>
              <div className="text-danger font-semibold">{item.amount}</div>
            </div>
          ))}
        </div>

        <div className="section-card p-6 space-y-4">
          <h3 className="text-xl">مشاركاتي في المزادات</h3>
          <div className="space-y-3 text-sm">
            {participation.map((row, index) => (
              <div
                key={`${row.auction}-${index}`}
                className="bg-white/70 rounded-2xl px-4 py-3 grid gap-2 md:grid-cols-5 md:items-center"
              >
                <div>{row.auction}</div>
                <div className="text-muted">{row.price}</div>
                <div className="text-muted">{row.participants}</div>
                <StatusPill status={row.status.key} label={row.status.label} />
                <div className="text-muted">{row.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card p-6 space-y-4">
          <h3 className="text-xl">الإشعارات</h3>
          {notifications.map((note, index) => (
            <div
              key={`${note.title}-${index}`}
              className="bg-white/70 rounded-2xl p-4 flex flex-col gap-2"
            >
              <div className="font-semibold">{note.title}</div>
              <div className="text-sm text-muted">{note.description}</div>
              <div className="text-xs text-muted">{note.time}</div>
            </div>
          ))}
        </div>
      </div>

      <DashboardSidebar activeKey="dashboard" />
    </section>
  );
};

export default Transactions;
