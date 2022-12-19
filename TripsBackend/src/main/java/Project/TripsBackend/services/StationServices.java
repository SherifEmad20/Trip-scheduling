package Project.TripsBackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Project.TripsBackend.entities.Station;
import Project.TripsBackend.repositories.Stationrepository;

@Service
public class StationServices {

	private final Stationrepository stationRepo;

	@Autowired
	public StationServices(Stationrepository stationRepo) {
		this.stationRepo = stationRepo;
	}

	public void AddNewStation(Station station) {
		stationRepo.save(station);
	}

	public void updateStation(Long id, Station station) {
		for (int i = 0; i < stationRepo.findAll().size(); i++) {

			if (stationRepo.findAll().get(i).getId().equals(id)) {
				stationRepo.findAll().get(i).setStationName(station.getStationName());
				stationRepo.save(stationRepo.findAll().get(i));
			}
		}

	}

	public List<Station> getStations() {
		return stationRepo.findAll();
	}

	public void deleteStation(Long id) {
		stationRepo.deleteById(id);
	}
}
