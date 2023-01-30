import Hotel from '../models/Hotel.js';

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.json(savedHotel).status(200);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.send(updatedHotel).status(200);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted');
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.json(hotel).status(200);
  } catch (error) {
    next(error);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
// ? Count bY City
// !
// TODO use query string in the url
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',');
  try {
    const list = await Promise.all(
      cities.map(city => {
        return Hotel.countDocuments({ city: city });
        // return Hotel.countDocuments({ city: { $in: city } });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
    const apartmentCount = await Hotel.countDocuments({ type: 'Apartment' });
    const resortCount = await Hotel.countDocuments({ type: 'Resort' });
    const villaCount = await Hotel.countDocuments({ type: 'Villa' });
    const cabinCount = await Hotel.countDocuments({ type: 'Cabin' });
    const data = [
      {
        type: 'hotel',
        count: hotelCount,
      },
      {
        type: 'apartment',
        count: apartmentCount,
      },
      {
        type: 'resort',
        count: resortCount,
      },
      {
        type: 'villa',
        count: villaCount,
      },
      {
        type: 'cabin',
        count: cabinCount,
      },
    ];
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
