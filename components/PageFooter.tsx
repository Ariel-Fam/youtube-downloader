import React from "react";
import Image from "next/image";

function PageFooter() {
  return (
    <section className="w-full">
      <div className="mx-auto mt-12 max-w-6xl rounded-3xl bg-white/80 backdrop-blur py-12 px-4 shadow-lg">
        <div className="space-y-8">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900">
            Built for every screen
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center gap-4 rounded-2xl bg-gray-100 p-6 text-center shadow-sm">
              <Image
                src={"/video_ID.png"}
                alt="Enter the video ID"
                width={400}
                height={400}
                className="h-auto w-full max-w-xs md:max-w-sm object-contain"
                priority
              />
              <p className="text-lg font-medium text-gray-900">
                Download videos using their YouTube ID.
              </p>
              <p className="text-sm text-gray-700 max-w-md">
                Paste the ID, submit, and we will fetch the available formats for you automatically.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-gray-100 p-6 text-center shadow-sm">
              <Image
                src={"/sideBar.png"}
                alt="Downloads sidebar"
                width={400}
                height={400}
                className="h-auto w-full max-w-xs md:max-w-sm object-contain"
                priority
              />
              <p className="text-lg font-medium text-gray-900">
                Downloads stay in the sidebar.
              </p>
              <p className="text-sm text-gray-700 max-w-md">
                Open the sidebar on mobile with the toggle button or keep it pinned on larger screens for quick access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageFooter;

