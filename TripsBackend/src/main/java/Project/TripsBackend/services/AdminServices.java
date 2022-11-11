package Project.TripsBackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import Project.TripsBackend.entities.Admin;
import Project.TripsBackend.repositories.Adminrepository;

@Service
public class AdminServices {
	private final Adminrepository adminRepo;

	@Autowired
	public AdminServices(Adminrepository adminRepo) {
		this.adminRepo = adminRepo;
	}

	public void SignUp(Admin admin) {
		adminRepo.save(admin);
	}

	public ResponseEntity<Admin> login(Admin admin) {

		boolean flag = false;

		for (int i = 0; i < adminRepo.findAll().size(); i++) {
			if (adminRepo.findAll().get(i).getEmail().equals(admin.getEmail())
					&& adminRepo.findAll().get(i).getPassword().equals(admin.getPassword())) {
				flag = true;
			}
		}

		if (flag == true) {
			return ResponseEntity.ok(admin);

		} else
			return (ResponseEntity<Admin>) ResponseEntity.internalServerError();
	}

	public List<Admin> getAdmins() {
		return adminRepo.findAll();
	}

	public void deleteAdmin(Long id) {
		adminRepo.deleteById(id);
	}

	public void updateAdmin(Long id, Admin admin) {
		for (int i = 0; i < adminRepo.findAll().size(); i++) {

			if (adminRepo.findAll().get(i).getId().equals(id)) {
				adminRepo.findAll().get(i).setName(admin.getName());
				adminRepo.findAll().get(i).setPassword(admin.getPassword());
			}
			adminRepo.save(adminRepo.findAll().get(i));
		}
	}

}
