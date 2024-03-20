import React from "react";

function Card({name = "John Doe"}) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/431973046_3507680182828426_3430620265683921214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsgFO-h5SvvrJxKtNQ2G3sxDp1ZiR4AR7EOnVmJHgBHk6Z2LF3HiZNsYCUUKFsMOhs3PSnANv2IXd_-SQmEfF2&_nc_ohc=VoOvYrLbv50AX-mCxlZ&_nc_ht=scontent.fdac144-1.fna&oh=00_AfBoHj4xx5LmR-j5GFGTo2KKitxYuWirRKpfT0f4cRZ2Rg&oe=65FFCDAD"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
