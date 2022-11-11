package Project.TripsBackend.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Trip {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	private String from_station;
	private String to_station;
	private LocalDate start_time;
	private LocalDate end_time;

	public Trip() {
	}

	public Trip(String from_station, String to_station, LocalDate start_time, LocalDate end_time) {
		this.from_station = from_station;
		this.to_station = to_station;
		this.start_time = start_time;
		this.end_time = end_time;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFrom_station() {
		return from_station;
	}

	public void setFrom_station(String from_station) {
		this.from_station = from_station;
	}

	public String getTo_station() {
		return to_station;
	}

	public void setTo_station(String to_station) {
		this.to_station = to_station;
	}

	public LocalDate getStart_time() {
		return start_time;
	}

	public void setStart_time(LocalDate start_time) {
		this.start_time = start_time;
	}

	public LocalDate getEnd_time() {
		return end_time;
	}

	public void setEnd_time(LocalDate end_time) {
		this.end_time = end_time;
	}
}
