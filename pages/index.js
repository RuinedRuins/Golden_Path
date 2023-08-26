import CustomButton from "../components/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Carousell from "../components/Carousell";
import { useRef } from "react";

export default function Home() {
  const sliderRef = useRef(null);

  const handlePrevSlide = (e) => {
    e.preventDefault();
    console.log(sliderRef);
    if (sliderRef?.current) {
      sliderRef.current.prev();
    }
    console.log("prev");
  };

  const handleNextSlide = (e) => {
    e.preventDefault();
    console.log(sliderRef);
    if (sliderRef?.current) {
      sliderRef.current.next();
    }
    console.log("next");
  };

  const items = [
    {
      src: "https://picsum.photos/id/237/800/300",
    },
    {
      src: "https://picsum.photos/id/236/800/300",
    },
    {
      src: "https://picsum.photos/id/233/800/300",
    },
    {
      src: "https://picsum.photos/id/200/800/300",
    },
    {
      src: "https://picsum.photos/id/23/800/300",
    },
  ];
  return (
    // create a head
    <>
      <Head>
        <title>Golden Path</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: 5,
          height: "100vh",
        }}
      >
        {/* app name display, required? */}
        <Typography
          fontWeight={300}
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700, py: 2 }}
        >
          Golden Path
        </Typography>
        {/* slideshow section */}
        <Box sx={{ height: "70%" }}>
          <Carousell images={items} ref={sliderRef} />
        </Box>
        {/* buttons section */}
        {/* <Box
          sx={{
            display: "flex",
            height: "50px",
            justifyContent: "space-around",
          }}
        >
          <CustomButton
            onClick={handlePrevSlide}
            text={"Backward"}
            startIcon={<ChevronLeftIcon />}
            bgColor={"#68B0AB"}
            color={"#1A1700"}
            onHoverColor={"#74D2CC"}
          />
          <CustomButton
            onClick={handleNextSlide}
            text={"Forward"}
            endIcon={<ChevronRightIcon />}
            bgColor={"#68B0AB"}
            color={"#1A1700"}
            onHoverColor={"#74D2CC"}
          />
        </Box> */}
      </Box>
    </>
  );
}
