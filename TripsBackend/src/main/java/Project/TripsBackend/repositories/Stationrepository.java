package Project.TripsBackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Project.TripsBackend.entities.Station;

@Repository
public interface Stationrepository extends JpaRepository<Station, Long> {

}
