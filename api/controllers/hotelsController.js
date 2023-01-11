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

  // const { cities } = req.query;
  // if (!cities) {
  //   return res.status(400).json({
  //     success: false,
  //     message: 'Please provide a city or cities in the query.',
  //   });
  // }
  // const citiesArr = cities.split(',');
  // Hotel.countDocuments({ city: { $in: citiesArr } }, (err, count) => {
  //   if (err) {
  //     return res.status(500).json({
  //       success: false,
  //       message: 'An error occurred. Please try again later.',
  //     });
  //   }
  //   return res.json({
  //     success: true,
  //     count,
  //   });
  // });
};

export const countByType = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
