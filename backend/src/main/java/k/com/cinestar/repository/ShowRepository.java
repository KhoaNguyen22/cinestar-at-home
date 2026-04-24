package k.com.cinestar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import k.com.cinestar.entity.Show;

@Repository
public interface ShowRepository extends JpaRepository<Show, Long> {
    List<Show> findShowsByScreenCinemaId(Integer cinemaId);
}
