let data = [];
function randomInteger(min, max) {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}
for (let i = 0; i < 20; i++) {
  data.push({
    id: i,
    email:
      randomInteger(1, 4) === 1
        ? "prashant@mercle.com"
        : randomInteger(1, 4) === 2
        ? "#1234"
        : "0x9...67E23",
    nft: "Red hat penguin",
    nftImg:
      "https://sothebys-com.brightspotcdn.com/dims4/default/6a8c506/2147483647/strip/true/crop/1000x1000+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F8e%2F9c%2F972bfa1645c08ca0919ea68aabfe%2F4609.png",
    desc: "Sickle-hedman is one of 1,000 Hedz. Hand drawn by Matt Furie on planet Earth in 2022.",
    accessories:
      randomInteger(1, 4) === 1
        ? ["Silver", "Medal", "OneMore"]
        : randomInteger(1, 4) === 2
        ? ["Silver", "Medal", "OneMore", "Two More"]
        : ["Silver", "Medal", "OneMore", "two More", "Three more"],
    status: randomInteger(1, 3),
    date: "Feb 20, 2022",
  });
}

export default data;
