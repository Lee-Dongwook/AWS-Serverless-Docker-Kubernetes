import { createServer } from "http";
import { parse } from "url";
import next from "next";

const app = next({ dev: false });
const handle = app.getRequestHandler();

module.exports.main = async () => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(3000, () => {
    console.log("Next.js Lambda handler running on port 3000");
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Next.js App Router running on Lambda" }),
  };
};
