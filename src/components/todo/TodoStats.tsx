interface TodoStatsProps {
  total: number;
  completed: number;
}

export const TodoStats = ({ total, completed }: TodoStatsProps) => {
  const remaining = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="text-2xl font-bold text-gray-900">{total}</div>
        <div className="text-sm text-gray-600">Total</div>
      </div>
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <div className="text-2xl font-bold text-green-600">{completed}</div>
        <div className="text-sm text-gray-600">Completed</div>
      </div>
      <div className="text-center p-4 bg-blue-50 rounded-lg">
        <div className="text-2xl font-bold text-blue-600">{remaining}</div>
        <div className="text-sm text-gray-600">Remaining</div>
      </div>
    </div>
  );
};