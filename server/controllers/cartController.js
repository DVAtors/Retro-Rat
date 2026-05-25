const Cart = require('../models/Cart');
const TEMP_USER_ID = '6a031ed938a375e22177a08c';

//find the cart or make a new one if its not there for some reason
async function getOrCreateCart(userId) {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
  }
  return cart;
}

// GET /cart: returns the cart listings
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: TEMP_USER_ID }).populate({
      path: 'items.listing',
      populate: { path: 'seller', select: 'name' }, // makes listing.seller.name a thing
    });

    // empty/no cart= empty array
    if (!cart) return res.json([]);

    const listings = cart.items
      .filter((item) => item.listing)
      .map((item) => ({
        ...item.listing.toObject(),
        addedAt: item.addedAt,
      }));

    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /cart: add a listing to the cart. Body: {listingId}
exports.addToCart = async (req, res) => {
  try {
    const { listingId } = req.body;
    if (!listingId) {
      return res.status(400).json({ message: 'listingId is required' });
    }

    const cart = await getOrCreateCart(TEMP_USER_ID);

    // don't add the same listing twice (the button might run twice cause dev mode or smth)
    const alreadyIn = cart.items.some(
      (item) => item.listing.toString() === listingId
    );
    if (!alreadyIn) {
      cart.items.push({ listing: listingId });
      await cart.save();
    }

    res.status(200).json({ message: 'Added to cart', count: cart.items.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error('addToCart error:', err); 
  }
};

// DELETE /cart/:listingId :remove a listing from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const { listingId } = req.params;
    const cart = await Cart.findOne({ user: TEMP_USER_ID });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(
      (item) => item.listing.toString() !== listingId
    );
    await cart.save();

    res.json({ message: 'Removed from cart', count: cart.items.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};