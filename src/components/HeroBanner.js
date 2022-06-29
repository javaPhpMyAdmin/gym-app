import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

export const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        fontWeight={700}
        mb="25px"
        mt="30px"
      >
        Train, Rest <br /> And Repeat
      </Typography>
      <Typography lineHeight="35px" fontSize="22px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        color="error"
        variant="contained"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontSize="220px"
        fontWeight={600}
        color="#ff2625"
        mt={7}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};
