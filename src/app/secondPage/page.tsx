export default function Second(){
    return(
        <div className="bg-[#F2F2F2]">

            {/* heading section */}
        <div className="text-center">
            <h1 className="font-extrabold text-5xl mt-6">Features That Keep You Hooked!</h1>
            <p className="mt-4 text-2xl font-semibold">Meet, Chat, Share – Anytime, Anywhere!</p>
        </div>
      
        {/* boxes section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-16 hover:box-border">
    {/* 1st box */}
    <div className="border rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-lg">
        <h1 className="text-center font-semibold text-2xl hover:text-red-900 mb-4">
            🔥 Seamless Connections
        </h1>
        <p className="text-xl text-center">
            Stay in touch with friends, family, and like-minded people with just a tap.
        </p>
    </div>

    {/* 2nd box */}
    <div className="border rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-lg">
        <h1 className="text-center font-semibold text-2xl hover:text-red-900 mb-4">
            📸 Share Your Story
        </h1>
        <p className="text-xl text-center">
            Upload photos, videos, and updates to let the world know what’s happening in your life.
        </p>
    </div>

    {/* 3rd box */}
    <div className="border rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-lg">
        <h1 className="text-center font-semibold text-2xl hover:text-red-900 mb-4">
            💬 Real-Time Chat
        </h1>
        <p className="text-xl text-center">
            Whether it&apos;s a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.
        </p>
    </div>
    {/* 4th box */}
    <div className="border rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-lg">
        <h1 className="text-center font-semibold text-2xl hover:text-red-900 mb-4">
            🔒 Privacy First
        </h1>
        <p className="text-xl text-center">
         Your data, your control. We prioritize your privacy with world-class security.
        </p>
    </div>
    {/* 5th box */}
    <div className="border rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-lg">
        <h1 className="text-center font-semibold text-2xl hover:text-red-900 mb-4">
            🌎 Discover & Explore
        </h1>
        <p className="text-xl text-center">
            Find trending content, join communities, and follow pages that match your interests.
        </p>
    </div>
    {/* 6th box */}
    <div className="border rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-lg">
        <h1 className="text-center font-semibold text-2xl hover:text-red-900 mb-4">
          💼 Grow Your Business
        </h1>
        <p className="text-xl text-center">
         Use our platform to market your brand, connect with customers, and build meaningful relationships.
        </p>
    </div>



</div>



        </div>
    )
}