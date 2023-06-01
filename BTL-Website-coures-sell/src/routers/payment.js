const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const YOUR_STRIPE_SECRET_KEY =
  "sk_test_51NDONvECtiYfQVX1uGrQP28bVbLEIy7vwp73Q6ivSXenWVR4q8rZqgjX6dN9CDLnGImQdCv5QvXszvCSbvY2jz5e008A7osubO";
const stripe = Stripe(YOUR_STRIPE_SECRET_KEY);

router.post("/charge", async (req, res) => {
  try {
    const amount = req.body.amount;
    const token = req.body.stripeToken;

    // Create a charge
    const charge = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: "Thanh toán mua hàng",
      source: token,
    });

    // Success
    console.log(charge);
    res.status(200).json({ message: "Thanh toán thành công", charge });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Thanh toán thất bại, vui lòng thử lại", error });
  }
});

module.exports = router;
