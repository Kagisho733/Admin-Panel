interface Activity {
  title: string;
  time: string;
}

interface Props {
  activity: Activity[];
}

export default function RecentActivity({
  activity,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activity.map((item, index) => (

          <div
            key={index}
            className="border-b pb-2"
          >

            <p className="font-semibold">
              {item.title}
            </p>

            <p className="text-gray-500 text-sm">
              {item.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}