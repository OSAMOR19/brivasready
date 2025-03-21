"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import img from "@/components/Images/pics/dolapopicture.svg";

export default function SmsHero() {
  return (
    <section className="flex flex-col items-center text-center py-5 bg-white">
      <h1 className="text-5xl  font-bold text-black mb-4">
        Launch Your Own Bulk SMS <br/> Reseller Platform
      </h1>
      <p className="text-lg text-black mb-6 max-w-2xl">
        Empower businesses with scalable Bulk SMS solutions while building your own reseller network.
      </p>
      <Link
        href="brivas.io/login"
        className="bg-[#A4031F] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-red-700 transition"
      >
        Start for free
      </Link>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10"
      >
        <Image src={img} alt="Bulk SMS" width={300} height={500} className="rounded-xl " />
      </motion.div>
    </section>
  );
}
