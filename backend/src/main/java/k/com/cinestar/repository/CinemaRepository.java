package k.com.cinestar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import k.com.cinestar.entity.Cinema;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Integer> {}
