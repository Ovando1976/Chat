export default function handler(req, res) {
  if (req.method === "POST") {
    const { question } = req.body;

    // Basic mock response. You can replace this with a GPT-API or real data integration.
    let answer;
    switch (true) {
      case /best beaches/.test(question.toLowerCase()):
        answer =
          "The best beaches in USVI are Trunk Bay, Magens Bay, and Honeymoon Beach.";
        break;
      case /hiking trails/.test(question.toLowerCase()):
        answer =
          "The best hiking trails in USVI include Reef Bay Trail, Ram Head Trail, and Bordeaux Mountain Trail.";
        break;
      case /historical sites/.test(question.toLowerCase()):
        answer =
          "Some notable historical sites in USVI are Fort Christian, Estate Whim Plantation Museum, and the Annaberg Sugar Plantation.";
        break;
      default:
        answer =
          "I'm sorry, I don't have information on that topic at the moment.";
    }

    res.status(200).json({ answer });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
