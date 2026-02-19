const StatsCard = ({ title, value, color }) => {
  return (
    <div className="bg-white border border-[#F3C9CF]
                    rounded-2xl p-5 shadow-sm
                    hover:shadow-md hover:border-[#E8AEB7]
                    transition">

      <h3 className="text-[#6B4A4E] text-sm mb-2 font-medium">
        {title}
      </h3>

      <p className={`text-2xl font-bold ${color || "text-[#7A1E2C]"}`}>
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
