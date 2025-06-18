"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col justify-center items-center py-20 px-4">
      <h1 className="text-5xl font-extrabold mb-6">TaskEase</h1>
      <p className="text-lg max-w-xl text-center mb-2">
        TaskEase helps you organize your tasks efficiently and boost your productivity with a simple and intuitive interface.
      </p>
      <div className="mt-2 text-gray-200 max-w-md text-center">
        Organize your work with ease and keep track of your tasks effortlessly.
      </div>
      <section className="max-w-4xl w-full grid md:grid-cols-3 gap-8 mt-8">
        <FeatureCard
          title="Simple Task Management"
          description="Create, update, and delete tasks effortlessly."
        />
        <FeatureCard
          title="Real-time Updates"
          description="See your changes reflected instantly."
        />
        <FeatureCard
          title="Secure Authentication"
          description="Keep your tasks private with Kinde authentication."
        />
      </section>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-20 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
