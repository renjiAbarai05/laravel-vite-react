export default function Dashboard() {
  const people = [
    {
      name: "Ritche Padro",
      gender: "male",
      address: "Lorem ipsum 1",
    },
    {
      name: "Renji Abarai",
      gender: "male",
      address: "Lorem ipsum 2",
    },
  ];
  console.log("hey");
  const channel = Echo.channel("test-channel");
  channel.listen(".test-event", function (data) {
    console.log(JSON.stringify(data));
  });

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {people.map((e, i) => {
            return <p key={i}>{`${e.name} ${e.address}`}</p>;
          })}
        </div>
      </main>
    </>
  );
}
