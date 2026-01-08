import { FiFile } from "react-icons/fi";

const UploadBox = ({ label }) => {
  return (
    <div className="border border-dashed border-line rounded-2xl p-4 text-center text-sm text-muted bg-white/50">
      <div className="flex flex-col items-center gap-2">
        <FiFile className="text-xl" />
        <div className="font-semibold text-ink">{label}</div>
        <div>اسحب الصور هنا أو انقر للتحديد</div>
        <div className="text-xs">10MB حتى</div>
      </div>
    </div>
  );
};

export default UploadBox;
