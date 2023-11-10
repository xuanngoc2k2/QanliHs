import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

function GradeDistributionChart({ data }) {
  const chartData = Object.entries(data).map(([grade, count]) => ({ grade, count }));

  return (
    <BarChart
      width={600}
      height={300}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <text x={300} y={30} textAnchor="middle" fontSize={16} fontWeight="bold">
        Phân Phối Điểm Sinh Viên
      </text>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="grade" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" name='Số sinh viên' />
    </BarChart>
  );
};

export default GradeDistributionChart;
