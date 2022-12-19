package Project.TripsBackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Project.TripsBackend.entities.Trip;
import Project.TripsBackend.repositories.Triprepository;

@Service
public class TripServices {
	private final Triprepository tripRepo;

	@Autowired
	public TripServices(Triprepository tripRepo) {
		this.tripRepo = tripRepo;
	}

	public void AddNewTrip(Trip trip) {
		tripRepo.save(trip);

	}

	public List<Trip> getTrips() {

		return tripRepo.findAll();
	}

	public void deleteTrip(Long id) {

		tripRepo.deleteById(id);
	}

	public void updateTrip(Trip NewValues, Long id) {

		Optional<Trip> trip = tripRepo.findById(id);
		trip.get().setEnd_time(NewValues.getEnd_time());
		trip.get().setStart_time(NewValues.getStart_time());
		trip.get().setFrom_station(NewValues.getFrom_station());
		trip.get().setTo_station(NewValues.getTo_station());

		tripRepo.save(trip.get());
	}

}
