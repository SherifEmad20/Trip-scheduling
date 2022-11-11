package Project.TripsBackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Project.TripsBackend.entities.Admin;

@Repository
public interface Adminrepository extends JpaRepository<Admin, Long> {

}
