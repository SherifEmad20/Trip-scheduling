package Project.TripsBackend.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Project.TripsBackend.entities.Admin;
import Project.TripsBackend.entities.Station;
import Project.TripsBackend.entities.Trip;
import Project.TripsBackend.services.AdminServices;
import Project.TripsBackend.services.StationServices;
import Project.TripsBackend.services.TripServices;

@RestController
@RequestMapping(path = "api/v1/student")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	private final TripServices tripServices;
	private final StationServices stationServices;
	private final AdminServices adminServices;

	public AdminController(TripServices tripServices, StationServices stationServices, AdminServices adminServices) {
		this.tripServices = tripServices;
		this.stationServices = stationServices;
		this.adminServices = adminServices;
	}

	@PostMapping("/AddTrip")
	public void AddTrip(@RequestBody Trip trip) {
		tripServices.AddNewTrip(trip);

	}

	@GetMapping("/GetTrips")
	public List<Trip> GetTrips() {

		return tripServices.getTrips();
	}

	@PutMapping("/UpdateTrip/{id}")
	public void UpdateTrip(@RequestBody Trip trip, @PathVariable("id") Long id) {
		tripServices.updateTrip(trip, id);

	}

	@DeleteMapping("DeleteTrip/{id}")
	public void deleteTrip(@PathVariable("id") Long id) {
		tripServices.deleteTrip(id);
	}

	@PostMapping("/AddStation")
	public void AddStation(@RequestBody Station station) {
		stationServices.AddNewStation(station);

	}

	@GetMapping("/GetStations")
	public List<Station> GetStations() {

		return stationServices.getStations();
	}

	@PutMapping("UpdateStation/{id}")
	public void updateStation(@PathVariable("id") Long id, @RequestBody Station station) {
		stationServices.updateStation(id, station);
	}

	@DeleteMapping("DeleteStation/{id}")
	public void deleteStation(@PathVariable("id") Long id) {
		stationServices.deleteStation(id);
	}

	@PostMapping("/Signup")
	public void signup(@RequestBody Admin admin) {
		adminServices.SignUp(admin);
	}

	@PostMapping("/Login")
	public ResponseEntity<Admin> login(@RequestBody Admin admin) {
		return adminServices.login(admin);
	}

	@PutMapping("/UpdateAdmin/{id}")
	public void updateAdmin(@PathVariable("id") Long id, @RequestBody Admin admin) {
		adminServices.updateAdmin(id, admin);
	}

	@GetMapping("/GetAdmins")
	public List<Admin> GetAdmins() {
		return adminServices.getAdmins();
	}

	@DeleteMapping("DeleteAdmin/{id}")
	public void deleteAdmin(@PathVariable("id") Long id) {
		adminServices.deleteAdmin(id);
	}
}
