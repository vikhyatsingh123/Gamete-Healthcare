import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Images
import age1 from "../assets/age/AGE_1.png";
import age2 from "../assets/age/AGE_2.png";
import age3 from "../assets/age/AGE_3.png";
import age4 from "../assets/age/AGE_4.png";
import age5 from "../assets/age/AGE_5.png";

import agePlus1 from "../assets/ageplus/AGE_PLUS_1.png";
import agePlus2 from "../assets/ageplus/AGE_PLUS_2.png";
import agePlus3 from "../assets/ageplus/AGE_PLUS_3.png";
import agePlus4 from "../assets/ageplus/AGE_PLUS_4.png";

import bebact1 from "../assets/bebact90/Bebact-90_1.png";
import bebact2 from "../assets/bebact90/Bebact-90_2.png";
import bebact3 from "../assets/bebact90/Bebact-90_3.png";

import betalik1 from "../assets/betalik/Betalik_1.png";
import betalik2 from "../assets/betalik/Betalik_2.png";
import betalik3 from "../assets/betalik/Betalik_3.png";
import betalik4 from "../assets/betalik/Betalik_4.png";
import betalik5 from "../assets/betalik/Betalik_5.png";

import betalikPlus1 from "../assets/betalikplus/Betalik_plus_1.png";
import betalikPlus2 from "../assets/betalikplus/Betalik_plus_2.png";
import betalikPlus3 from "../assets/betalikplus/Betalik_plus_3.png";
import betalikPlus4 from "../assets/betalikplus/Betalik_plus_4.png";
import betalikPlus5 from "../assets/betalikplus/Betalik_plus_5.png";

import clarimet5001 from "../assets/clarimet/Clarimat_1.png";
import clarimet5002 from "../assets/clarimet/Clarimat_2.png";
import clarimet5003 from "../assets/clarimet/Clarimat_3.png";
import clarimet5004 from "../assets/clarimet/clarimat_4.png";

import coseDSR1 from "../assets/cosedsr/CoseDSR1.png";
import coseDSR2 from "../assets/cosedsr/CoseDSR3.png";
import coseDSR3 from "../assets/cosedsr/CoseDSR4.png";
import coseDSR4 from "../assets/cosedsr/CoseDSR5.png";

import floramet1 from "../assets/floramet/Floramet_1.png";
import floramet2 from "../assets/floramet/Floramet_2.png";
import floramet3 from "../assets/floramet/Floramet_3.png";
import floramet4 from "../assets/floramet/Floramet_4.png";

import fluhet1 from "../assets/fluhet/Fluhet_1.png";
import fluhet2 from "../assets/fluhet/Fluhet_2.png";
import fluhet3 from "../assets/fluhet/Fluhet_3.png";
import fluhet4 from "../assets/fluhet/Fluhet_4.png";
import fluhet5 from "../assets/fluhet/Fluhet_5.png";

import fluhet60_1 from "../assets/fluhet60/Fluhet_60-1.png";
import fluhet60_2 from "../assets/fluhet60/Fluhet_60-2.png";
import fluhet60_3 from "../assets/fluhet60/Fluhet_60-3.png";
import fluhet60_4 from "../assets/fluhet60/Fluhet_60-4.png";

import gampan51 from "../assets/gampam0_5/Gampam 0.5_1.png";
import gampan52 from "../assets/gampam0_5/Gampam 0.5_2.png";
import gampan53 from "../assets/gampam0_5/Gampam 0.5_3.png";
import gampan54 from "../assets/gampam0_5/Gampam 0.5_4.png";
import gampan55 from "../assets/gampam0_5/Gampam 0.5_5.png";

import gampan251 from "../assets/gampam0_25/gampam 0.25_1.png";
import gampan252 from "../assets/gampam0_25/gampam 0.25_2.png";
import gampan253 from "../assets/gampam0_25/gampam 0.25_3.png";
import gampan254 from "../assets/gampam0_25/gampam 0.25_4.png";

