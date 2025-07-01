"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const Jordon = () => {
  return (
    <section className="w-full py-20 ">
      <h1 className="heading">
        Our Mentors
      </h1>
      <div className="flex flex-wrap mt-[35px] items-center justify-center ">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-8 sm:p-10 bg-shivansh ">
          <Image
            src={`/Seethalekshmi_photo.jpg`}
            alt="Prof. Seetalakshmi"
            height="400"
            width="400"
            className="object-contain rounded-[300px] "
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Prof. Seetalakshmi
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Seethalekshmi K. is an accomplished electrical engineer with extensive academic and industrial experience. She is an Associate Professor in the Department of Electrical Engineering at IET Lucknow and a Senior IEEE Member. With a Ph.D. from IIT Kanpur, her research focuses on adaptive load shedding and distance relaying using synchrophasor technology. She has held various leadership roles, including Dean at BBD University and Dy. Dean at IET Lucknow. Her work spans teaching, research, consultancy, and academic administration, making her a respected figure in the field.
          </p>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-s font-bold dark:bg-zinc-800">
            <span>Mentor - ECell IET Lucknow</span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-shivansh">
          <Image
            src={`/pushkar_tripathi.jpg`}
            alt="Dr. Pushkar Tripathi"
            height="400"
            width="400"
            className="object-contain rounded-[300px]"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Dr. Pushkar Tripathi
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Dr. Pushkar Tripathi is an Assistant Professor in the Electrical Engineering Department at IET Lucknow, with a Ph.D. from IIT Roorkee, M.Tech. from IIT Roorkee and a B.Tech. from IET Lucknow. His expertise lies in power systems protection and the application of machine learning in power systems. He has over six years of teaching experience and one year in the power distribution industry. He has also coordinated several academic events and serves as Deputy In-charge of the Training & Placement Cell of I.E.T Lucknow and Director of the Navyug Navachar Foundation at I.E.T Lucknow.
          </p>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-s font-bold dark:bg-zinc-800">
            <span>Chairman, IIC LKO </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-shivansh">
          <Image
            src={`/anurag.jpg`}
            alt="Dr. Anurah Verma"
            height="400"
            width="400"
            className="object-contain rounded-[300px] "
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Dr. Anurag Verma
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Dr. Anurag Verma is an Assistant Professor in the Electrical Engineering Department at IET Lucknow, holding a Ph.D. in Energy Management Systems for Smart Homes from Thapar Institute of Engineering & Technology. His research encompasses smart buildings, energy optimization, and environmental parameter forecasting. He has authored book chapters with Elsevier and published in journals like Environmental Progress & Sustainable Energy. He serves as Deputy Coordinator of the Accreditation & Ranking Cell and Co-coordinator of the Entrepreneurship Cell at IET Lucknow
          </p>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-s font-bold dark:bg-zinc-800">
            <span>Founder, E-cell IET LKO </span>
          </button>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Jordon;
