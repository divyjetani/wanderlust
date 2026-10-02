const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.newReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    newReview.author = req.user._id;
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Added");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { listId, revId } = req.params;
    await Listing.findByIdAndUpdate(listId, { $pull: { reviews: revId } })
    await Review.findByIdAndDelete(revId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${req.params.id}`);
};