import gampan101 from "../assets/gampam10/gampam 10_1.png";
import gampan102 from "../assets/gampam10/gampam 10_2.png";
import gampan103 from "../assets/gampam10/gampam 10_3.png";
import gampan104 from "../assets/gampam10/gampam 10_4.png";

import gampanplus1 from "../assets/gampamplus/Gampam Plus_1.png";
import gampanplus2 from "../assets/gampamplus/Gampam Plus_2.png";
import gampanplus3 from "../assets/gampamplus/Gampam Plus_3.png";
import gampanplus4 from "../assets/gampamplus/Gampam Plus_4.png";

import gamteklc1 from "../assets/gamtek_lc/gamtek_lc_1.png";
import gamteklc2 from "../assets/gamtek_lc/gamtek_lc_2.png";
import gamteklc3 from "../assets/gamtek_lc/gamtek_lc_3.png";
import gamteklc4 from "../assets/gamtek_lc/gamtek_lc_4.png";
import gamteklc5 from "../assets/gamtek_lc/gamtek_lc_5.png";

import gamtekplus1 from "../assets/gamtek_plus/Gamtek_plus_1.png";
import gamtekplus2 from "../assets/gamtek_plus/Gamtek_plus_2.png";
import gamtekplus3 from "../assets/gamtek_plus/Gamtek_plus_3.png";
import gamtekplus4 from "../assets/gamtek_plus/Gamtek_plus_4.png";

import ghbfort1 from "../assets/ghbfort/GHB-Fort-1.png";
import ghbfort2 from "../assets/ghbfort/GHB-Fort-4.png";
import ghbfort3 from "../assets/ghbfort/GHB-Fort-2.png";
import ghbfort4 from "../assets/ghbfort/GHB-Fort-3.png";

import gpam1 from "../assets/gpam_lite/GPAM_LITE_1.png";
import gpam2 from "../assets/gpam_lite/GPAM_LITE_2.png";
import gpam3 from "../assets/gpam_lite/GPAM_LITE_3.png";
import gpam4 from "../assets/gpam_lite/GPAM_LITE_4.png";

import gpine1 from "../assets/gpine_10/Gpine_10_1.png";
import gpine2 from "../assets/gpine_10/Gpine_10_2.png";
import gpine3 from "../assets/gpine_10/Gpine_10_3.png";
import gpine4 from "../assets/gpine_10/Gpine_10_4.png";

import heli2001 from "../assets/helipride_200/Helipride_200_1.png";
import heli2002 from "../assets/helipride_200/Helipride_200_2.png";
import heli2003 from "../assets/helipride_200/Helipride_200_3.png";
import heli2004 from "../assets/helipride_200/Helipride_200_4.png";

import heli3001 from "../assets/helipride_300/Helipride_300_1.png";
import heli3002 from "../assets/helipride_300/Helipride_300_2.png";
import heli3003 from "../assets/helipride_300/Helipride_300_3.png";
import heli3004 from "../assets/helipride_300/Helipride_300_4.png";
import heli3005 from "../assets/helipride_300/Helipride_300_5.png";

import helizyme1 from "../assets/helizyme/Helizyme_1.png";
import helizyme2 from "../assets/helizyme/Helizyme_2.png";
import helizyme3 from "../assets/helizyme/Helizyme_3.png";
import helizyme4 from "../assets/helizyme/Helizyme_4.png";

import hipzol1 from "../assets/hipzol_0_5/Hipzol_0.5_1.png";
import hipzol2 from "../assets/hipzol_0_5/Hipzol_0.5_2.png";
import hipzol3 from "../assets/hipzol_0_5/Hipzol_0.5_3.png";
import hipzol4 from "../assets/hipzol_0_5/Hipzol_0.5_4.png";

import linnt1 from "../assets/linnt/Lin_NT_1.png";
import linnt2 from "../assets/linnt/Lin_NT_2.png";
import linnt3 from "../assets/linnt/Lin_NT_3.png";
import linnt4 from "../assets/linnt/Lin_NT_4.png";
import linnt5 from "../assets/linnt/Lin_NT_5.png";

