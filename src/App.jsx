export default function App() {
  return (
    <div className=" flex justify-center items-center h-screen bg-black">
      {/* main */}
      <div className=" border px-5 py-5 border-gray-600  rounded-xl">

        <div className="flex justify-between item-center ">

          <div className="Top flex gap-1 justify-center item-center">
            {/* UserIcon */}
            <div className="UserIcon text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            {/* name */}
            <div className="name text-white font-bold">
              <h1>Rahul Patil</h1>
            </div>
            {/* username */}
            <div className="username text-gray-500">
              <p> @Raulbyte </p>
            </div>
            {/* time */}
            <div className="time text-gray-500">
              <h2>-Dec 9</h2>
            </div>
          </div>

          {/* button */}
          <div className="Btn">
            <button className=" border rounded-xl w-20 border-gray-500">
              <p className=" text-gray-400 font-bold text-center ">Promote</p>
            </button>
          </div>

        </div>

        {/* med */}
        <div className="Med">
          <div className="Message text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Porro magni quia voluptatum iure quos culpa iusto expedita,
            <br /> ipsa nostrum adipisci numquam, molestias, praesentium cupiditate
            <br /> blanditiis dolores rem id eligendi corporis? 
            <br /> #100DaysOFCode #Tech
          </div>
        </div>

        {/* low */}
        <div className="last flex gap-12 px-4 py-4 items-center">
          {/* Comment */}
          <button>
            <div className="Comment text-gray-500  h-1 w-9">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
            </div>
          </button>


          {/* RePost */}
          <button>
            <div className="RePost text-gray-500  h-1 w-9">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
          </button>

          {/* Like */}
          <button>
            <div className="Like text-gray-500  h-1 w-9">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
          </button>

          {/* View */}
          <button>
            <div className="View text-gray-500  h-1 w-9">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
              </svg>
            </div>
          </button>

          {/* Bookmark */}
          <button>
            <div className="Bookmark text-gray-500  h-1 w-9">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>

            </div>
          </button>

          {/* Share */}
          <div className="Share text-gray-500  h-1 w-9 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  )
}
