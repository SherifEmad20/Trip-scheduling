package Project.TripsBackend.repositories;

import Project.TripsBackend.entities.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Triprepository extends JpaRepository<Trip, Long> {

}