import lizomet1 from "../assets/lizomet/lizomet_1.png";
import lizomet2 from "../assets/lizomet/lizomet_2.png";
import lizomet3 from "../assets/lizomet/lizomet_3.png";
import lizomet4 from "../assets/lizomet/lizomet_4.png";

import mtek1 from "../assets/mteklc/M_Tec_LC_1.png";
import mtek2 from "../assets/mteklc/M_Tec_LC_2.png";
import mtek3 from "../assets/mteklc/M_Tec_LC_3.png";
import mtek4 from "../assets/mteklc/M_Tec_LC_4.png";
import mtek5 from "../assets/mteklc/M_Tec_LC_5.png";

import ometron1 from "../assets/ometron/ometron1.png";
import ometron2 from "../assets/ometron/ometron2.png";
import ometron3 from "../assets/ometron/ometron3.png";
import ometron4 from "../assets/ometron/ometron4.png";

import rebzyls1 from "../assets/rebzyls/Rebzy_LS_1.png";
import rebzyls2 from "../assets/rebzyls/Rebzy_LS_2.png";
import rebzyls3 from "../assets/rebzyls/Rebzy_LS_3.png";
import rebzyls4 from "../assets/rebzyls/Rebzy_LS_4.png";

import restod1 from "../assets/restod/Resto_D_1.png";
import restod2 from "../assets/restod/Resto_D_2.png";
import restod3 from "../assets/restod/Resto_D_3.png";

import restzyme1 from "../assets/restzyme/Restzyme_1.png";
import restzyme2 from "../assets/restzyme/Restzyme_2.png";
import restzyme3 from "../assets/restzyme/Restzyme_3.png";
import restzyme4 from "../assets/restzyme/Restzyme_4.png";
import restzyme5 from "../assets/restzyme/Restzyme_5.png";

import texagam1 from "../assets/texagam/Texagam_1.png";
import texagam2 from "../assets/texagam/Texagam_2.png";
import texagam3 from "../assets/texagam/Texagam_3.png";
import texagam4 from "../assets/texagam/Texagam_4.png";

import typal1 from "../assets/typal50/Typol_50_1.png";
import typal2 from "../assets/typal50/Typol_50_2.png";
import typal3 from "../assets/typal50/Typol_50_3.png";
import typal4 from "../assets/typal50/Typol_50_4.png";

import typal1001 from "../assets/typal100/Typal-100_1.png";
import typal1002 from "../assets/typal100/Typal-100_2.png";
import typal1003 from "../assets/typal100/Typal-100_3.png";

import ProductModalRightSide from "./ProductModalRightSide";
import { Age } from "../data/Age";
import { AgePlus } from "../data/AgePlus";
import { Bebact90 } from "../data/Bebact90";
import { Betalik } from "../data/Betalik";
import { BetalikPlus } from "../data/BetalikPlus";
import { Clarimet500 } from "../data/Clarimet500";
import { CoseDsr } from "../data/CoseDsr";
import { Floramet } from "../data/Floramet";
import { Fluhet } from "../data/Fluhet";

import { Fluhet60 } from "../data/Fluhet60";
import { GametekLc } from "../data/GametekLc";
import { GametekPlus } from "../data/GameTekPlus";
import { Gampam5 } from "../data/Gampam5";
import { Gampam10 } from "../data/Gampam10";
import { Gampam25 } from "../data/Gampam25";
import { GhbFort } from "../data/GhbFort";
import { GpamLite } from "../data/GpamLite";
import { GpamPlus } from "../data/GpamPlus";
import { Gpine10 } from "../data/Gpine10";
import { Helipride100 } from "../data/Helipride100";
import { Helipride300 } from "../data/Helipride300";
import { Helizyme } from "../data/Helizyme";
import { Hipzol } from "../data/Hipzol";
import { Linnt } from "../data/Linnt";
import { Lizomet } from "../data/Lizomet";
import { Mteklc } from "../data/Mteklc";
import { Ometron } from "../data/Ometron";
import { Rebzyls } from "../data/Rebzls";
import { Restod } from "../data/Restod";
import { Restzyme } from "../data/Restzyme";
import { Texagam } from "../data/Texagam";
import { Typal100 } from "../data/Typal100";
import { Typal50 } from "../data/Typal50";
import { createPortal } from "react-dom";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: any;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  open: boolean;
}

