"use client";
import Image from "next/image";
import profilePic from "../../public/photo2021.jpg";
import qrCodePic from "../../public/qr-code.png";
import { PiTelegramLogo } from "react-icons/pi";
import { BsQrCode, BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { TbFileCv } from "react-icons/tb";
import { useTheme } from "next-themes";
import ModeToggle from "./mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TopFooter from "./top-footer";

export default function Top() {
  const { theme, setTheme } = useTheme();

  const downloadCV = () => {
    console.log("downloadCV");
    const link = document.createElement("a");
    const file = "Holoborodko-dev.pdf";
    link.href = "../Holoborodko-dev.pdf";
    link.setAttribute("download", file);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const callMe = () => {
    window.open("tel:+380680564880", "tel");
  };
  const writeMe = () => {
    window.open("mailto:vitalii.holoborodko.dev@gmail.com", "mailto");
  };
  const telegram = () => {
    window.open("https://telegram.im/@VitalyGol", "telegram");
  };
  return (
    <div className="mt-2">
      <nav className="flex flex-row justify-between items-center mb-2 md:mb-0">
        <ModeToggle theme={theme} setTheme={setTheme} />
        <div className="flex  items-start flex-row gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <TbFileCv
                  size={24}
                  className="text-[#486ca7] dark:text-[#70a3cf]"
                  onClick={downloadCV}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Download my CV&apos;s file</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <AlertDialog>
            <AlertDialogTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <BsQrCode
                      size={21}
                      className="text-[#486ca7] dark:text-[#70a3cf]"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Show QR code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <div className="text-center mb-4">
                    Scan QR code for more information
                  </div>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="flex justify-center items-center">
                    <Image
                      src={qrCodePic}
                      alt="qr-code Holoborodko Vitalii web developer"
                      placeholder="blur"
                      width={100}
                      height={100}
                      className="mr-4"
                    />
                    You can use the QR code scanner.
                    <br />I would be glad to communicate and am open to
                    proposals for cooperation.
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Return</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row justify-center items-center] mt-[-2rem] sm:mt-[-2.5rem]  md:mt-0 ">
        {/* <div className="flex flex-col lg:flex-row justify-center items-center mt-[-2rem]   md:mt-0 "> */}
        <div className="flex justify-center items-center ">
          {/* <div className="h-4 w-4 sm:bg-red-400 md:bg-green-400 lg:bg-blue-400"></div> */}
          <div className="flex flex-col mb-2  md:mb-8 lg:mb-0">
            <p className="text-xl sm:text-3xl md:text-4xl  lg:text-5xl text-center font-semibold tracking-widest  text-gray-600 dark:text-[#70a3cf]  ">
              {/* <p className="text-3xl md:text-4xl  lg:text-5xl font-semibold tracking-widest  text-gray-700 dark:text-[#70a3cf] sm:text-red-400 md:text-green-400 lg:text-blue-400"> */}
              Holoborodko Vitalii
            </p>
            <p className="text-lg md:text-xl  lg:text-2xl font-light tracking-[.25rem] sm:tracking-[.5rem] md:tracking-[.75rem] lg:tracking-[1rem]  text-center   text-gray-600 dark:text-[#70a3cf] pl-0 md:pl-4 lg:pl-10   ">
              web developer
            </p>
          </div>
          <Image
            src={profilePic}
            alt="photo Holoborodko Vitalii web developer"
            placeholder="blur"
            className="ml-4 mt-8  md:mt-0 rounded-2xl w-[70px] h-[70wh] sm:w-[90px] sm:h-[90wh] md:w-[90px] md:h-[90wh] lg:w-[100px]    "
            // className="ml-4 mt-8 md:mt-0 rounded-2xl w-[70px] h-[70wh] sm:w-[90px] sm:h-[90wh] md:w-[90px] md:h-[90wh] lg:w-[100px]    "
          />
        </div>
        <div className="flex flex-row lg:flex-col justify-center items-center gap-12 lg:gap-1 mt-[-1.25rem] sm:mt-[-1.75rem] md:mt-[-1.5rem] lg:mt-0 ml-[-1rem] lg:ml-4 xl:ml-6 mr-20 ">
          {/* <div className="flex flex-row lg:flex-col justify-center items-center gap-12 lg:gap-1 mt-[-1.25rem] sm:mt-[-1.75rem] md:mt-[-.5rem] lg:mt-0 mr-20 lg:ml-4 xl:ml-6 "> */}
          <button
            type="button"
            className="p-[6px] border rounded-md border-[#486ca7] dark:border-[#70a3cf] cursor-pointer"
            onClick={callMe}
          >
            <BsTelephone
              // size={18}
              className=" text-[#486ca7] dark:text-[#70a3cf] h-4 w-4 lg:h-4.5 lg:w-4.5 "
            />
          </button>
          <button
            type="button"
            className="p-[4px] border rounded-md border-[#385791] dark:border-[#70a3cf] "
            onClick={writeMe}
          >
            <CiMail className="text-[#385791] dark:text-[#70a3cf] h-5 w-5 lg:h-5.5 lg:w-5.5 " />
          </button>
          <button
            type="button"
            className="p-[5px] border rounded-md border-[#385791] dark:border-[#70a3cf] "
            onClick={telegram}
          >
            <PiTelegramLogo
              // size={20}
              className="text-[#385791] dark:text-[#70a3cf] h-4.5 w-4.5 lg:h-5 lg:w-5 "
            />
          </button>
        </div>
      </div>
      <TopFooter theme={theme} />
    </div>
  );
}
