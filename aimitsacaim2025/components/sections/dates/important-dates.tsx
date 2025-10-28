'use client';

const dates = [
  { event: 'Submission of Research Articles :', date: '16th October, 2025 ', isDeadline: false },
  { event: 'Notification of Acceptance :', date: '18th October, 2025', isDeadline: false },
  { event: 'Camera Ready Copy/Poster Submission :', date: '24th October, 2025', isDeadline: false },
  { event: 'Last Date for Participant Registration :', date: '27th October, 2025', isDeadline: false },
  { event: 'Conference Dates :', date: '30th & 31st, October, 2025', isDeadline: false },
];

export default function ImportantDates() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[450px] bg-white overflow-hidden py-8 px-4">
      {/* White overlay */}
      <div className="absolute inset-0 w-screen h-full bg-white z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Title */}
<h2
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
    color: 'rgb(2, 46, 133)',
    fontSize: '32px',
    lineHeight: '38px',
    marginBottom: '1rem',
    marginTop: 0,
    letterSpacing: '0.01em',
  }}
  className="text-center drop-shadow-[2px_2px_6px_rgba(237,237,237,1)] inline-block w-full"
>
  IMPORTANT DATES
</h2>


<div className="mx-auto mb-4 w-[55px] h-[3px] bg-blue-800 rounded" />

        <div className="overflow-x-auto">
  <table className="w-full border-collapse">
    {/* Table Header */}
    <thead>
      <tr>
        <th className="p-4 text-center text-xl font-bold border-b border-gray-300" style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          color: "rgb(47, 77, 90)",
          fontSize: "22px",
          lineHeight: "26px"
        }}>
          EVENTS
        </th>
        <th className="p-4 text-center text-xl font-bold border-b border-gray-300" style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          color: "rgb(47, 77, 90)",
          fontSize: "22px",
          lineHeight: "26px"
        }}>
          DATES
        </th>
      </tr>
    </thead>
    {/* Table Body */}
    <tbody>
      {dates.map((item, index) => (
        <tr
          key={index}
          className="border-b border-gray-200 last:border-b-0"
        >
          <td className="p-4 text-left text-base font-semibold text-gray-900 align-middle" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {item.event}
          </td>
          <td
            className={`p-4 text-center text-base font-bold align-middle ${item.isDeadline ? 'text-red-600' : 'text-gray-900'}`}
            style={{
              fontFamily: "'Open Sans', sans-serif"
            }}
          >
            {item.date}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </section>
  );
}
