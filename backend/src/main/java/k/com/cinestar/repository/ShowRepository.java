package k.com.cinestar.repository;


import java.time.LocalDate;

import java.time.LocalDateTime;
import java.util.List;

import k.com.cinestar.dto.ShowInCinemaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import k.com.cinestar.entity.Show;

@Repository
public interface ShowRepository extends JpaRepository<Show, Long> {
    @Query("""
    SELECT new k.com.cinestar.dto.ShowInCinemaDTO(
        s.id,
        s.movie.id,
        sc.cinema.id,
        s.startTime
    )
    FROM Show s
   
    JOIN s.screen sc
    WHERE sc.cinema.id = :cinemaId
""")
    List<ShowInCinemaDTO> findShowsInCinemaByCinemaId(Integer cinemaId);


    @Query("""
    SELECT DISTINCT s.startTime
    FROM Show s
    WHERE s.movie.id = :movieId
    ORDER BY s.startTime
""")
    public List<LocalDateTime> findDaysOfShows(int movieId) ;

}