const productData: Record<string, any> = {
  age: Age,
  ageplus: AgePlus,
  bebact: Bebact90,
  betalik: Betalik,
  betalikplus: BetalikPlus,
  clarimet500: Clarimet500,
  cosedsr: CoseDsr,
  floramet: Floramet,
  fluhet60: Fluhet60,
  fluhet: Fluhet,
  gametekLc: GametekLc,
  gametekPlus: GametekPlus,
  gampam5: Gampam5,
  gampam10: Gampam10,
  gampam25: Gampam25,
  ghbfort: GhbFort,
  gpamLite: GpamLite,
  gpamPlus: GpamPlus,
  gpine10: Gpine10,
  helipride100: Helipride100,
  helipride300: Helipride300,
  helizyme: Helizyme,
  hipzol: Hipzol,
  linnt: Linnt,
  lizomet: Lizomet,
  mtek: Mteklc,
  ometron: Ometron,
  rebzyls: Rebzyls,
  restod: Restod,
  restzyme: Restzyme,
  texagam: Texagam,
  typal100: Typal100,
  typal50: Typal50,
};

const productImages: Record<string, string[]> = {
  age: [age1, age2, age3, age4, age5],
  ageplus: [agePlus1, agePlus2, agePlus3, agePlus4],
  bebact: [bebact1, bebact2, bebact3],
  betalik: [betalik1, betalik2, betalik3, betalik4, betalik5],
  betalikplus: [
    betalikPlus1,
    betalikPlus2,
    betalikPlus3,
    betalikPlus4,
    betalikPlus5,
  ],
  clarimet500: [clarimet5001, clarimet5002, clarimet5003, clarimet5004],
  cosedsr: [coseDSR1, coseDSR2, coseDSR3, coseDSR4],
  fluhet60: [fluhet60_1, fluhet60_2, fluhet60_3, fluhet60_4],
  fluhet: [fluhet1, fluhet2, fluhet3, fluhet4, fluhet5],
  gampam5: [gampan51, gampan52, gampan53, gampan54, gampan55],
  gampam25: [gampan251, gampan252, gampan253, gampan254],
  gampam10: [gampan101, gampan102, gampan103, gampan104],
  gampamplus: [gampanplus1, gampanplus2, gampanplus3, gampanplus4],
  gamteklc: [gamteklc1, gamteklc2, gamteklc3, gamteklc4, gamteklc5],
  gametekplus: [gamtekplus1, gamtekplus2, gamtekplus3, gamtekplus4],
  ghbfort: [ghbfort1, ghbfort2, ghbfort3, ghbfort4],
  gpam: [gpam1, gpam2, gpam3, gpam4],
  gpine: [gpine1, gpine2, gpine3, gpine4],
  helipride200: [heli2001, heli2002, heli2003, heli2004],
  heli300: [heli3001, heli3002, heli3003, heli3004, heli3005],
  helizyme: [helizyme1, helizyme2, helizyme3, helizyme4],
  hipzol: [hipzol1, hipzol2, hipzol3, hipzol4],
  floramet: [floramet1, floramet2, floramet3, floramet4],
  linnt: [linnt1, linnt2, linnt3, linnt4, linnt5],
  lizomet: [lizomet1, lizomet2, lizomet3, lizomet4],
  mtek: [mtek1, mtek2, mtek3, mtek4, mtek5],
  ometron: [ometron1, ometron2, ometron3, ometron4],
  rebzyls: [rebzyls1, rebzyls2, rebzyls3, rebzyls4],
  restod: [restod1, restod2, restod3],
  restzyme: [restzyme1, restzyme2, restzyme3, restzyme4, restzyme5],
  texagam: [texagam1, texagam2, texagam3, texagam4],
  typal100: [typal1001, typal1002, typal1003],
  typal50: [typal1, typal2, typal3, typal4],
};

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  open,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const images = product ? productImages[product.id] || [] : [];

  useEffect(() => {
    if (open && product) {
      setCurrentIdx(0);
      setDirection(1);
    }
  }, [open, product]);

  const goPrevious = () => {
    if (images.length <= 1) return;

    setDirection(-1);

    setCurrentIdx((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const goNext = () => {
    if (images.length <= 1) return;

    setDirection(1);

    setCurrentIdx((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, product, images.length]);

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  if (!product) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.div
            className="
              relative
              flex
              w-full
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
              max-md:flex-col
              max-md:max-h-[92vh]
              max-md:overflow-y-auto
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 251, 255, 0.98))",
            }}
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <motion.button
              type="button"
              onClick={onClose}
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-gray-600
                shadow-md
                backdrop-blur
                transition
                hover:bg-white
                hover:text-black
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Close product modal"
            >
              <X size={20} />
            </motion.button>
            <div
              className="
                relative
                flex
                min-h-[600px]
                w-1/2
                items-center
                justify-center
                overflow-hidden
                bg-[#f1f8f4]
                max-md:min-h-[400px]
                max-md:w-full
              "
            >
              {/* Decorative background */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#e3eeee]
                  via-[#d7e6e8]
                  to-[#a0c3ce]
                "
              />

              {/* IMAGE */}
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-16 py-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentIdx}
                    src={images[currentIdx]}
                    alt={`${product.name} ${currentIdx + 1}`}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                      scale: {
                        duration: 0.25,
                      },
                    }}
                    className="
                      relative
                      z-10
                      max-h-[520px]
                      max-w-full
                      object-contain
                      drop-shadow-xl
                      max-md:max-h-[340px]
                    "
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {images.length > 1 && (
                <>
                  <motion.button
                    type="button"
                    onClick={goPrevious}
                    whileHover={{
                      scale: 1.08,
                      x: -2,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      absolute
                      left-5
                      top-1/2
                      z-20
                      flex
                      h-12
                      w-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-700
                      shadow-lg
                      backdrop-blur-sm
                      transition
                      hover:bg-white
                      max-md:left-3
                    "
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} strokeWidth={2} />
                  </motion.button>

                  {/* NEXT BUTTON */}
                  <motion.button
                    type="button"
                    onClick={goNext}
                    whileHover={{
                      scale: 1.08,
                      x: 2,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      absolute
                      right-5
                      top-1/2
                      z-20
                      flex
                      h-12
                      w-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-700
                      shadow-lg
                      backdrop-blur-sm
                      transition
                      hover:bg-white
                      max-md:right-3
                    "
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} strokeWidth={2} />
                  </motion.button>
                </>
              )}

              {/* IMAGE COUNTER */}
              {images.length > 1 && (
                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    z-20
                    -translate-x-1/2
                    rounded-full
                    bg-black/60
                    px-4
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {currentIdx + 1} / {images.length}
                </div>
              )}

              {/* DOTS */}
              {images.length > 1 && images.length <= 10 && (
                <div
                  className="
                    absolute
                    bottom-6
                    left-1/2
                    z-20
                    flex
                    -translate-x-1/2
                    gap-1.5
                    translate-y-8
                  "
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setDirection(index > currentIdx ? 1 : -1);
                        setCurrentIdx(index);
                      }}
                      className={`
                        h-1.5
                        cursor-pointer
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === currentIdx
                            ? "w-6 bg-emerald-600"
                            : "w-1.5 bg-gray-400"
                        }
                      `}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-y-auto max-md:w-full w-1/2">
              <ProductModalRightSide product={productData[product.id]} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProductModal;
