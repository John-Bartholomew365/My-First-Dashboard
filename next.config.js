/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.tulupay.com, api.purse.tulupay.com"],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: "https://api.tulupay.com",
    NEXT_PUBLIC_API_URL: "https://api.purse.tulupay.com",
    NEXT_PUBLIC_AUTH_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlaWQiOiI2NDEiLCJyb2xlX25hbWUiOiJPd25lciIsInVzZXJJZCI6ImYwOTdjOGRjLTRiMWUtNDVmZi1iMzEzLTE3ZGY2NTEzZWUwZiIsImNvdW50cnlfaWQiOiI2OTZkZGMzYi01MWFmLTQ5MjktYTgwYy0yZTcxZmVhMzg0ZjAiLCJ1c2VydHlwZSI6bnVsbCwiaWF0IjoxNzMwMjk4NjQ0LCJleHAiOjE3MzAzODUwNDR9.jhihwghNcXZjnbIVOtNR4xLg4dp6VRnW3dXzBmxE4Jg",
  },
};

module.exports = nextConfig;