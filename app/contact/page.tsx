'use client';
import Image from 'next/image';

const Contact= () => {
  return (
    <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Let's talk about everything!
          </h2>
          <div className="text-gray-700 mt-8">
            Hate forms? Send us an{' '}
            <a className="underline" href="mailto:someone@gmail.com">
              email
            </a>{' '}
            instead.
          </div>
        </div>
        <div className="mt-12 text-center">
          <Image
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lbnxlbnwwfHx8fDE2OTY5NTQ3NzA&ixlib=rb-4.0.3&q=80&w=400"
            alt="Contact"
            width={500}
            height={300}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>

      {/* Right Side (Form) */}
      <form className="space-y-8">
        <div>
          <label className="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </label>
          <input
            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Enter your Name"
            required
          />
        </div>

        <div>
          <label className="uppercase text-sm text-gray-600 font-bold">
            Email
          </label>
          <input
            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label className="uppercase text-sm text-gray-600 font-bold">
            Phone Number
          </label>
          <input
            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="tel"
            placeholder="Enter your Phone Number including country code"
            required
          />
        </div>

        <div>
          <label className="uppercase text-sm text-gray-600 font-bold">
            Message
          </label>
          <textarea
            className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your Message"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact
